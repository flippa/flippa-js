#!/bin/bash

set -ex

npm login

npm publish --unsafe-perm
