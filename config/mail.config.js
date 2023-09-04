const nodeMailer = require("nodemailer");
const fromEmail = "usman.sharif@dynamologic.com";
const userEmail = "mohd.sh4rif@gmail.com";
const userPassword = "gmmxogkpbasjlcsn";

const registeredEmails = [
  "mohd.sh4rif@gmail.com",
  "sh4rif@hotmail.co.uk",
  "usman.sharif@dynamologic.com",
  "sadaf.kayani@dynamologic.com",
];

const configMail = () => {
  const transporter = nodeMailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    service: "gmail",
    auth: {
      user: userEmail,
      pass: userPassword,
    },
    
  });
  return transporter;
}; 

module.exports = { fromEmail, registeredEmails, configMail };
