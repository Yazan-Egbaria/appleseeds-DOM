function addField() {
  const input = document.createElement("input");
  document.getElementById("dynamicForm").appendChild(input);
}

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;
  let message = "";

  inputs.forEach((input) => {
    if (input.value === "") {
      allFilled = false;
    } else {
      message += input.value + ",";
    }
  });

  if (!allFilled) {
    alert("must fill all fields");
  } else {
    message = message.slice(0, message.length - 1);
    alert(message);
  }
}
