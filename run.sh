#! /bin/bash

# Update and restart script

while [ true ]
do

git pull --update -f

nohup node app

done
