# Microservices Demo

This folder contains four independent Spring Boot Maven projects:

- account
- loan
- eureka-discovery-server
- api-gateway

## Prerequisites

- Java 17
- Maven

## Run the services

From the project root, open four separate terminals and run:

### 1. Eureka Discovery Server
```bash
cd microservices/eureka-discovery-server
mvn spring-boot:run
```

### 2. Account Service
```bash
cd microservices/account
mvn spring-boot:run
```

### 3. Loan Service
```bash
cd microservices/loan
mvn spring-boot:run
```

### 4. API Gateway
```bash
cd microservices/api-gateway
mvn spring-boot:run
```

## URLs

- Eureka: http://localhost:8761
- Account: http://localhost:8080/accounts/12345
- Loan: http://localhost:8081/loans/100
- Gateway:
  - http://localhost:9090/account-service/accounts/12345
  - http://localhost:9090/loan-service/loans/100

## Build all modules

```bash
cd microservices
mvn clean install
```
