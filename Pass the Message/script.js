let messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    getMessage();
  }
});

const getMessage = () => {
  let messageOutput = document.getElementById("message-output");
  messageOutput.innerHTML = messageInput.value;
  messageInput.value = "";
};
