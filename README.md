# 🏥 PillAdvisor Backend

PillAdvisor is a backend system that provides medication-related data, including information on drug usage, dosage, side effects, and interactions. This backend supports the **PillAdvisor Frontend** and handles API requests for medication searches, user interactions, and service management.

## 🚀 Features

- API endpoints for searching medications and retrieving details.
- Tracks search count and logs queries.
- Provides structured medication information.
- Built using **Node.js** and **Express.js**.
  
## 🛠 Tech Stack

- **Node.js** (Runtime)
- **Express.js** (Web Framework)
- **Axios** (For API requests)

## 💂️ Project Structure

```
├── Controllers
│   ├── medicineController.js
│   ├── searchController.js
├── Routes
│   ├── medicineRoutes.js
│   ├── searchRoutes.js
├── index.js (Main server file)
├── package.json (Dependencies)
├── README.md (This file)
```

## 🔧 Installation & Setup

### 1️⃣ Prerequisites

- Install **Node.js** (>=16)
- Clone the repository:
  ```sh
  git clone https://github.com/Tkavindi/Pill-Advisor-Back-end.git
  ```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Server Locally

```sh
npm start
```

The backend server will start on **[http://localhost:3000](http://localhost:3000)**.

## 📁 API Endpoints

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| POST   | `/api/medicine-info` | Get all medicines                 |
| POST   | `/api/search`        | Handle medicine search queries    |
| GET    | `/api/search-count`  | Get total search count            |

## 🚀 Deployment

The backend is deployed on **Fly.io**.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or report issues.

## 📝 License

This project is licensed under the **MIT License**.

