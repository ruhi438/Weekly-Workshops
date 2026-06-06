# COMP2110 Week 05

Briefly summarise the work you've done this week here

 Tasks Completed
1. Write the function renderBooks that takes the array of book objects and renders them in the page as a simple list with the title and author of each book.   The function should find the content div within the page and insert the book list into that.
Note that the window.onload handler in the script will call renderBooks when the page loads. Test this and ensure that your code is displaying the list of books correctly.

--> I created an asynchronous loadBooks() function that fetches data from books.json using the Fetch API. The response is converted to JSON and stored in a global variable called booksData, allowing it to be accessed by other functions. Once the data is loaded, I call renderBooks() to display an array of book objects as a simple list.
 
2.Write a second function called detailedView that displays more information about each book including the image referenced in the imageLink property.  Modify the window.onload handler to call this function instead of the first one.

--> I created a second function called detailedView() to display detailed information about each book. This function loops through the booksData.books array and generates HTML that includes the book’s image, title, author, country, language, and a link for more information. The function loops through booksData.books and inserts the generated HTML into the content div using innerHTML, replacing the simple list view. I then modified the window.onload handler so that it calls detailedView() instead of renderBooks() when the page loads

3.Implement the onclick handler for the button in the page so that it switches between the two views.  You will need a global variable to record which view is current so that your function can switch to the other one.  Note that this variable will change so you need to declare it with 'let'.

--> I created a global variable using let called detailed to keep track of which view is currently active. Then, I implemented a toggleView() function that switches the value of this variable between true and false each time the button is clicked. Depending on the value, the function calls either renderBooks() for the simple list view or detailedView() for the grid view. I connected this function to the button using an onclick event handler so the user can switch between the two views interactively.

4.Once you have view switching working, write a stylesheet style.css that displays the detailed list of books as a grid rather than a list.

--> I created a file called style.css in order to improve the overall style of the page which displayed the list of books in a grid view as shown in the #GridView in my code. To create a grid view, I wrote the following code below which automatically arranges all books into their respective columns as well as added borders, padding, corners and a box to add a grid.   

GridView {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
}




