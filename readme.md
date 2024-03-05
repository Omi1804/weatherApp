# Weather Application

Welcome to the Weather Application! This application allows users to fetch the weather forecast for any location they choose. The project is split into two main parts: the backend, which handles API requests to fetch weather data, and the frontend, which provides a user-friendly interface for interacting with the weather data.

## Getting Started

To get the application running on your local machine, follow the steps below to set up both the backend and frontend.

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project was built using Node.js, and you will need it to install dependencies and run the servers for the backend and frontend.

### Setting Up the Backend

The backend server handles requests to the weather API and serves the fetched data to the frontend. Follow these steps to get the backend up and running:

1. **Navigate to the Backend Directory**

   Open a terminal and change into the backend directory of the project:

   ```sh
   cd Backend
   ```

2. **Install Dependencies**

   Install the necessary Node.js dependencies defined in `package.json`:

   ```sh
   npm install
   ```

3. **Start the Backend Server**

   Once the dependencies are installed, start the backend server with the following command:

   ```sh
   npm start
   ```

   The backend server will start, and you should see a message indicating it is running and listening for requests on a specific port (e.g., `Server listening on port 3000`).

### Setting Up the Frontend

The frontend provides the interface for users to interact with the application. After setting up the backend, follow these steps to get the frontend running:

1. **Navigate to the Frontend Directory**

   Open a new terminal window or tab and navigate to the frontend directory of the project:

   ```sh
   cd Frontend
   ```

2. **Install Dependencies**

   Like with the backend, you need to install the necessary dependencies:

   ```sh
   npm install
   ```

3. **Start the Frontend Development Server**

   With the dependencies installed, start the frontend development server:

   ```sh
   npm run dev
   ```

   This command will compile the frontend and serve it, usually on `http://localhost:3000`. Open your web browser to this address to interact with the application.

## Usage

With both the backend and frontend running, you can now use the application to fetch and display weather information. Simply enter a location in the provided search field on the frontend, and the weather data for that location will be displayed.

## Contributing

If you're interested in contributing to the Weather Application, please read through our contributing guidelines. We welcome contributions from the community!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
