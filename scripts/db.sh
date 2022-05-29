#!/usr/bin/env bash

set -eu

mkdir -p .cache/DB
docker run -d -p 27017:27017 -v "${PWD}"/.cache/DB/data:/data/db mongo:5.0.8