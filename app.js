document.addEventListener("DOMContentLoaded", function() {

  const input = document.getElementById("searchInput");

  input.addEventListener("input", function() {
    const value = input.value.toLowerCase();
    const books = document.querySelectorAll(".card");

    books.forEach(function(book) {
      const text = book.innerText.toLowerCase();
      if(text.includes(value)){
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

});
