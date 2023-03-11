const nameField = document.getElementById("name-field");
const emailField = document.getElementById("email-field");
const messageField = document.getElementById("message-field");
let infoObject = {};
const sendName = () => {
  const name = nameField.value;
  name.value = "";
  localStorage.setItem("name", name);
  storeItem();
};
const sendEmail = () => {
  const email = emailField.value;
  localStorage.setItem("Email", email);
  infoObject["Email"] = email;
  storeItem();
};
const sendMessage = () => {
  const message = messageField.value;
  localStorage.setItem("Message", message);
  infoObject["Message"] = message;
  storeItem();
};

// Delete from the local storage
const deleteEmail = () => {
  const removeEmail = localStorage.removeItem("Email");
};
const deleteName = () => {
  const removeName = localStorage.removeItem("name");
};
const deleteMessage = () => {
  const removeMsg = localStorage.removeItem("Message");
};

// Store all value into a object
const storeItem = () => {
  const storeName = localStorage.getItem("name");
  const storeMsg = localStorage.getItem("Message");
  const storeEmail = localStorage.getItem("Email");
  if (storeName) {
    infoObject["Name"] = storeName;
  }
  if (storeEmail) {
    infoObject["Email"] = storeEmail;
  }
  if (storeMsg) {
    infoObject["Message"] = storeMsg;
  }

  const convertToString = JSON.stringify(infoObject);
  localStorage.setItem("Object", convertToString);
};

// Do with reset
const reset = () => {
    localStorage.clear();
}