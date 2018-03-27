#!/bin/bash

ROOT=$(cd $(dirname $0) && pwd)

cd $ROOT

# Standardize the script files / the program files into Unix style.
find $ROOT -type f -name "*.sh" | xargs chmod +x
find $ROOT -type f -name "*.sh" | xargs sed -i "s/\r//g"

# Build scripts
$ROOT/build.sh

# Test start
cd test && npm install && cd -
mocha $(ls test/test*.js) -t 5300 -R tap
