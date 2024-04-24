# Text Summarization React App

  [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/MIT)


## Table Of Content

- [Description](#description)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)


## Description

This project is a simple web application built with React for text summarization using the OpenAI API. It allows users to input a piece of text and receive a summarized version of it.



## Features

- Input text into a text area.
- Click a button to summarize the text.
- View the summarized text in another text area.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blockchaincyberpunk1/text-summarization-react-app.git
   ```
2. **Navigate to the project directory**:
    ```
    cd text-summarization-react-app
    ```
3. **Install dependencies for both the client and server**:
    ```
    cd src
    npm install
    cd ../server
    npm install
    ```
4. **Set up environment variables**:
    ```
    - Create a `.env` file in the `server` directory.
    - Add your OpenAI API key to the `.env` file:
    OPENAI_API_KEY=your-api-key-here
    ```
5. **Run the server**:
    ```
    npm start
    ```
6. **Run the client**:
    ```
    cd ../src
    npm start
    ```
7. Access the application in your web browser at `http://localhost:3000`.

## Dependencies

- React
- Express
- Axios
- Dotenv
- Cors


## Contribution
 
Contributions are welcome. Please fork the repository, create a new branch for your contributions, and submit a pull request.


## Contact

Feel free to reach out to me on my email:
thepolyglot8@gmail.com


## License

[![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)](https://opensource.org/license/MIT)


