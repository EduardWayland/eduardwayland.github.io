#!/usr/bin/env bash
if [[ "$1" =~ ^$ ]]; then
    echo "You must specify a commit message!"
else
    echo "Commit: $1"
    npm run build && gh-pages -d public -b main -m "[DEPLOY] $1"
fi