# COMP2110 Week 08

# Task 1: Build a Random Joke Generator

I created a simple web page that fetches a random joke from the Official Joke API when a button is clicked. I used fetch() to send a request to the API, then converted the response into JSON format using .json(). The joke’s setup and punchline were then displayed in the DOM inside paragraph elements. Addtionally, I added an error handling method using .catch() to display an error message if the request fails.


# Task 2: Load and Display Multiple Random Jokes

I built a a feature that load multiple jokes simultaneously from the API endpoint https://official-joke-api.appspot.com/jokes/ten. To do this, I added a button, an <ul> to display jokes, and an status message element. When the button is clicked, the existing list gets cleared and a loading message appears. A request is made using fetch() and once the data is received, I looped through the array of jokes and created <li> elements containing each joke’s setup and punchline, which were then added to the list.
