# Microservices Project

A polyglot microservices template featuring Node.js, Go, and Python services, complete with CI/CD, Kubernetes deployment (Helm), Terraform infrastructure, GitOps (ArgoCD), and monitoring/logging subcharts.

---

## Project Structure

├── .github/workflows # CI/CD pipelines (GitHub Actions)
├── apps # Application source code
│ ├── frontend # Node.js frontend
│ ├── order-service # Node.js order service
│ ├── payment-service # Go payment service
│ └── inventory-service # Python inventory service
├── charts # Helm charts (main + subcharts)
├── infrastructure # Terraform infrastructure code
├── argocd # GitOps configuration (ArgoCD)
├── scripts # Deployment and utility scripts
└── README.md # This file

---

## Quick Start

### 1. Clone the Repository

git clone https://github.com/your-org/your-repo.git
cd your-repo

### 2. Build & Run Services Locally

#### Frontend

cd apps/frontend
npm install
npm start

#### Order Service

cd apps/order-service
npm install
npm start

#### Payment Service

cd apps/payment-service
go build -o payment-service main.go
./payment-service

#### Inventory Service

cd apps/inventory-service
pip install -r requirements.txt
python app.py

---

## Running Tests

### Frontend

cd apps/frontend
npm install
npm test

### Order Service

cd apps/order-service
npm install
npm test

### Payment Service

cd apps/payment-service
go test ./internal

### Inventory Service

cd apps/inventory-service
pip install -r requirements.txt
python -m unittest discover tests

---

## CI/CD

- **CI:** Automated via `.github/workflows/ci.yaml` (runs tests on push/PR)
- **CD:** Automated via `.github/workflows/cd.yaml` (triggers deployment pipeline)

---

## Kubernetes Deployment

1. **Helm Chart:**  
   Deploy all services with a single command:

./scripts/deploy.sh

text

2. **Helm Chart Structure:**

- `charts/microservices`: Main chart for all services
- `charts/prometheus-stack`: Monitoring subchart
- `charts/loki-stack`: Logging subchart

---

## Infrastructure as Code

- **Terraform:**  
  Infrastructure defined in `infrastructure/` (modularized for network, Kubernetes, and database).
- **Apply Infrastructure:**  
  cd infrastructure
  terraform init
  terraform apply

text

---

## GitOps

- **ArgoCD Applications:**
- `argocd/applications/production.yaml`
- `argocd/applications/staging.yaml`
- **Kustomize overlays:**
- `argocd/kustomize/`

---

## Utility Scripts

- `scripts/deploy.sh`: Deploys via Helm
- `scripts/seal-secrets.sh`: Seals Kubernetes secrets
- `scripts/healthcheck.sh`: Checks health endpoints for all services

---

## Endpoints

| Service           | Default Port | Example Endpoint |
| ----------------- | ------------ | ---------------- |
| Frontend          | 3000         | `/`              |
| Order Service     | 4000         | `/orders`        |
| Payment Service   | 5000         | `/payments`      |
| Inventory Service | 6000         | `/inventory`     |

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

MIT

---
