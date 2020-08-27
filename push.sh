#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'deploy'
git push -f https://@github.com/willasas/gitalkapp.git master
git push -f https://@gitee.com/aclor/webproject.git master
cd -