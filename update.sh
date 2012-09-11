#! /bin/bash

# Update and restart script


git pull --update -f

killall node

nohup node app &


