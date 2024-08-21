<h1 align="center">E-Shop Backend Server</h1>
<p align="center">
  <img src="https://img.shields.io/badge/npm-v7.0.0-blue" alt="npm version"/>
  <img src="https://img.shields.io/badge/node-v14.17.0-green" alt="node version"/>
  <img src="https://img.shields.io/badge/express-v4.17.1-yellow" alt="express version"/>
</p>

<p align="center">
  This is the backend server for the e-shop web application. It manages the API for product management, including pagination, searching, sorting, and filtering.
</p>

---

## 🚀 Features

- Fetch products with pagination, search, sort, and filter functionalities.
- Secure sensitive information using `.env` files.

---

## 🛠️ How to Clone and Run the Project Locally

1. **Clone the repository:**
   - Clone both the **client** and **server** sides. Open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```

2. **Open files in VS Code:**
   - After opening the **server-side** files in VS Code, install the npm dependencies:
     ```bash
     npm install
     ```

3. **Environment setup:**
   - Configure environment variables by creating a `.env` file in the root directory. Add the following variables:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb://localhost:3000/products
4. **Access the server:**
   - Run the server using:
     ```bash
     nodemon index.js
     ```
   - Alternatively, use:
     ```bash
     npm run dev
     ```
   - Open your web browser and navigate to `http://localhost:3000` to view the application locally.

---

