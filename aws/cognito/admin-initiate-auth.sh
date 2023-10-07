#!/bin/bash

source .env

aws cognito-idp admin-initiate-auth \
    --user-pool-id ${COGNITO_USER_POOL_ID} \
    --client-id ${COGNITO_USER_POOL_CLIENT_ID} \
    --auth-flow ADMIN_NO_SRP_AUTH \
    --auth-parameters "USERNAME=${COGNITO_USER_NAME},PASSWORD=${COGNITO_USER_PASSWORD}"