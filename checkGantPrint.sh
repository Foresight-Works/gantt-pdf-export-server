#!/bin/bash

count=`ps -eaf | grep "node ./src/server.js" | grep -v grep | grep -v sh  | awk '{print $2}' | wc -l`

if [ $count -gt 0 ]; then
    echo `ps -eaf | grep "node ./src/server.js" | grep -v grep | grep -v sh  | awk '{print $2}'`
    echo 'Gant  print is ok +++ ' `date`
else
    echo '------ Restart node print --------- ' `date`
    cd  /home/rnd/Work/gantt-pdf-export-server
    ./run.sh
fi
