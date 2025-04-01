function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    anrede: document.getElementById("geschlecht").value,
  };
  return emailjs
    .send("service_miksfq5", "template_no9rquw", parms)
    .then((response) => console.log("Email sent successfully:", response))
    .catch((error) => console.error("Error sending email:", error));
}
