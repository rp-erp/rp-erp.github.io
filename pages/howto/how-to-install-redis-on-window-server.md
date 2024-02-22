# How to install Redis on Windows Server

This article shows the instruction on how to install Redis server on Window Server.

Overall, there are two main parts of the installation

- Install Subsystem Ubuntu
- Install Redis Stack Server

## 1. Install Subsystem Ubuntu

Redis from the 7.x.x version does not support on native window anymore. So we need to install linux subsystem and install Redis on top of it.

To begin with, please open POWER SHELL and follow the steps below.

**Step 1:** Download Ubuntu and enable Linux Subsystem mode on Windows (You should not run Ubuntu 20.04 LTS version because there are some recorded issues that have not been fixed on the official MS website, so we will use Ubuntu 18.04 LTS version)

```ps
Invoke-WebRequest -Uri https://aka.ms/wsl-ubuntu-1804 -OutFile Ubuntu.zip -UseBasicParsing
```

Step 2: Unzip the Ubuntu file downloaded in the step #1

```ps
Expand-Archive ./Ubuntu.zip ./Ubuntu
```

Step 3: Set environment variables

```ps
$userenv = [System.Environment]::GetEnvironmentVariable("Path", "User")
[System.Environment]::SetEnvironmentVariable("PATH", $userenv + $(Get-Location).Path + "\Ubuntu", "User")
```

Step 4: Install WSL, Enter "Y" to restart the machine.

```ps
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Step 5: Change directory to `Ubuntu` folder and execute `ubuntu1804.exe` file

```ps
cd Ubuntu
.\ubuntu1804.exe
```

Step 6: Set up your root user. Note: it should be your window machine username. In sta

```ps
sudo passwd <your_window_user>
New password: <pass_word>
Retype new password: <pass_word>
```

Step 7

```
su <your_window_user>
<Enter the password>
```

Step 8: Update package repository

```
sudo apt-get update
sudo apt-get upgrade
```

## 2. Install Redis Stack Server

First, access to linux terminal

```
wsl
```

Then, follow the steps below.

Step 1

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
```

Step 2

```bash
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
```

Step 3

```bash
sudo apt-get update
```

Step 4

```bash
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Step 5

```bash
sudo apt-get install redis-stack-server
```

Step 6

```bash
mkdir redis_db_data
```

Step 6: Create `redis.conf` at the same folder level with this content

Note: put your redis password on `<redis_password>`

```conf
bind 0.0.0.0
port 6380
requirepass <redis_password>
save 60 1000
appendonly yes
dir /redis_db_data
stop-writes-on-bgsave-error no
```

Step 7: Create `start.sh` file 

```bash
sudo redis-stack-server ./redis.conf --daemonize yes
```

you might get this warning

```
 WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
```

To fix it, execute this command

```
sudo vim  /etc/sysctl.conf
```

Then, press `i` to switch to INSERT MODE and add this content

```
vm.overcommit_memory=1
```

Next, press `ESC` button then type `:wq` and `ENTER` to save the content.
Finally, execute this command to load the config

```
sysctl vm.overcommit_memory=1
```

Then restart redis server.

Step 8: Create `stop.sh` file

```
redis-cli -h 127.0.0.1 -p 6380 -a <redis_password> shutdown nosave
```

Step 9: Start Redis Stack Server

```
wsl
bash ./start.sh
```

Note: to stop server, just execute `bash .\stop.sh`

Step 10: Allow Redis port to external app (optional)

open POWER SHELL and execute the command below

```ps
New-NetFirewallRule -DisplayName "Allow Redis Port 6380" -Direction Inbound -LocalPort 6380 -Protocol TCP -Action Allow
```
