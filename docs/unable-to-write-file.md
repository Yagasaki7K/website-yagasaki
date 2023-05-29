# Unable to Write File no Linux/VS Code


I recently encountered this issue, and I knew it was a permission problem.

It can happen when you clone a repository, and due to SSH configuration or other restrictions, it only allows read permissions for the repository. Even if you try to manually create a file or use the terminal to create one within the folder, it simply returns `Unable to write file.../`.

The resolution for this was to grant the necessary permissions to my user on Ubuntu, in my case: `yagasaki`.

```bash
chown -R yagasaki conversation
```

Afterward, I was able to have the appropriate permissions to create and edit files as needed.
