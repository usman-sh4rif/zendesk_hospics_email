const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const multer = require("multer");

const { fromEmail, configMail } = require("./config/mail.config");
const validateForm = require("./middleware/validate_form");
const { generateEmail } = require("./styled_email_template");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // console.log("destination file: ", file);
    callback(null, __dirname + "/uploads");
  },
  filename: function (req, file, callback) {
    const file_extension = file?.originalname?.split(".").pop();
    const fn = file.originalname
      .substring(0, file?.originalname.lastIndexOf("."))
      .replace(" ", "_");
    const ts = Date.now().toString();
    const filename = `${fn}_${ts}.${file_extension}`;
    // console.log({ ts, file_extension, filename, fn });
    callback(null, filename);
  },
});

// Set saved storage options:
const upload = multer({ storage: storage });

app.post(
  "/api/email/",
  upload.array("attachment"),
  validateForm,
  async (req, res) => {
    const { dept, deptText, name, agency, email, phone, message } = req.body;

    const from_name = "Hospice Help Center"; //name || "Zendesk Support";
    // const email_message = `
    //   <h1>Hello Receipent</h1>
    //   <p><b>For Department</b>: ${deptText} - ${dept} </p>
    //   <p><b>Name</b>: ${name}</p>
    //   <p><b>Agency</b>: ${agency}</p>
    //   <p><b>Email</b>: ${email}</p>
    //   <p><b>Phone</b>: ${phone}</p>
    //   <p><b>Message</b>: ${String(message)}</p>
    // `;
    let subject = deptText;
    if (deptText.toLowerCase() == "support") {
      subject = "Support Ticket";
    } else if (deptText.toLowerCase().includes("other")) {
      subject = "Contact Form Submission";
    }
    const email_message = generateEmail(
      deptText,
      name,
      agency,
      email,
      phone,
      message
    );
    const mainConfig = {
      from: `${from_name} <${fromEmail}>`,
      // to: [to, "xsaf@axrtgsadf.xssss"],
      to: [dept],
      subject: subject, // "Message from Zendesk Help and support",
      html: email_message,
    };

    if (req.files.length) {
      const attachments = [];
      req.files.forEach(({ filename, path }) => {
        attachments.push({ filename, path });
      });
      mainConfig.attachments = attachments;
    }

    const transporter = configMail();
    try {
      const info = await transporter.sendMail(mainConfig);

      if (req.files?.length) {
        req.files.forEach((file) => {
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
          }
        });
      }
      res.json({
        message: "Email sent successfully!",
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      });
    } catch (err) {
      console.log("Error sending mail", err.message);
      return res.status(500).json({ message: err.message });
    }
  }
);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
