#!/bin/bash

aws cognito-idp create-user-pool \
    --cli-input-yaml file://aws/cognito/user-pool.yaml