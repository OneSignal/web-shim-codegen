#!/bin/bash
set -euo pipefail

# Usage: patch-repo.sh <tar-file> <target-directory> <repo-name>
# Example: patch-repo.sh dist/react.tgz __clone/react react-onesignal
# Requires PACKAGE_VERSION environment variable to be set

if [ $# -lt 3 ]; then
  echo "Usage: $0 <tar-file> <target-directory> <repo-name>"
  exit 1
fi

TAR_FILE="$1"
TARGET_DIR="$2"
REPO_NAME="$3"
VERSION="${PACKAGE_VERSION:-unknown}"

if [ ! -f "$TAR_FILE" ]; then
  echo "Error: Tar file $TAR_FILE does not exist"
  exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Target directory $TARGET_DIR does not exist"
  exit 1
fi

# Extract tar archive
tar zxvvf "$TAR_FILE" -C "$(dirname "$TARGET_DIR")"

# Add all changes and commit
cd "$TARGET_DIR"
git add -A
if git commit -m "chore: sync with web-shim-codegen v$VERSION"; then
  echo "$REPO_NAME repository has been updated"
else
  echo "$REPO_NAME repository has NOT been updated, no changes to commit"
fi

