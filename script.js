const form = document.getElementById("sheetdb-form");
const input = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then((response) => response.json(), (input.value = ""));
});
