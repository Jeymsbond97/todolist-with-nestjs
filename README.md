# Todo List Application

This is a Todo List application built with a React frontend, a NestJS backend, and a MySQL database. The application allows users to create, read, update, and delete todo items.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built using React and TypeScript. It consists of the following key files:

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **public/index.html**: Main HTML file serving as the entry point for the React application.
- **src/index.tsx**: Entry point of the React application, rendering the App component.
- **src/App.tsx**: Main App component serving as the root of the application.
- **src/components**: Contains components for displaying todos.
  - **TodoList.tsx**: Displays a list of todos.
  - **TodoItem.tsx**: Represents a single todo item.
- **src/hooks/useTodos.ts**: Custom hook for managing todos state and logic.
- **src/services/api.ts**: Functions for making API calls to the backend.
- **src/styles/index.css**: CSS styles for the application.

### Backend

The backend is built using NestJS and TypeScript. It consists of the following key files:

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **src/main.ts**: Entry point of the NestJS application, starting the server.
- **src/app.module.ts**: Root module importing the TodosModule and other necessary modules.
- **src/config/database.config.ts**: Database configuration settings for MySQL.
- **src/todos**: Contains todos-related components.
  - **todos.module.ts**: Defines the TodosModule.
  - **todos.controller.ts**: Handles incoming requests related to todos.
  - **todos.service.ts**: Contains business logic for managing todos.
  - **dto**: Contains Data Transfer Objects for creating and updating todos.
    - **create-todo.dto.ts**: DTO for creating a new todo.
    - **update-todo.dto.ts**: DTO for updating an existing todo.
  - **entities**: Contains the Todo entity class.
    - **todo.entity.ts**: Defines the structure of the todo data in the database.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd todo-list-app
   ```

2. Set up the backend:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Configure the database connection in `src/config/database.config.ts`.
   - Start the backend server:
     ```
     npm run start
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

## Usage

Once both the frontend and backend are running, you can access the application in your web browser at `http://localhost:3000`. You can create, view, update, and delete todo items through the user interface.

## License

This project is licensed under the MIT License.