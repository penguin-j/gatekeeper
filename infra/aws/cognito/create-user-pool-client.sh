#!/bin/bash

source .env

aws cognito-idp create-user-pool-client \
    --user-pool-id ${COGNITO_USER_POOL_ID} \
    --client-name gatekeeper-web