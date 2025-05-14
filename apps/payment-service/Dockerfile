FROM golang:1.22-alpine
WORKDIR /app
COPY go.mod ./
COPY main.go .
COPY internal/ ./internal
RUN go build -o payment-service main.go
CMD ["./payment-service"]