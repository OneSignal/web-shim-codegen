#!/bin/bash
set -euo pipefail

bold=$(tput bold 2>/dev/null || true)
normal=$(tput sgr0 2>/dev/null || true)

log() {
  echo -e "\n${bold}$1${normal}"
}

EXAMPLE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PARENT_DIR="$(cd "$EXAMPLE_DIR/.." && pwd)"

log "Building react-onesignal in $PARENT_DIR"
cd "$PARENT_DIR"
vp run build

log "Packing react-onesignal"
rm -f "$EXAMPLE_DIR"/react-onesignal-*.tgz
TARBALL=$(bun pm pack | grep -E '\.tgz$' | tail -1)
mv "$PARENT_DIR/$TARBALL" "$EXAMPLE_DIR/$TARBALL"

log "Installing tarball into example"
cd "$EXAMPLE_DIR"
vp add "./$TARBALL"
