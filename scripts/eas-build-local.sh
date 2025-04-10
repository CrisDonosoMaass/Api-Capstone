#!/bin/bash

# sh ./scripts/check-code.sh

EAS_PROJECT_ID=67c91aa5-b892-45a7-ba27-51158714253b

EAS_PROJECT_ID=$EAS_PROJECT_ID eas build -p ios --profile staging --local

rm -f .npmrc
