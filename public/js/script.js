document.addEventListener("DOMContentLoaded", function () {
  const books = document.querySelectorAll(".book");

  books.forEach(book => {
    book.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      if (link) {
        window.location.href = link; // Abre o livro
      } else {
        alert("Livro indisponível no momento.");
      }
    });
  });
});