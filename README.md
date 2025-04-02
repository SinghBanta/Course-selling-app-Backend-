# Course Selling App Backend

This repository contains the backend code for the Course Selling App. The backend is built using NodeJs, Express, MongoDB and provides APIs to manage courses, users, and admin functionality.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SinghBanta/Course-selling-app-Backend-.git
    cd Course-selling-app-Backend-
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the required environment variables (e.g., database connection string, JWT secret keys).

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. The server will start on `http://localhost:3000`.

## API Documentation

### User Endpoints

- **Register a new user**
    ```http
    POST /api/v1/user/signup
    ```

- **Login a user**
    ```http
    POST /api/v1/user/signin
    ```

### Course Endpoints

- **Get all courses**
    ```http
    GET /api/v1/course/preview
    ```

- **Add a new course**
    ```http
    POST /api/v1/course/purchases
    ```

### Admin Endpoints

- **Admin will signup**
    ```http
    POST /api/v1/admin/signup
    ```

- **Admin will signin**
    ```http
    POST /api/v1/admin/signin
    ```


- **Admin will create a course**
    ```http
    POST /api/v1/admin/course
    ```

- **Admin can update the course which he create**
    ```http
    PUT /api/v1/admin/course
    ```

- **Admin can see his created courses**
    ```http
    GET /api/v1/admin/course/bulk
    ```
