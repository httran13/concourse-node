#!/usr/bin/env bash

perl -i -pe's|SF:.*/dev-branch/|SF:/tmp/build/put/sonarqube-analysis-input/|g' coverage/lcov.info
cp -r . ../sonarqube-analysis-package