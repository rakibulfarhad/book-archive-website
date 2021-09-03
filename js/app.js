document.getElementById('error-message').style.display = 'none';
const searchBook = searchText => {

    const searchField = document.getElementById('search-field');
    const searchTexts = searchField.value;

    // clear data
    searchField.value = '';

    if (searchTexts == '') {
        displayError()
    }
    else {
        document.getElementById('error-message').style.display = 'none';

        document.getElementById('search-result').textContent = '';

        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBook(data.docs))

    }

}

const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('book-numbers').textContent = '';
}


const displayBook = books => {
    console.log(books)
    // const bookList = books.books;

    document.getElementById('book-numbers').textContent = '';
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if(books == null){
        displayError()
    }
    else{
        document.getElementById('error-message').style.display = 'none';
        
        document.getElementById('book-numbers').innerText = `Books Found ${books.length}`;

        books.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div  class="card h-100 text-center">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="w-50 h-50 mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${book.title}</h5>
                        <p class="card-text">Author Name:${book.author_name}</p>
                        <p class="card-text">Publisher: ${book.publisher}</p>
                        <p class="card-text">Publish Date: ${book.publish_date}</p>
                        
                    </div>
                    
                </div>
            `;
            searchResult.appendChild(div);
        })
    }
    
}


