#!/bin/bash
set -e
echo "Sealing Kubernetes secrets..."
kubeseal < secret.yaml > sealed-secret.yaml
