# Employee Management System

A production-ready Employee Management System backend built using **Java**, **Spring Boot**, **Spring Security**, **JWT**, **Spring Data JPA**, and **PostgreSQL** following enterprise-level architecture and clean coding principles.

---

# Project Overview

This project simulates a real-world Employee Management System used in organizations.

The application follows enterprise backend development practices including:

- Layered Architecture
- DTO Pattern
- MapStruct
- Bean Validation
- Global Exception Handling
- JWT Authentication
- Role-Based Authorization
- Soft Delete
- RESTful API Design

The project is being developed phase by phase while following SDLC principles instead of creating simple CRUD applications.

---

# Features

## Department Management

- Create Department
- Get All Departments
- Get Department by ID
- Update Department
- Delete Department

---

## Employee Management

- Create Employee
- Get All Employees
- Get Employee by ID
- Update Employee
- Delete Employee
- Department Mapping
- Role Mapping

---

## Role Management

- Create Role
- Get All Roles
- Get Role by ID
- Update Role
- Soft Delete Role
- Prevent Duplicate Roles
- Prevent Assignment of Inactive Roles

---

## User Management

- Create User Account
- Username Validation
- BCrypt Password Encryption
- One User Per Employee
- Enable/Disable User

---

## Authentication & Authorization

- Spring Security
- JWT Authentication
- Stateless Authentication
- BCrypt Password Encoding
- Login API
- JWT Authentication Filter
- Custom UserDetailsService
- Custom UserPrincipal
- Role-Based Authorization
- ADMIN
- HR
- EMPLOYEE

---

## Validation

- Jakarta Bean Validation
- Custom Validation Messages
- Request DTO Validation

---

## Exception Handling

- Global Exception Handler
- Standard API Error Responses
- Validation Error Responses
- Custom Exceptions
- Authentication Error Handling
- Authorization Error Handling

---

## Architecture

- Layered Architecture
- DTO Pattern
- Repository Pattern
- Service Layer
- Controller Layer
- MapStruct Mapping
- Constructor Injection

---

# Tech Stack

| Technology | Version |
|------------|----------|
| Java | 25 |
| Spring Boot | 4.x |
| Spring Security | Latest |
| Spring Data JPA | Latest |
| PostgreSQL | 18 |
| Maven | Latest |
| JWT | JJWT |
| Lombok | ✓ |
| MapStruct | ✓ |
| Jakarta Validation | ✓ |

---

# Project Structure

```
src
└── main
    ├── java
    │
    └── com.virat.employeemanagementsystem
        ├── common
        ├── config
        ├── controller
        ├── data
        ├── dto
        │   ├── request
        │   └── response
        ├── entity
        ├── exception
        ├── mapper
        ├── repository
        ├── security
        │   ├── config
        │   ├── jwt
        │   ├── principal
        │   └── service
        ├── service
        │   └── impl
        └── EmployeeManagementSystemApplication.java
```

---

# Architecture

```
                Client

                   │

                   ▼

         Spring Security Filter

                   │

                   ▼

         JWT Authentication Filter

                   │

                   ▼

            REST Controller

                   │

                   ▼

           Request DTO (@Valid)

                   │

                   ▼

             Service Layer

                   │

                   ▼

              MapStruct

                   │

                   ▼

                Entity

                   │

                   ▼

             Repository

                   │

                   ▼

             PostgreSQL Database

                   │

                   ▼

                Entity

                   │

                   ▼

              MapStruct

                   │

                   ▼

            Response DTO

                   │

                   ▼

             ApiResponse<T>
```

---

# Security Flow

```
Client

   │

Login

   │

Username + Password

   │

AuthenticationManager

   │

CustomUserDetailsService

   │

JWT Generated

   │

Client Stores JWT

   │

Bearer Token

   │

JwtAuthenticationFilter

   │

SecurityContext

   │

Role-Based Authorization

   │

Controller
```

---

# API Modules

- Authentication APIs
- Department APIs
- Employee APIs
- Role APIs
- User APIs

---

# Database Tables

- departments
- employees
- roles
- users

---

# Current Progress

## Completed

- Project Setup
- PostgreSQL Integration
- Department Module
- Employee Module
- Role Module
- User Module
- DTO Pattern
- MapStruct
- Bean Validation
- Global Exception Handling
- Custom Exceptions
- API Response Wrapper
- JWT Authentication
- Spring Security
- Role-Based Authorization
- BCrypt Password Encryption
- Soft Delete
- Data Initializer

---

# Upcoming Features

- Swagger / OpenAPI
- Pagination
- Sorting
- Searching
- Logging
- Auditing
- Unit Testing
- Docker
- Deployment
- CI/CD

---

# Getting Started

## Clone Repository

```bash
git clone https://github.com/virat216/employee-management-system.git
```

## Navigate

```bash
cd employee-management-system
```

## Configure Database

Update:

```properties
application.properties
```

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/employee_management
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Run

```bash
./mvnw spring-boot:run
```

or run

```
EmployeeManagementSystemApplication
```

from IntelliJ IDEA.

---

# Author

**Virat Jaiswal**

GitHub:
https://github.com/virat216

LinkedIn:
https://www.linkedin.com/in/viratjaiswal216/

---

# License

This project is developed for learning purposes and portfolio demonstration.
