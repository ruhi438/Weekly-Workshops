# COMP2110 Week 03
# Task 1 - Setting Up and Understanding Live Server
In this task, I used the Live Server extension in VS Code to run a local web server by writing a index.html file and accessed my page at http://127.0.0.1:5500/index.html. I inspected the HTTP requests using Chrome DevTools and observed that the browser sends a GET request to load the HTML file, returning a 200 OK response when successful. On the page, I also found response headers which include information such as the HTTP method and URL, browser details  content type (e.g. text/html), and metadata including information about when the page was last modified, etc.

# Task 2: Exploring URLs and Query Parameters

In this task, I manually modified the URL to include query parameters such as name=student  and theme=dark and inspected them using DevTools in the Network tab under Query String Parameters. I then used URL search parameters to extract these values such as name = student from the URL and  display them on the webpage. When JavaScript is added, the page updates automatically by showing a personalised message such as “Welcome, student!” based on the URL parameters.

# Task 3: Investigating HTTP Caching

In this task, I used Live Server to load my week03 project in the browser and investigated how caching affects page loading using DevTools. When I disabled the caching, the browser downloaded all files from the server which resulted in an increase in load times. However, when the caching was enabled, the browser reused stored files making the page load faster as fewer requests were made.

Addtionally, I inspected the response headers including Cache-Control, ETag and Last-Modified. Cache-Control defines how long a response can be stored in the browser cache, whereas ETag is a unique identifier used to check if a file has changed and Last-Modified shows the last time the file was updated. These headers help the browser to decide whether to reuse cached content or request a new copy from the server.

# Task 4: Basic Server-Side Caching with Express.js
I created a new folder using the  mkdir server command on the terminal and then created a server.js file to run using node server.js function. Afterwards, I opened http://localhost:3000 and refreshed the page multiple times. I observed using DevTools that the response was from the cache that was stored instead of re-dowloading making the page load faster.
