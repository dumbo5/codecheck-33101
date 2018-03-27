#!/bin/bash

ROOT=$(cd $(dirname $0) && pwd)

### Java ###
# java -jar $(ls $ROOT/java/target/ce-exam-*-jar-with-dependencies.jar) "$@"

### Scala ###
# java -jar $(ls $ROOT/scala/target/ce-exam-*-jar-with-dependencies.jar) "$@"

### Python ###
# python $ROOT/python/src/main.pyc "$@"

### NodeJS ###
# node $ROOT/nodejs/src/main.js "$@"

### C++ ###
# $ROOT/c++/app.o "$@"
