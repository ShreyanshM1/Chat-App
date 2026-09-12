let delBtn = document.querySelectorAll(".del");

delBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    let confirmDel = confirm("This chat is going to be deleted");

    if (confirmDel) {
      btn.closest("form").submit;
    }
  });
});
