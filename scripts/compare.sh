#!/bin/bash
set -e

if diff <(hono request src/app1/app.ts -P /doc | jq -r .body | jq .) \
        <(hono request src/app2/app.ts -P /doc | jq -r .body | jq .); then
  echo "✅ Documents are identical!"
else
  echo "❌ Documents are different!"
  exit 1
fi
