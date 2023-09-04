function generateEmail(deptText, name, agency, email, phone, message) {
  return `<html style="width: 100%; overflow-x: hidden;">

    <head>
      <title>Email Template</title>
      <link href="https://fonts.cdnfonts.com/css/trebuchet-ms-2" rel="stylesheet">
      <style>
        html {
          overflow-x: hidden;
          width: 100%;
        }
    
        body {
          margin: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: "Manrope";
        }
      </style>
    </head>
    
    <body style="width: 100%; overflow-x: hidden;">
      <div class="emailtemplate-outerwrapper" style="width: 100%; clear: both; background: #f8f8f8;">
        <div class="emailtemplate-wrapper" style="width: 680px; clear: both; background: white; padding:50px; margin: auto;  border-left: 9px solid #e9f3fd;">
          <div class="main-container">
    
            <table style="border: none !important; padding-top: 30px; padding-left: 20px; width: 100%;">
              <tr style="border: none !important; padding-bottom: 20px; display: inline-block;">
                <td><img src="https://theme.zdassets.com/theme_assets/14462429/5edf2428c0df7577f10b4481b4a9ef86cb33e83b.png" style="height: 70px;"></td>
              </tr>
              <tr style="line-height: 30px; padding-bottom: 20px;">
                <td style="background: #e9f3fd; width: 100%; height: 20px;"></td>
              </tr>
              <tr style="line-height: 30px;display: inline-block; padding-top: 36px; padding-bottom: 50px;">
                <td style="font-weight: bold; font-size:22px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Contact Form Submission</td>
              </tr>
              <tr style="line-height: 30px; padding-bottom: 46px; display: block;">
                <td style="font-weight: bold; font-size: 15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Contact Details:</td>
              </tr>
            </table>
    
            <table style="padding-left: 20px; width: 100%;">
              <tr style="line-height: 30px; padding-bottom: 36px; display: block;">
                <td style="width: 200px; font-weight: bold; font-size:15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Department:</td>
                <td style="font-weight: normal; font-size: 15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;"> ${deptText}</td>
              </tr>
              <tr style="line-height: 30px; padding-bottom: 20px;">
                <td style="background: #e9f3fd; width: 100%; height: 20px;"></td>
              </tr>
              <tr style="line-height: 30px; padding-bottom: 36px; display: block;">
                <td style="width: 200px; font-weight: bold; font-size:15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Name:</td>
                <td style="font-weight: normal; font-size: 15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;"> ${name}</td>
              </tr>
    
              <tr>
                <td style="background: #e9f3fd; width: 100%; height: 20px;"></td>
              </tr>
              <tr style="line-height: 30px; padding-bottom: 36px; display: block;">
                <td style="width: 200px; font-weight: bold; font-size:15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Agency:</td>
                <td style="font-weight: normal; font-size: 15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;"> ${agency}</td>
              </tr>
    
    
              <tr>
                <td style="background: #e9f3fd; width: 100%; height: 20px;"></td>
              </tr>
              <tr style="line-height: 30px; padding-bottom: 36px; display: block;">
                <td style="width: 200px; font-weight: bold; font-size:15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Email:</td>
                <td style="font-weight: normal; font-size: 15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;"> ${email}</td>
              </tr>
    
              <tr>
                <td style="background: #e9f3fd; width: 100%; height: 20px;"></td>
              </tr>
    
              <tr style="line-height: 30px; padding-bottom: 36px; display: block;">
                <td style="width: 200px; font-weight: bold; font-size:15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;">Telephone:</td>
                <td style="font-weight: normal; font-size: 15px; color:#393939; font-family: 'Trebuchet MS', sans-serif;"> ${phone}</td>
              </tr>
    
    
              <tr>
                <td style="background: #e9f3fd; width: 100%; height: 20px; margin-bottom: 20px;display: inline-block;"></td>
              </tr>
              <tr>
                <td>
                  <p style="font-weight: bold; font-family: 'Trebuchet MS', sans-serif;"">Message:</p></td></tr>
    
                <tr>
                  <td>
                    <p style=" line-height: 20px; font-size: 15px; line-height: 24px; font-family: 'Trebuchet MS' , sans-serif;"">${String(message)}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </body>
    
    </html>`;
}

module.exports = { generateEmail };
