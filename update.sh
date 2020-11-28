#!/bin/bash

echo "Updating node modules : "
echo "npx ncu -u && yarn install"

npx ncu -u && yarn install

echo "Updating Pico submodule : "
echo "git submodule foreach git pull origin master"

git submodule foreach git pull origin master
