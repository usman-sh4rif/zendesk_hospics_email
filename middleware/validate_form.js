const fs = require("fs");
const { registeredEmails } = require("../config/mail.config");

const validateForm = async (req, res, next) => {
  // console.log(req.files);
  const { dept, name, agency, email, phone, message } = req.body;
  let errorMsg = [];
  if (!dept) {
    errorMsg.push({
      field: "dept",
      message: "Department is required",
    });
  } else if (registeredEmails.indexOf(dept) === -1) {
    errorMsg.push({
      field: "dept",
      message: "Invalid Department",
    });
  }

  if (!name) {
    errorMsg.push({
      field: "name",
      message: "Name is required",
    });
  }
  // if (!agency) {
  //   errorMsg.push({
  //     field: "agency",
  //     message: "Agency is required",
  //   });
  // }
  
  if (!email) {
    errorMsg.push({
      field: "email",
      message: "Your Email is required",
    });
  }
  
  if (!phone) {
    errorMsg.push({
      field: "phone",
      message: "Phone is required",
    });
  }
  // if (!message) {
  //   errorMsg.push({
  //     field: "message",
  //     message: "Message is required",
  //   });
  // }

  if (errorMsg.length) {
    if (req.files?.length) {
      req.files.forEach((file) => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }
    res.status(400).json(errorMsg);
  } else {
    next();
  }
};

module.exports = validateForm;
