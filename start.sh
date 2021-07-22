#!/bin/bash
ps -ef|grep node | grep -v grep | awk '{print $2}' | xargs sudo kill -9
yarn build
yarn start
