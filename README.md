# 🚀 Simple Personel Blog

This project is a fast and secure RESTful API built with Node.js, Express.js, and MongoDB. It provides authentication, user management, and CRUD operations via REST endpoints.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-Backend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## ✨ Features

This personal blog backend project includes the following features:

- 🧑‍💻 **User Registration & Login** – Secure authentication using JWT tokens.
- 🛡️ **Authorization Middleware** – Route protection to restrict access for unauthorized users.
- ✅ **Input Validation** – Robust request validation using `express-validator`.
- 🔁 **RESTful API** – Clean and consistent CRUD endpoints following REST conventions.
- 🔐 **Password Hashing** – User passwords are securely hashed using bcrypt.
- 🌿 **MongoDB Integration** – Built on MongoDB with native driver for high performance.
- 🧱 **Modular Architecture** – Clean controller-service-folder structure for scalability and maintainability.
- 📝 **Blog Management**
  - ✍️ Publish blog posts
  - ✏️ Edit/update blog posts
  - 🗑️ Delete blog posts
  - 📖 Fetch single blog posts
- 🧍‍♂️ **User Profiles** – Public profile pages showing posts and likes.
- 👥 **Follow System** – Users can follow or unfollow other users.
- ❤️ **Post Likes**
  - Like and unlike blog posts

## 🛠️ Installation

```bash
git clone https://github.com/MehmetGktrk/simple-personel-blog.git
cd simple-personel-blog
npm install
```

## 🔐 Environment Configuration

Before running the project, create a `.env` file in the root directory based on the provided `.env.example` file:

```bash
cp .env.example .env
```

## ▶️ Getting Started

After installing dependencies and setting up your `.env` file, you can start the server with the following command:

### Start the development server:

```bash
npm run dev
```

### Start the production server:

```bash
npm start
```

## 📦 Postman Collection

You can test all API endpoints using the Postman collection below:

[🔗 Download Blog API Collection](./docs/blog-api.postman_collection.json)

## 📁 Project Structure

```
├── simple-personel-blog-main/
│   ├── simple-personel-blog-main/
│   │   └── .env.example
│   │   └── .gitignore
│   │   └── README.md
│   │   └── package-lock.json
│   │   └── package.json
│   │   ├── src/
│   │   │   └── app.js
│   │   │   └── server.js
│   │   │   ├── config/
│   │   │   │   └── config.js
│   │   │   ├── controllers/
│   │   │   │   └── authController.js
│   │   │   │   └── followController.js
│   │   │   │   └── likeController.js
│   │   │   │   └── postController.js
│   │   │   │   └── profileController.js
│   │   │   ├── database/
│   │   │   │   └── connection.js
│   │   │   ├── middlewares/
│   │   │   │   └── authMiddleware.js
│   │   │   │   └── databaseMiddleware.js
│   │   │   │   └── timeMiddleware.js
│   │   │   │   └── validationMiddleware.js
│   │   │   ├── routes/
│   │   │   │   └── authRoutes.js
│   │   │   │   └── followRoutes.js
│   │   │   │   └── likeRoutes.js
│   │   │   │   └── postRoutes.js
│   │   │   │   └── profileRoutes.js
│   │   │   ├── services/
│   │   │   │   └── authService.js
│   │   │   │   └── followService.js
│   │   │   │   └── likeService.js
│   │   │   │   └── postService.js
│   │   │   │   └── profileService.js
│   │   │   ├── settings/
│   │   │   │   └── settings.js
```

## 🤝 Contributing

Contributions are welcome and appreciated!

If you have suggestions for improvements, feel free to open an issue or submit a pull request.  
For major changes, please open an issue first to discuss what you would like to change.

Please make sure your contributions follow the existing code style and structure.

## 📄 License

This project is licensed under the MIT License.

## 📬 Contact

Mehmet Gokturk – mehmetgokturk1901@gmail.com

GitHub: [@MehmetGktrk](https://github.com/MehmetGktrk)
