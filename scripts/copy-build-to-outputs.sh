#!/bin/bash

if [ -d "build" ]; then
  # Create outputs directory if it doesn't exist
  mkdir -p outputs

  # Copy each subdirectory from build/ to outputs/
  for dir in build/*/; do
    if [ -d "$dir" ]; then
      dirname=$(basename "$dir")
      echo "Copying $dirname to outputs/"
      rsync -q -tr --exclude=node_modules --exclude=dist "$dir" "outputs/$dirname"
    fi
  done

  echo "Finished copying build/ contents to outputs/"
else
  echo "Build folder does not exist. Skipping."
fi
