function colorToggle() {
  var body = document.body;
  var input = document.getElementById("new-task-content");

  body.classList.toggle("dark-mode");
  input.classList.toggle("dark-mode-input");
}
