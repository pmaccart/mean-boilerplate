#!/bin/bash

sudo apt-get update
sudo apt-get install -y git

sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

cd /vagrant/server
npm install

cd /vagrant/client
npm install
bower install
