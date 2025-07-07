# The Daily Grind - Web Server



## Project Overview
Thisitis a basic web server developed for The Daily Grind, a local coffee shop. The purpose of this project is to serve a homepage and a contact page using Node.js and Express.js. It demonstrates essential backend skills such as setting up a server, managing routing, and serving static files.

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
   node server.js
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

## Project Links
- [GitHub Code](https://github.com/BulutHamali/The-Daily-Grind)
- [Live Demo](https://the-daily-grind-lnpd.onrender.com/#menu)

## License
This project is developed for educational and demonstration purposes only.



