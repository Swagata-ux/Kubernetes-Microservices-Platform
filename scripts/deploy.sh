#!/bin/bash
set -e
echo "Deploying microservices via Helm..."
helm upgrade --install microservices charts/microservices
