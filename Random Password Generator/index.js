const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

generateBtn.addEventListener("click", function() {
  const length = document.getElementById("length").value;
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if(length <= 20)
    passwordEl.innerHTML = password;
  else
    passwordEl.innerHTML = "Length Should be less then 20.";
});
