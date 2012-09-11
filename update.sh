#! /bin/bash

# Update and restart script


git pull --update -y

killall node

nohup node app &


