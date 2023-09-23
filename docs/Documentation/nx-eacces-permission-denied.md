# NX Error: EACCES: permission denied

Are you having trouble running yarn dev and it's showing an NX permission denied error?

Run this command and check if it worked.

`sudo npm install -g --unsafe-perm=true --allow-root`

If it didn't work, run `sudo su` and try again.

If the issue persists, contact the person in charge of the project.

Or maybe you need give a permission using `chmod -R 777 FOLDERNAME`