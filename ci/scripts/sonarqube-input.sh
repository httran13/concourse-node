#!/usr/bin/env bash

pwd
ls
mv node-cache/node_modules dev-branch
cd dev-branch
npm rebuild
npm test
perl -i -pe's|SF:.*/dev-branch/|SF:/tmp/build/put/sonarqube-analysis-input/|g' coverage/lcov.info
cp -r . ../sonarqube-analysis-input