#!/usr/bin/env bash

echo "reading properties value"
ls
find keyval
cat keyval/keyval.properties
mv node-cache/node_modules dev-branch
cd dev-branch
npm run test
cp -r . ../sonarqube-analysis-input
