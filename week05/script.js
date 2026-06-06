let booksData = null;
let detailed = false;

async function loadBooks() {
    const response = await fetch("books.json");
    const data = await response.json();

    booksData = data;
    renderBooks();
}

function renderBooks() {

    const content = document.getElementById("content");

    if (!booksData) return;

    let html = "<ul>";

    for (let book of booksData.books) {
        html += `
            <li>
                <strong>${book.title}</strong> — ${book.author}
            </li>
        `;
    }

    html += "</ul>";

    content.innerHTML = html;
}

function detailedView() {

    const content = document.getElementById("content");

    let html = "";

    for (let book of booksData.books) {

        html += `
            <div class="book-card">
                <img src="${book.imageLink}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Country:</strong> ${book.country}</p>
                <p><strong>Language:</strong> ${book.language}</p>
                <p><a href="${book.link}" target="_blank">More info</a></p>
            </div>
        `;
    }

    content.innerHTML = html;
}

function toggleView() {
    detailed = !detailed;

    if (detailed) {
        detailedView();
    } else {
        renderBooks();
    }
}

document.getElementById("control").onclick = toggleView;

window.onload = () => {
    loadBooks();
};
;
