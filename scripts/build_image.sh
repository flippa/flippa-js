#!/bin/bash

set -ex

TAG=$BUILDKITE_COMMIT make build
