#!/usr/bin/env bash

mv node-cache/node_modules dev-branch
cd dev-branch
npm run test
