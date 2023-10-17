#!/bin/bash

source .env

aws cognito-idp create-user-pool-domain \
  --domain ${COGNITO_USER_POOL_DOMAIN} \
  --user-pool-id ${COGNITO_USER_POOL_ID}