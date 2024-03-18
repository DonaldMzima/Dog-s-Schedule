# Dog Schedule Project Readme

Dog Walk Schedule is a web application built using Next.js, TypeScript, and Chakra UI that helps you manage and schedule dog walks. It utilizes GraphQL to store data in a database and provides a user-friendly interface to create and manage dog walk tasks. Each task includes information about the person responsible, the dog's name, and the scheduled date.

# UI

![dogschedule](https://github.com/DonaldMzima/Dog-s-Schedule/assets/90970069/1d75b80a-d3ce-4fdf-97ac-75d2f07dfc37)


Table of Contents
Installation
Usage
Technologies
Features
Contributing
License
Installation
To get started with DogWalkSchedule on your local machine, follow these steps:

# Clone the repository:

Copy code
git clone(https://github.com/DonaldMzima/Dog-s-Schedule.git)
Change into the project directory:

Copy code
cd dog-walk-schedule
Install the project dependencies:

Copy code
npm install

# or

yarn install
Set up the database:

Configure your database connection in a .env file following the example in .env.example.
Run the development server:

Copy code
npm run dev

# or

yarn dev
Open your browser and access the application at http://localhost:3000.

Usage
DogWalkSchedule provides a simple and intuitive interface for managing dog walk tasks. Here are the basic usage instructions:

# Create a Task:

Click on the "Add Task" button.
Fill in the required information: Person responsible, Dog's name, and Date.
Click the "Create Task" button.
View Tasks:

You can view all your scheduled dog walk tasks on the main dashboard.
Edit or Delete Tasks:

To edit a task, click on the edit icon (pencil) next to the task.
To delete a task, click on the delete icon (trash can) next to the task.
Filter Tasks:

Use the filter options to narrow down tasks based on criteria such as person responsible or dog's name.
GraphQL Backend:

The application uses GraphQL to store and retrieve data. Ensure your GraphQL server is set up and configured correctly in the project.
Technologies
DogWalkSchedule is built using the following technologies:

Next.js: A React framework for building server-rendered applications.
TypeScript: A statically typed superset of JavaScript.
Chakra UI: A component library for building user interfaces.
GraphQL: A query language for APIs.
Database: Use your preferred database system (e.g., PostgreSQL) and configure it in the project.
Features
Create, edit, and delete dog walk tasks.
Filter tasks by person responsible or dog's name.
User-friendly and responsive design.
Integration with GraphQL for data storage and retrieval.
Contributing
If you'd like to contribute to DogWalkSchedule, please follow these guidelines:

Fork the repository on GitHub.
Clone your forked repository to your local machine.
Create a new branch for your feature or bug fix: git checkout -b feature/my-feature.
Make your changes, and test thoroughly.
Commit your changes: git commit -m "Add my feature".
Push your branch to your forked repository: git push origin feature/my-feature.
Open a pull request on the original repository, describing your changes in detail.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to customize this readme template to fit your project's specific needs. Make sure to replace placeholder URLs, project names, and descriptions with actual information about your DogWalkSchedule project.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed site
[(https://dog-s-schedule.vercel.app)](https://dog-s-schedule.vercel.app/) .




