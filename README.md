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

<br>

![image](https://github.com/user-attachments/assets/9b262715-4a21-4c73-a893-2810e1e1d96d)

In the top left corner, you can filter listings based on your preferred criteria. For example, if you are looking for red cars, you can select that option. Additionally, if you have a specific budget in mind, you can enter your desired price range to view listings that fit within that price bracket.


<br>
<br>


![image](https://github.com/user-attachments/assets/7f3709e3-42b5-4787-94ef-7591d421bc64)
To post a car listing, you need to log in first. After logging in, you can enter the relevant information about the vehicle and add it to the platform.

<br>
<br>




<br>
<br>

## Future Enhancements

I aspire to further enhance and develop this project in the future, incorporating additional features and improvements to provide users with an even better experience.





