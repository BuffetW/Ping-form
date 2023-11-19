const form = document.getElementById("form");
const mail = document.getElementById("mail");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});

function validate() {
  const mailValue = mail.value.trim();

  if (mailValue === "") {
    error(mail, "Email cannot be empty");
  } else if (!checkMail(mail)) {
    error(mail, "Please provide a valid email address");
  } else {
    success(mail);
  }
}

function checkMail(mail) {
  return /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(mail);
}

function error() {}

function success() {}

mail.placeholder = "No need to fill this field";
