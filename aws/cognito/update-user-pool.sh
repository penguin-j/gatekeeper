#!/bin/bash

source .env

aws cognito-idp update-user-pool \
  --user-pool-id ${COGNITO_USER_POOL_ID} \
  --lambda-config PreSignUp=${LAMBDA_ARN__PRE_SIGN_UP}
