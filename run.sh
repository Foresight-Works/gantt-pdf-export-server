#!/bin/bash


echo "Start"

kill -9 ` ps -eaf | grep "node ./src/server.js" | grep -v grep | grep -v sh  | awk '{print $2}'`

echo ""
npm run start &
