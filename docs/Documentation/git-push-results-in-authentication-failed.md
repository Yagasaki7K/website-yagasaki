# Git push results in "Authentication Failed"

You may also need to update the origin for your repository if it is set to HTTPS. Do this to switch to SSH:

```bash
git remote -v
git remote set-url origin git@github.com:USERNAME/REPONAME.git
```

Or maybe you need a generate a ssh `ssh-keygen` and copy using `cat /home/yagasaki/.ssh/id_rsa.pub` file