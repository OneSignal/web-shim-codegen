#!/bin/bash
# Usage: clean-repo.sh <repo-path> [additional-files-to-keep...]

# Default files to always keep
default_files=(".git" "CHANGELOG.md")

repo_path=$1
shift # Remove first argument, leaving remaining args as additional files

# Start with empty exclude_args
exclude_args=""

# Add default files
for file in "${default_files[@]}"; do
  exclude_args="$exclude_args -o -name $file"
done

# Add additional files
for file in "$@"; do
  exclude_args="$exclude_args -o -name $file"
done

# Remove initial "-o" from exclude_args
exclude_args=${exclude_args:3}

(cd "$repo_path" && find . -mindepth 1 -maxdepth 1 ! \( $exclude_args \) -exec rm -rf {} +)
