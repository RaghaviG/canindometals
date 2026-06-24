function sendMail()
{
    let parms ={
        name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        email : document.getElementById("email").value,
    }
    emailjs.send("service_dfjs4hq","template_ejst50b",parms).then(alert("Email Sent!"))
}