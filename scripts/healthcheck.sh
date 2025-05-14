#!/bin/bash
set -e
echo "Checking health of services..."
curl -s http://localhost:3000/
curl -s http://localhost:4000/orders
curl -s http://localhost:5000/payments
curl -s http://localhost:6000/inventory
