# atdrive assignment Submission 

 ## Video Link of working of Application :- 
 https://drive.google.com/file/d/15IDBNYmYdrMmD67fb5Jcfki5RzsZXc2i/view?usp=sharing

# Run the Project In Local Environment 
# atdriveApp - Full Stack CRUD App

This is a simple full-stack CRUD (Create, Read, Update, Delete) application using:

- Frontend: React
- Backend: Node.js + Express
- Database: MySQL


---

##  Features

- User registration & login (with authentication)
- Add, update, delete products
- MySQL database integration
- RESTful API with Express

---

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ranjeetV8/atdriveApp.git
cd atdriveApp

```

### 2. Setup the Backend

```
cd server
npm install

```
### Configure the Database

```
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'atdriveDB',
});
```

## Start the Backend Server

```
node server.js

```

### Setup the Frontend

```
 cd ../client
npm install
npm start
```

# Usage 

1. Register or login to your account.

2 .Perform CRUD operations on products.

3 .Data is stored in MySQL and fetched using REST API.

## Dependencies

Backend:
- express

- mysql

- cors

- body-parser

Frontend:
- react

- axios

- react-router-dom


