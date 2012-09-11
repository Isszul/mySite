#! /bin/bash

# Update and restart script

while [ true ]
do

killall node

git pull --update -f

nohup node app

done
