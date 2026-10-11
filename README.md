# 🔐 JWT Authentication

A secure authentication system built with **Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT)**. This project demonstrates how users can authenticate themselves and access protected routes using token-based authentication.

## ✨ Features

- 🔑 **User Authentication** — Register and log in securely.
- 🔒 **JWT Token Authentication** — Generate and verify JSON Web Tokens.
- 🛡️ **Protected Routes** — Restrict access to authenticated users.
- 🔐 **Password Security** — Secure password handling using appropriate hashing techniques.
- ⚙️ **Environment Configuration** — Manage sensitive settings through environment variables.
- 🚀 **REST API** — Build authentication functionality using Express.js routes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JSON Web Token (JWT) | Token-based authentication |
| bcrypt / bcryptjs | Password hashing, if configured |
| dotenv | Environment variable management |

## 📂 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mohinkhan16/JWT_Authentication.git
```

### 2. Navigate to the Project

```bash
cd JWT_Authentication
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
```

Replace the placeholder values with your own configuration. Use a strong JWT secret and never commit your `.env` file to GitHub.

### 5. Run the Application

Use the command configured in your `package.json`.

For a project configured with Nodemon:

```bash
npm run dev
```

For a project configured with a start script:

```bash
npm start
```

The server will run on the configured port, for example:

`http://localhost:5000`

## 🔑 How JWT Authentication Works

1. **User Registration:** A user submits their registration details.
2. **Password Security:** The password is hashed before being stored, if password hashing is implemented.
3. **User Login:** The server verifies the submitted credentials.
4. **Token Generation:** The server generates a JWT after successful authentication.
5. **Protected Routes:** The client sends the token with subsequent requests.
6. **Token Verification:** Authentication middleware validates the token before allowing access to protected resources.

### Example Authorization Header

```http
Authorization: Bearer <your_jwt_token>
```

## 🧪 API Testing

You can test the authentication endpoints using Postman or another API testing tool.

Depending on your implementation, test the following operations:

- Register a new user.
- Log in with valid credentials.
- Verify that invalid credentials are rejected.
- Access a protected route with a valid JWT.
- Confirm that requests without a valid token are rejected.

Refer to the routes defined in your source code for the exact endpoint URLs and request formats.

## 🔐 Security Best Practices

- Never store passwords as plain text.
- Keep JWT secrets and database credentials in environment variables.
- Validate user input on the server.
- Set appropriate token expiration times.
- Protect sensitive routes with authentication middleware.
- Never commit credentials or secret keys to version control.

## 📚 Learning Outcomes

Through this project, I explored:

- Authentication and authorization concepts.
- JWT generation and verification.
- Express.js middleware.
- REST API development.
- MongoDB database integration.
- Secure handling of user credentials.

## 👨‍💻 Author

**Mohin Pathan**

- GitHub: [@mohinkhan16](https://github.com/mohinkhan16)
- Project Repository: [JWT_Authentication](https://github.com/mohinkhan16/JWT_Authentication)

---

⭐ If you find this project useful, consider giving the repository a star!
