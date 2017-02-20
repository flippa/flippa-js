#!/bin/sh

set -ex

npm login

npm publish --unsafe-perm
