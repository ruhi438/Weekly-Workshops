# COMP2110 Week 06

Briefly summarise the work you've done this week here.

COMP2110 Week 06

1. Update the stylesheet in the page header to be a bit more appealing (or ugly, depending on how you feel).
--> I updated the stylesheet inside the <page-header> component to improve its appearance by adjusting the layout, colours, and spacing. I modified the CSS to make the header more visually appealing and readable while keeping the logo and title clearly displayed.
   
2. Implement a new element <page-footer> that shows the text "Copyright 2024 &copy; Your Name" (the entity &copy; should display as ©).   Add a suitable stylesheet to the element.
--> I created a new element called <page-footer> by copying the structure of the page header component and modifying it. The footer displays the text “Copyright 2024 © my Name” using the &copy; HTML entity so it renders as the © symbol. I also added basic styling such as a top border and font styling to separate it from the main page content.  

3. Introduce a state property in the page footer element to hold the current year and use it in generating the content so that 2024 is generated from this property.
--> I created a new state property called _year inside the <page-footer> component to store the current year. In the constructor, I used new Date().getFullYear() to automatically set the year based on the system date. This value is then used in the render method so the footer always displays the correct year.
   
4. Now you will implement a component that gets data from the Star Wars API to show information about a Star Wars movie. This is based on the demonstration in this week's video. 

I created a LitElement component, <star-wars> that loads film data from the Star Wars API. In the constructor I set the initial film value, and in connectedCallback() I called a _fetch() method that uses fetch() with two .then() clauses to convert and store the JSON data in a state property. The render() method then uses the returned data (such as title and director) to display the film information and automatically updates when the data changes.
