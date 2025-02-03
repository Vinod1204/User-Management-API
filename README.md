# Simple User Management API
## Introduction
Welcome to the README for the Simple User Management API project. This project demonstrates how to build a REST API using Express, TypeScript, and Supabase for managing users (CRUD operations). Additionally, it includes a Next.jsapplication with multi-user role authentication and integrates the users API on the dashboard page.

## Goal
Create a REST API using Express, TypeScript, and Supabase to manage users with CRUD operations. Utilize Axios for API calls and create a Next.jsapplication with multi-user role authentication.



## Submission
Provide a GitHub repository containing your project. Include a README file with instructions on how to run the application, any specific setup requirements, and details about the technologies used.

## Requirements
**Backend (Express + TypeScript + Supabase)**
Setup an Express server with TypeScript

Use Supabase as the database (PostgreSQL)

## Database Setup
Create a users table in Supabase with the following columns:

id (UUID, primary key)

name (string)

email (string, unique)

created_at (timestamp)

## REST API Endpoints
GET /users - Fetch all users

GET /users/:id - Fetch a user by ID

POST /users - Create a new user

PUT /users/:id - Update user details

DELETE /users/:id - Delete a user

## Use Axios
Use Axios inside your Express routes to make a request to an external API (e.g., fetch a random profile picture from an API when creating a user).

**Frontend (Next.js + Multi-User Role Authentication + Dashboard Integration)**
Create a Next.jsapplication with TypeScript.

Implement multi-user role authentication using NextAuth.jsor Supabase Auth.

Roles: admin, user

admin: Full access to all API operations.

user: Can only view their profile and update details.

Integrate the Users API on the dashboard page:

Fetch users list and display it in a table.

Allow admin to create, update, and delete users.

Allow user to update their own profile.

Protect dashboard routes based on authentication and role permissions.

Use Axios to call the Express API from the Next.jsapplication.

Design a clean UI for managing users using Tailwind CSS or another UI library.

## How to Run the Application
Backend
Clone the repository: git clone https://github.com/Vinod1204/User-Management-API.git

Navigate to the backend directory: cd user-management-api

Install dependencies: npm install

Create a .env file in the root directory with your Supabase credentials:

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

*Start the server*: npm run dev

Frontend
Navigate to the frontend directory: cd user-management-dashboard

Install dependencies: npm install

Create a .env file in the root directory with your NextAuth or Supabase Auth credentials.

Start the Next.jsapplication: npm run dev

Principal Technologies
Backend: Node.js, Express.js, TypeScript, Supabase, Axios

Frontend: Next.js, TypeScript, NextAuth.js/SupabaseAuth, Tailwind CSS, Axios


## Author
- **Name**: Vinod M
- **Contact**: vinodmurugan12@gmail.com
