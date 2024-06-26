# Quest-Engineer-1-Assignment
# React Auto Login Application

## Overview

This project is a React application designed to automatically log in a user using a predefined email address and present a marketing website. The application includes an auto-login feature using a specified Gmail address, a form for capturing user details, and a footer with a carousel of client logos.

## Features

- **Auto Login**: Automatically logs in the user using a predefined Gmail address when the website loads.
- **User Input Form**: Captures user details across multiple steps.
- **Client Carousel**: Displays client logos in a carousel format.
- **Responsive Design**: Adapts to various screen sizes for better user experience.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/react-auto-login-app.git
    cd react-auto-login-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory and add the following configurations:
    ```env
    REACT_APP_BASE_URL=https://staging.questprotocol.xyz/api
    REACT_APP_API_KEY=your-api-key
    REACT_APP_API_SECRET=your-api-secret
    REACT_APP_ENTITY_AUTHENTICATION_TOKEN=your-entity-authentication-token
    REACT_APP_ENTITY_ID=your-entity-id
    REACT_APP_CAMPAIGN_ID=your-campaign-id
    ```

## Usage

### Starting the Application

1. Run the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### API Endpoints and Configurations

#### Auto Login

- **URL**: `https://staging.questprotocol.xyz/api/users/external/login`
- **Method**: POST
- **Headers**:
  ```json
  {
    "apikey": "your-api-key",
    "apisecret": "your-api-secret",
    "entity-authentication-token": "your-entity-authentication-token"
  }
