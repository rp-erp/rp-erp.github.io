# How to Install SSH Server on Windows

## Install SSH Server

To set up SSH access to your Windows server, you can use the built-in OpenSSH Server. Here's a step-by-step guide:

1. Install OpenSSH Server: Open PowerShell as Administrator and run the following command:

```ps
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

2. Start the service: Once installed, start the SSH server service by running:

```ps
Start-Service sshd
```

3. Set the service to start automatically: To ensure the SSH server is automatically started after a reboot, run:

```ps
Set-Service -Name sshd -StartupType 'Automatic'
```

4. Confirm the Firewall rule is configured: It should be created automatically by the setup. In case it's not, run:

```ps
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
```

5. Check the installation: You can check that the installation was successful by running:

```ps
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
```

6. Create an SSH key pair: On your local machine, use ssh-keygen to create an SSH key pair. If you're on Linux or macOS, you can use the following command:

```ps
ssh-keygen
```

7. Set permission

```ps
cd ~
mkdir .ssh
notepad.exe .ssh\authorized_keys
```

8. Add content for `authorized_keys` file

```ps
icacls .ssh /inheritance:r
icacls .ssh /grant "your-username:(F)"
icacls .ssh\authorized_keys /inheritance:r
icacls .ssh\authorized_keys /grant "your-username:(F)"
```

9. Open config file at `C:\\ProgramData\ssh\sshd_config` and remove the # at the beginning of the line to uncomment it, and change 22 to your desired port number. For example, to change the SSH port to `2422`

```ps
Port 2422
```

10. Open Port `2422`

```ps
New-NetFirewallRule -DisplayName "Open Port 2422" -Direction Inbound -LocalPort 2422 -Protocol TCP -Action Allow
```

11. Restart SSH server to take effect

```ps
Restart-Service sshd
Get-Service sshd
```

## Setup SSH User

1. Create a new user

You can create a new user with the following command in PowerShell, replacing username and password with the username and password you want to use

```ps
New-LocalUser -Name "username" -Password (ConvertTo-SecureString -AsPlainText "password" -Force)
```

2. Add a user to the Administrators group

To add a user to the Administrators group on a Windows Server using PowerShell, you can use the Add-LocalGroupMember cmdlet. Here's how you can do it

```ps
Add-LocalGroupMember -Group "Administrators" -Member "username"
```

3. Allow the user to log in through SSH

By default, only users in the Administrators group can log in through SSH. If the user is not in the Administrators group, you'll need to add them to the `sshd_config` file. You can do this by opening the file (usually located at `C:\ProgramData\ssh\sshd_config`) in a text editor and adding the following line, replacing username with the username you used in the previous steps:

```ps
AllowUsers username
```

After making these changes, you'll need to restart the OpenSSH Server service for the changes to take effect. You can do this with the following command in PowerShell

```ps
Restart-Service sshd
```

The end
