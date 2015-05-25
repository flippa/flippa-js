#!/bin/bash

set -ex

TAG=$BUILDKITE_COMMIT make test
