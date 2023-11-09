function sendMail() {
  var templateParams = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    mesage: document.getElementById("message").value,
  };
  emailjs.send("service_4kisvpd", "template_q1s6fqp", templateParams).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
}
