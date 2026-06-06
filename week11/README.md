# COMP2110 Week 11

1) Run the server and visit the front-end in your browser. Observe the creation of the cookie the first time you visit the page.
I opened the project in VS Code and used the built-in terminal to run the server with Node. After starting the server, I opened the front-end in the browser using the local host URL.  I checked this using Dev tools under Application then to Cookies where I could see the cookie storing a visit counter that increases each time the page is refreshed.

3) Trace through the server code in index.js to see where the cookie value is created and added to the response.
In index.js, the cookie is created and updated using the route handler that processes all the requests. The server reads the existing cookie value from the request, adds it and then sends it back in the response using res.cookie(). 

4) Modify the server code to increment the counter by two for each visit. Test this on the front end.
I modified the code by changing code in index.js from count++ to count += 2.

5) Try adding some 'likes' to the list via the form on the front end. Observe the requests that are sent when you do this. What is the payload sent with the POST request?
The payload sent when the POST request is made contains a single field called thing, which is sent as { thing: "" }, meaning the input value is currently empty.

# XXS Attacks

Initially, the application was not vulnerable to XSS attack because any HTML or JavaScript code was treated as plain text. When I submitted a request such as <span onmouseover="alert('hacked!')">Hacked</span>, it appeared on the page as text and did not execute demostrating that the page had not been hacked. Afterwards, I modified the front-end code in script.js to use unsafeHTML, which allows raw HTML to be inserted directly into the DOM. Due to the raw HTML being inserted, it disabled the protection against malicious input and made the application vulnerable to XSS attacks. When I tested the same request again, it executed in the browser and triggered an alert demonstrating how unsafe rendering can allow injected JavaScript to run the page.
