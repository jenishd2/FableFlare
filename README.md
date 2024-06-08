# Blog Website

## Description
This project serves as a comprehensive guide and record of the steps and challenges faced while creating a blog website. It details the installation of necessary packages, setting up environment variables, and configuring Appwrite for database operations. The project also involves frontend development with a component-based UI and state management using Redux-Toolkit. Below is a detailed walkthrough to help you set up and understand the project.

## You can check preview here - 

## Prerequisites
To get started, ensure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- Appwrite

## Setup Guide

### 1. Install Required Packages
Begin by installing all the necessary packages. This includes dependencies for both frontend and backend operations.

```bash
npm install
```

### 2. Setup Environment Variables
- Create a `.env` file in the root of your project. 
- Add the environment variables to the .env file in Root of project from the .env.sample replacing the placeholders with your actual Appwrite project details:

### 3. Configure Appwrite
To get Appwrite up and running, follow these steps:

1. **Appwrite URL**: Locate and set the `appwriteUrl` environment variable.
2. **Database ID**: Create a database ID in Appwrite.
3. **Collection ID**: Create a collection ID within the database. Configure the collection to specify who can perform CRUD operations.
4. **Bucket ID**: Create a bucket ID for storage needs.

### 4. Authentication Settings
Set up authentication services on Appwrite to manage user logins, signups, and other related operations. This can also be adapted for other databases like Firebase or MongoDB.

### 5. Frontend Structure
The frontend is structured using separate components for each UI element, ensuring a modular and maintainable codebase.

## Problems Faced
Throughout the project, several challenges were encountered:

- **Redux Toolkit and React Component-Based UI**: Learning Redux Toolkit for state management and creating a component-based UI in React were challenging but essential parts of the frontend development process.
- **Learning Appwrite**: Initially, understanding the Appwrite database was difficult due to unfamiliarity with the service.
- **User Authentication and CRUD Operations**: Implementing user login, signup, and CRUD operations for blogs was a new and educational experience.
- **Backend Development**: Developing the backend services provided valuable insights and learning opportunities.


## Learnings
This project was a significant learning experience, offering practical knowledge applicable to real-world projects. Key takeaways include:

- **Production-Level Code**: Writing and maintaining production-level code.
- **State Management**: Implementing state management using Redux-Toolkit, as taught by Hitesh Choudhary in his "Chai Aur React" series.

## Conclusion
Working on this project has been highly rewarding, providing hands-on experience with both frontend and backend development, and enhancing overall understanding of full-stack development.

Feel free to clone the repository and explore the code. Contributions and feedback are welcome!



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
