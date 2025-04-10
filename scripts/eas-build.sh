#!/bin/bash

EAS_PROJECT_ID=67c91aa5-b892-45a7-ba27-51158714253b
EXPO_APPLE_ID=$(grep EXPO_APPLE_ID .env | cut -d '=' -f2)

# Check if EXPO_APPLE_ID is set, else raise error
if [ -z "$EXPO_APPLE_ID" ]; then
  echo "Error: EXPO_APPLE_ID is not set in .env"
  exit 1
fi

EAS_PROJECT_ID=$EAS_PROJECT_ID EXPO_APPLE_ID=$EXPO_APPLE_ID  eas build --platform all --profile production --no-wait --non-interactive --auto-submit

rm -f .npmrc
