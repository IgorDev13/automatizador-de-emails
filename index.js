emailjs.init("TfIE4qxcvSpEkxZ5f");

const sendBtn = document.querySelector(".send-btn");
const result = document.querySelector(".result");

sendBtn.addEventListener("click", sendEmail);

function sendEmail() {
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_f9geqei", "template_mjflisf", {
      to_email: to,
      subject: subject,
      message: message,
    })
    .then(
      function () {
        result.innerHTML = "Email enviado com sucesso!!";
        result.style.opacity = 1;
      },
      function (error) {
        result.innerHTML = "Erro ao enviar o Email";
        result.style.opacity = 1;
        console.log(error);
      }
    );
}
