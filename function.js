function sendMail() {
  let templateParams = {
    anrede: document.getElementById("geschlecht").value,
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    email: document.getElementById("email").value,
  };

  emailjs.send("service_miksfq5", "template_no9rquw", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      window.location.href = "success.html";
    },
    (error) => {
      console.log("FAILED...", error);
      alert(
        "Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut."
      );
    }
  );
}
