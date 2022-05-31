function colorToggle() {
  var body = document.body;
  var input = document.getElementById("new-task-content");
  var title = document.getElementsByClassName("text-3xl");
  body.classList.toggle("dark-mode");
  input.classList.toggle("dark-mode-input");
  title.classList.toggle("dark-mode-title");
}
