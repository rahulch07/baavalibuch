# baavalibuch


This repository contains the code for a multi-tier application consisting of a Django Backend, an Express Backend, and a React Frontend.

## Django Backend

The Django Backend is a server that provides an API for performing ngrams comparison using NLTK. It exposes an endpoint that accepts two strings and returns the common ngrams between them. The backend uses Django and NLTK to perform the ngrams analysis.

## Express Backend

The Express Backend provides the following functionalities:

- **Logging Connections**: It logs the number of times a connection is made by the frontend and inserts the information into a Mongoose Model for tracking and analysis.
- **Text Insertion**: It receives the text inserted from the frontend and inserts it into another Mongoose Model for storage and retrieval.
- **Django API Integration**: It calls the Django API using the most recent two strings stored in the database and returns the ngrams comparison result to the frontend.

## React Frontend

The React Frontend is responsible for accepting text input from the user and sending it to the backend for processing. It provides a user-friendly interface that allows the user to interact with the application effortlessly. Additionally, it displays the number of times a connection is made to the backend and shows the ngrams comparison of the two most recent strings retrieved from the backend.

### Bonus Functionality

As a bonus, the React Frontend incorporates UI changes on user interaction to enhance the user experience. The UI is designed to be intuitive and visually appealing, providing a seamless interaction with the application.

---
