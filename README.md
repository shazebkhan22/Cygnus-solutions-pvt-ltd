To push your code to GitHub in the future, follow these simple steps each time:

1. Check the Status
Before pushing, it’s a good idea to check the status of your repository to see which files have changed:

git status
This will show you the modified, new, or deleted files.

2. Stage Your Changes
To stage all modified or new files (this prepares the changes for commit):

git add .
If you want to add specific files, use:

git add <file-name>

3. Commit Your Changes
Once the changes are staged, commit them with a meaningful message:

git commit -m "Your commit message here"
For example, you might say:

git commit -m "Updated the Navbar component"
4. Push the Changes
Now, push the changes to GitHub. If you're using the master branch:

git push origin master
