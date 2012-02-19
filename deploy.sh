#!/bin/bash

cd /Library/WebServer/Documents/sites/iancrowther/site/new/
pwd

git ftp init -u iancrowther -p - ftp://ftp.freehostia.com/iancrowther.co.uk/
#git ftp push --user iancrowther --passwd passion ftp://ftp.freehostia.com/iancrowther.co.uk/