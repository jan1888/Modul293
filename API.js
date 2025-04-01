import { emailjs } from "@emailjs/browser";
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_miksfq5"; // Ersetze "YOUR_SERVICE_ID" mit deiner EmailJS Service ID
    const templateID = "service_miksfq5"; // Ersetze "YOUR_TEMPLATE_ID" mit deiner EmailJS Template ID

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert("Nachricht erfolgreich gesendet!");
        this.reset();
      },
      (error) => {
        alert("Fehler beim Senden der Nachricht: " + JSON.stringify(error));
      }
    );
  });
