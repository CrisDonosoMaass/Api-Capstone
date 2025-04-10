#!/bin/bash

set -e

npm run ts:check
npm run format:check
# Exige actualizacion de dependencias por minimas que sean
# npm run packages:check
npm run lint
