#!/usr/bin/env bash
b=$(git branch | awk 'NR==1{print $2}')
git add .
git commit -m "${1}"
git push -u origin ${b}