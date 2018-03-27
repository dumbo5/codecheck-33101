#!/bin/bash

ROOT=$(cd $(dirname $0) && pwd)

### Java ###
# cd $ROOT/java/
# mvn package -Dmaven.test.skip=true

### Scala ###
# cd $ROOT/scala/
# mvn package -Dmaven.test.skip=true

### Python ###
# cd $ROOT/python/src
# python -m compileall .

### C++ ###
# cd $ROOT/c++
# c++ -o app.o src/*.cpp
