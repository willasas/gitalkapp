#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com/aclor/webproject.git" master
git push -f "https://${access_token}@github.com/willasas/gitalkapp.git" master
start "https://github.com/willasas/gitalkapp"
exec /bin/bash