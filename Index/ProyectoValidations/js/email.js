/*function sentmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "work53521@gmail.com",
        Password: "anvftwykfjpmcatj",
        To: 'btrizsamper@gmail.com',
        From: "work53521@gmail.com",
        Subject: "This is the subject test1",
        Body: "And this is the body test2"
    }).then(
        message => alert(message)
    );
}

function sentmail() {
    Email.send({
        SecureToken: "a6aed46b-033a-44e5-8954-d34727b4295d",
        To: 'btrizsamper@gmail.com',
        From: "work53521@gmail.com",
        Subject: "This is the subject test1",
        Body: "And this is the body test2"
    }).then(function(message) {
            alert("Email successfully sent")
        );
    }
    
function sendEmail() {
    Email.send({
            SecureToken: "016e9683-9a48-4e09-bde4-a6ee7772460d",
            To: "btrizsamper@gmail.com",
            From: "work53521@gmail.com",
            Subject: "Testing Email using javascript",
            Body: "If you are reading this, dont forget to applaud"
        })
        .then(
            message => alert(message)
        );
}
*/
function sendEmail() {
    Email.send({
            SecureToken: "016e9683-9a48-4e09-bde4-a6ee7772460d",
            To: "btrizsamper@gmail.com",
            From: "work53521@gmail.com",
            Subject: "Test 9mil Email using javascript",
            Body: "If you are reading this, applaud to the internet and to yourself"
        })
        .then(
            message => {
                if (message == "OK") {
                    alert("Gracias por comunicarse con nostros, pronto algun miembro de nuestro equipo entrara en contacto con usted.")
                } else {
                    alert(message)
                }
            }
        );
}


/*Attachments
Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body",
    Attachments : [
    {
        name : "smtpjs.png",
        path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
    }]
}).then(
  message => alert(message)
);
*/