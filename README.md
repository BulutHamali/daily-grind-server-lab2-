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

## Reflection Questions and Answers

1. What is the difference between res.send() and res.sendFile()?


- res.send() is used to send simple text or data back to the browser. For example, you might use it to send a short message like "Hello!" or a list of names.

- res.sendFile() is used to send an entire file, like an HTML page, to the browser. You use it when you want to show a full web page instead of just a message.

When to use them:

- Use res.send() if you're just sending text or data.

- Use res.sendFile() when you want to send a full webpage (like index.html or contact.html).

2. Why do we need the path module when sending files?

- The path module helps create the correct file paths so the server knows where to find the files on your computer.

- If you just use 'public/index.html', it might work on your computer but break on someone else's — because the location might not be the same. Using path.join(__dirname, 'public', 'index.html') makes sure it always finds the right file no matter where the project is run.

3. How do you add a third page like a menu page?

To add another page, follow these simple steps:

- Create the file
- Make a new file inside the public folder called menu.html. Add some basic content like:
```html
<h1>Our Menu</h1>
<p>Check out our coffee options!</p>
```
Add a new route to your server

Open server.js and add this:

```bash
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'))
})
```
Run your server and test it

Visit http://localhost:3000/menu in your browser to see the new page.

