const button = document. getElementById("loadBtn");
const jokelist = document.getElementById("joke-list");
const statusText = document. getElementById("status");

button. addEventListener("click", function() {

statusText.textContent = "Loading...";
jokeList.innerHTML = "";

fetch("https://official-joke-api.appspot.com/jokes/ten")
    •then(response => response•json())
    •then(data => {

            statusText.textContent = "";
  
            data.forEach(joke ==> {

               const li = document. createElement("li");
               li.innerHTML = `<strong>$(joke.setup}</strong><br>${joke.punchline)`;
      
               jokeList.appendchild(1i);
            });

})

•catch(error ==> { 
  statusText.text.Content = "Failed to load jokes";
  console.error(error);
      });
});
