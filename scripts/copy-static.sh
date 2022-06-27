#!/bin/bash

paths=("onesignal-ngx" "react" "vue/v2" "vue/v3")

for tgt in "${paths[@]}"; do
  cp -a src/static/$tgt/* build/$tgt; # shim-specific files
  rsync -vt src/static/* build/$tgt/; # shared files (e.g: issue templates)
  rsync -vtr src/static/.[^.]* build/$tgt/; # shared hidden files (e.g: issue templates)
done
