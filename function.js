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
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
