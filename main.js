// Evento para tratar o clique do botão "CADASTRAR"
$("#btn-cadastrar").click(function (e) {
  e.preventDefault();

  addLine();

  $("#in-task").val("");
  $("#in-task").focus();
});

// Evento para tratar o clique em cima dos 'list items'
$("ul").on("click", "li", function () {
  $(this).addClass("done");
});

function addLine() {
  const task = $("#in-task").val();

  if (task != "") {
    const newItem = $('<li class="tachado"></li>');
    $(`<p>${task}</p>`).appendTo(newItem);

    $(newItem).appendTo("ul");
  }
}
