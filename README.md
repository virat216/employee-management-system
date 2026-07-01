# Employee Management System

A production-ready Employee Management System backend built using **Java**, **Spring Boot**, **Spring Data JPA**, and **PostgreSQL** following enterprise-level architecture and best practices.

---

## Project Overview

This project is being developed to simulate a real-world Employee Management System used in organizations. It follows a layered architecture with DTOs, MapStruct, Lombok, validation, global exception handling, and RESTful APIs.

The project is being built module by module while following software engineering best practices instead of simple CRUD implementations.

---

## Features

### Department Module
- Create Department
- Get All Departments
- Get Department by ID
- Update Department
- Delete Department

### Architecture
- Layered Architecture
- DTO Pattern
- Service Layer
- Repository Layer
- Entity Layer
- Controller Layer

### Validation
- Bean Validation
- Custom Validation Messages

### Exception Handling
- Custom Exceptions
- Global Exception Handler
- Standard Error Responses

### Other Features
- Lombok
- MapStruct
- RESTful APIs
- PostgreSQL Integration
- ResponseEntity
- Constructor Injection

---

## Tech Stack

| Technology | Version |
|------------|----------|
| Java | 25 |
| Spring Boot | 4.1.x |
| Spring Data JPA | Latest |
| PostgreSQL | 18 |
| Maven | Latest |
| Lombok | ✓ |
| MapStruct | ✓ |
| Jakarta Validation | ✓ |

---

## Project Structure

```
src
└── main
    ├── java
    │   └── com.virat.employeemanagementsystem
    │       ├── config
    │       ├── controller
    │       ├── dto
    │       │   ├── request
    │       │   └── response
    │       ├── entity
    │       ├── exception
    │       ├── mapper
    │       ├── repository
    │       ├── service
    │       │   └── impl
    │       └── EmployeeManagementSystemApplication.java
    │
    └── resources
        └── application.properties
```

---

## Architecture

```
                Client

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

             PostgreSQL DB

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

          ResponseEntity
```

---

## API Endpoints

| Method | Endpoint | Description |
|----------|--------------------------|--------------------------|
| POST | /api/departments | Create Department |
| GET | /api/departments | Get All Departments |
| GET | /api/departments/{id} | Get Department By ID |
| PUT | /api/departments/{id} | Update Department |
| DELETE | /api/departments/{id} | Delete Department |

---

## Database

Current Tables

- departments

Future Tables

- employees
- roles
- users

---

## Current Progress

- Project Setup
- PostgreSQL Integration
- Department Module
- CRUD Operations
- DTO Pattern
- MapStruct
- Bean Validation
- Custom Exceptions
- Global Exception Handling
- ResponseEntity

---

## Roadmap

### Phase 1
- Department Module

### Phase 2
- Common Infrastructure

### Phase 3
- Employee Module
- Entity Relationships
- Email Validation
- Salary Validation

### Phase 4
- Role Module

### Phase 5
- User Module

### Phase 6
- Authentication & Authorization
- Spring Security
- JWT Authentication
- Role-Based Access Control

### Phase 7
- Swagger/OpenAPI
- Pagination
- Sorting
- Searching
- Logging
- Auditing
- Unit Testing
- Docker
- Deployment

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/virat216/employee-management-system.git
```

### Navigate

```bash
cd employee-management-system
```

### Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:postgresql://localhost:6388/employee_management
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Run

```bash
./mvnw spring-boot:run
```

or run `EmployeeManagementSystemApplication` from IntelliJ IDEA.

---

## Author

**Virat Jaiswal**

- GitHub: https://github.com/virat216
- LinkedIn: https://www.linkedin.com/in/viratjaiswal216/

---

## License

This project is developed for learning purposes and portfolio demonstration.
