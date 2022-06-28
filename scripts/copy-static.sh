#!/bin/bash

paths=("onesignal-ngx" "react" "vue/v2" "vue/v3")

for tgt in "${paths[@]}"; do
  cp -a src/static/$tgt/* build/$tgt; # shim-specific files
  rsync -t src/static/* build/$tgt/; # shared files (e.g: issue templates)
  rsync -tr src/static/$tgt/.[^.]* build/$tgt/; # shim-specific hidden files
  rsync -tr src/static/.[^.]* build/$tgt/; # shared hidden files (e.g: issue templates)
done
