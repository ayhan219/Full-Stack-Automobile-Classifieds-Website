# Project Description
<br>
This project is a car listing and sales platform developed using React, Node.js, Express.js, and MySQL. It allows users to browse through car listings, sort them according to different criteria such as price, model, or year, and post their own cars for sale.

<br>

## How to use this project?

To use this project, you need to establish the MySQL connection in the db.js file. Connect it to your own MySQL database by providing your database credentials (host, user, password, and database name).

<br>

### MySQL Configuration:

In the db.js file, configure the connection details for your MySQL database.
Ensure that your database is created, and its credentials are correctly added to the file.
![image](https://github.com/user-attachments/assets/acec5bdf-7733-40af-bb52-401f197e1a1c)

<br>

### Create an Uploads Directory:

Inside the API folder, create a new directory named uploads.
This folder will be used to store images uploaded by users when they create car listings.


<br>

## Highlights

#### Car Listings:
Users can view a wide variety of car listings and sort them based on their preferences.

#### User Authentication:
The platform includes a secure user authentication system implemented using JWT (JSON Web Token), allowing users to register, log in, and manage their listings, with tokens stored in cookies for enhanced security, ensuring user data remains secure even during page refreshes or across multiple sessions.

#### Car Posting and Management: 
After logging in, users can post new car listings, manage their existing listings, and remove them when sold. Each listing includes comprehensive details about the car, such as make, model, year, mileage, and price.
#### Database Management: 
The application uses MySQL as the database, where all user data, car listings, and transactions are stored. Express.js handles API requests between the frontend and backend, ensuring seamless communication between the client and the server.
#### Security and Sessions: 
To protect user data, JWT is securely stored in cookies with HTTP-only and Secure flags, preventing unauthorized access to tokens. This setup ensures that users remain logged in across sessions, even after refreshing the page.
#### Responsive Design: 
Built with React, the platform offers a responsive and modern user interface, making it easy for users to navigate on both desktop and mobile devices.




