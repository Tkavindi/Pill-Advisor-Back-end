# Pill-Advisor Back-end

## Overview
Pill-Advisor is a medication information platform that provides detailed insights into drug usage, side effects, and interactions. This back-end API powers the Pill-Advisor application, enabling users to search for medications and retrieve essential health information.

## Features
- Search for medications by name
- Retrieve details on medication uses, precautions, dosage, and side effects
- Track the number of searches performed
- API endpoints for managing medicine data
- Logging and error handling for reliable operation

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building APIs
- **Google Generative AI** - AI-based medicine information retrieval
- **dotenv** - Manage environment variables
- **CORS** - Enable cross-origin requests

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Tkavindi/Pill-Advisor-Back-end.git
   cd Pill-Advisor-Back-end
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the necessary configurations:
   ```env
   PORT=3000
   GOOGLE_API_KEY=your_google_generative_ai_api_key
   ```

4. **Run the Server**
   ```sh
   npm start
   ```
   The server should now be running on `http://localhost:3000`.

## API Endpoints
| Method | Endpoint               | Description                         |
|--------|-----------------------|-------------------------------------|
| POST   | `/api/medicine-info`   | Retrieve information about a medicine |
| GET    | `/api/search-count`    | Get the total search count         |
| POST   | `/api/search`          | Perform a search and increment count |

## Deployment
To deploy the back-end using **Fly.io**, follow these steps:
1. Install Fly.io CLI:
   ```sh
   iwr https://fly.io/install.ps1 -useb | iex
   ```
   or manually download it from [Fly.io](https://fly.io/docs/hands-on/install-flyctl/)

2. Authenticate:
   ```sh
   flyctl auth login
   ```

3. Launch your app:
   ```sh
   flyctl launch
   ```

4. Deploy the app:
   ```sh
   flyctl deploy
   ```

## Contributing
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push the branch and create a pull request

## License
This project is licensed under the **MIT License**.


