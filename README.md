# Inspection Management System

## Overview

The **Inspection Management System** is a web application designed to manage inspections, inspection types, and statuses efficiently. It consists of a **backend** developed using **.NET Core Web API** and a **frontend** built with **Angular**.

---
## Screenshots
### Frontend

| ![Screenshot 2025-01-30 171347](https://github.com/user-attachments/assets/6237c617-e737-4367-94ca-7db9048fcb3f) | ![Screenshot 2025-01-30 180808](https://github.com/user-attachments/assets/f7dff66d-c528-4b7e-863f-661ee4638bc2) | ![Screenshot 2025-01-30 180912](https://github.com/user-attachments/assets/6c34112c-f9d0-495d-8a44-9d51d0251b03) |
|:------------------------------------------:|:--------------------------------------------:|:--------------------------------------:|
|         **Home Screen**                    |         **Inspection Types**                   |        **Add Inspection**            |

| ![Screenshot 2025-01-30 180958](https://github.com/user-attachments/assets/10245fe6-632d-4bc6-ac4b-c8a1b53bc56a) | ![Screenshot 2025-01-30 181110](https://github.com/user-attachments/assets/1a05b48d-bb4b-4702-ba5c-208f34ba1414) |
|:--------------------------------------------:|:--------------------------------------------:|
| **Edit**                          | **Delete**                           |

### Backend
| ![Screenshot 2025-01-30 181311](https://github.com/user-attachments/assets/b9e55a47-f4c3-4d9e-baaa-40be4827029d) | ![Screenshot 2025-01-30 181335](https://github.com/user-attachments/assets/ed2fe72f-bc64-40fd-a91f-44029ebb1919) | ![Screenshot 2025-01-30 181418](https://github.com/user-attachments/assets/c50b176f-e5a8-413c-b58e-45dfa056d91c) |
|:------------------------------------------:|:--------------------------------------------:|:--------------------------------------:|
|         **Inspection**                    |         **Inspection Types**                   |        **Status**            |

---

## Backend (ASP.NET Core Web API)

### Technologies Used

- ASP.NET Core
- Entity Framework Core (EF Core)
- SQL Server
- C#

### API Endpoints

#### **Inspections API** (`api/Inspections`)

- **GET** `/api/Inspections` - Retrieves all inspections.
- **GET** `/api/Inspections/{id}` - Retrieves an inspection by ID.
- **POST** `/api/Inspections` - Creates a new inspection.
- **PUT** `/api/Inspections/{id}` - Updates an existing inspection.
- **DELETE** `/api/Inspections/{id}` - Deletes an inspection.

#### **Inspection Types API** (`api/InspectionTypes`)

- **GET** `/api/InspectionTypes` - Retrieves all inspection types.
- **GET** `/api/InspectionTypes/{id}` - Retrieves an inspection type by ID.
- **POST** `/api/InspectionTypes` - Creates a new inspection type.
- **PUT** `/api/InspectionTypes/{id}` - Updates an existing inspection type.
- **DELETE** `/api/InspectionTypes/{id}` - Deletes an inspection type.

#### **Status API** (`api/Status`)

- **GET** `/api/Status` - Retrieves all statuses.
- **GET** `/api/Status/{id}` - Retrieves a status by ID.
- **POST** `/api/Status` - Creates a new status.
- **PUT** `/api/Status/{id}` - Updates an existing status.
- **DELETE** `/api/Status/{id}` - Deletes a status.

### Running the Backend

1. Clone the repository.
2. Navigate to the backend directory.
3. Run `dotnet restore` to restore dependencies.
4. Run `dotnet ef database update` to apply migrations.
5. Start the API with `dotnet run`.

---

## Frontend (Angular)

### Technologies Used

- Angular CLI 13.0.2
- TypeScript
- Bootstrap (or any UI framework used)

### Development Server

Run the following command to start the development server:

```sh
ng serve
```

Navigate to [http://localhost:4200](http://localhost:4200). The app will automatically reload on changes.

### Code Scaffolding

To generate a new component, use:

```sh
ng generate component component-name
```

Other available commands:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build

To build the project, run:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run unit tests with:

```sh
ng test
```

### Running End-to-End Tests

To run end-to-end tests, first install a testing package, then run:

```sh
ng e2e
```

---

## Deployment

- Backend: Deploy using **IIS, Azure, or Docker**.
- Frontend: Deploy using **Firebase Hosting, Vercel, Netlify, or an Nginx server**.

## Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Added a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the **MIT License**.

---

## Contact

For any inquiries or contributions, contact:

- **Developer:** Omar Waleed
- **Email:** [[omarwaleedzenhom2002@gmail.com](mailto\:omarwaleedzenhom2002@gmail.com)]

