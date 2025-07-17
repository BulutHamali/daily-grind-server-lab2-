# Daily Grind Server Lab 2

This project adds a new feature to the existing Express server for "The Daily Grind" coffee shop. The goal is to display a "Fun Fact of the Day" on a digital screen in the shop by fetching data from an external API and serving it to clients through a new route.

## Project Overview

- Built with Node.js and Express
- Communicates with an external public API (Useless Facts API)
- Returns a simple JSON response with a random fun fact
- Uses axios for external API requests
- Includes basic error handling

## How to Run This Project

1. Clone or download the repository.
2. Open a terminal and navigate into the project folder.
3. Run the following commands:

```bash
npm install
npm run dev

## Project Structure
```
daily-grind-server/
├── public/
│   ├── images/
│   │   ├── avocado-toast.jpg
│   │   ├── cappuccino.jpg
│   │   ├── croissant.jpg
│   │   ├── espresso.jpg
│   │   ├── latte.jpg
│   │   ├── muffin.jpg
│   ├── index.html                  # Homepage
│   └── contact.html                # Contact page
├── server.js                       # Express server setup
├── package.json                    # Project metadata and dependencies
└── README.md                       # Project documentation
```

## Technologies Used
- Node.js
- Express.js
- HTML (static pages)

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daily-grind-server.git
   cd daily-grind-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm  rund dev
   ```
   The server will be available at [http://localhost:3000](http://localhost:3000).

## Available Routes
| Route      | Description                        |
|------------|------------------------------------|
| `/`        | Serves index.html (homepage)       |
| `/contact` | Serves contact.html (contact page) |

## Learning Objectives
- Set up a Node.js project and manage dependencies using npm.
- Create and configure a basic Express.js server.
- Serve static HTML files using middleware.
- Implement routing to handle different URL paths.

Reflection Questions and Answers
1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
Re-formatting the data helps to simplify what the client receives. By only sending the necessary information (in this case, just the fun fact text), we reduce the amount of data transferred, make the client-side code easier to write, and avoid exposing unnecessary internal details from the third-party API. A clean and minimal response helps make our API more predictable and user-friendly.

2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
Sending a generic error message protects the internal details of our server and avoids exposing potentially sensitive or confusing information to the client. It also keeps the API consistent and clean. The detailed error logs can still be printed in the server console for debugging by the developer.

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
If the external API supports query parameters for language, we could modify the axios request URL like this:

```js
https://uselessfacts.jsph.pl/api/v2/facts/random?language=de
```
We could even allow clients to pass a language code via query string, for example:


```js
app.get('/api/fun-fact', async (req, res) => {
  const lang = req.query.lang || 'en';
  const url = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${lang}`;
  ...
});
```

This makes the application more flexible and user-friendly by allowing facts in different languages.