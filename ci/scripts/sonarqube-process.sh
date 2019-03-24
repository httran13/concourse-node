#!/usr/bin/env bash

cd sonarqube-analysis-input
perl -i -pe's|SF:.*/dev-branch/|SF:/tmp/build/put/sonarqube-analysis-package/|g' coverage/lcov.info
