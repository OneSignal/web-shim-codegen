#!/bin/bash

if [ -d "build" ]; then
  # Create outputs directory if it doesn't exist
  mkdir -p outputs

  # Copy each subdirectory from build/ to outputs/
  for dir in build/*/; do
    if [ -d "$dir" ]; then
      dirname=$(basename "$dir")
      echo "Copying $dirname to outputs/"
      rsync -q -tr --delete --exclude=node_modules --exclude=dist --exclude=bun.lock --exclude=.angular --exclude='*.tgz' "$dir" "outputs/$dirname"
      find "outputs/$dirname" -name '.angular' -type d -prune -exec rm -rf {} +
      find "outputs/$dirname" -name '*.tgz' -type f -delete
    fi
  done

  echo "Finished copying build/ contents to outputs/"
else
  echo "Build folder does not exist. Skipping."
fi
