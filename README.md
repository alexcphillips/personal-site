# personal-site
working on implementing docker containers

(without docker)
Installing Git
sudo yum install git

Installing MongoDB

Create a file to download MongoDB directly using yum
sudo vi /etc/yum.repos.d/mongodb-org-4.0.repo

Copy/paste the following to repo file
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

Install MongoDB packages
sudo yum -y install mongodb-org

Check you have MongoDB installed properly
which mongo

above should say /usr/bin/mongo
