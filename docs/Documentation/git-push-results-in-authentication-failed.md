# Git push results in "Authentication Failed"

You may also need to update the origin for your repository if it is set to HTTPS. Do this to switch to SSH:

```bash
git remote -v
git remote set-url origin git@github.com:USERNAME/REPONAME.git
```