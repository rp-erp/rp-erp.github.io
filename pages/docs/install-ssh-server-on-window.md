# How to Install SSH Server on Windows

To set up SSH access to your Windows server, you can use the built-in OpenSSH Server. Here's a step-by-step guide:

1. Install OpenSSH Server: Open PowerShell as Administrator and run the following command:

```
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

2. Start the service: Once installed, start the SSH server service by running:

```
Start-Service sshd
```

3. Set the service to start automatically: To ensure the SSH server is automatically started after a reboot, run:

```
Set-Service -Name sshd -StartupType 'Automatic'
```

4. Confirm the Firewall rule is configured: It should be created automatically by the setup. In case it's not, run:

```
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
```

5. Check the installation: You can check that the installation was successful by running:

```
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
```

6. Create an SSH key pair: On your local machine, use ssh-keygen to create an SSH key pair. If you're on Linux or macOS, you can use the following command:

```
ssh-keygen
```

7. Set permission

```
cd ~
mkdir .ssh
notepad.exe .ssh\authorized_keys
```

8. Add content for `authorized_keys` file

```
icacls .ssh /inheritance:r
icacls .ssh /grant "your-username:(F)"
icacls .ssh\authorized_keys /inheritance:r
icacls .ssh\authorized_keys /grant "your-username:(F)"
```

9. Open config file at `C:\\<your-username>\ssh\sshd_config` and remove the # at the beginning of the line to uncomment it, and change 22 to your desired port number. For example, to change the SSH port to `2422`

```
Port 2422
```

10. Restart SSH server to take effect

```
Restart-Service sshd
Get-Service sshd
```




