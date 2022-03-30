const sendGridMail = require("@sendgrid/mail");
const SENDGRID_API_KEY =
  "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";
  
sendGridMail.setApiKey(SENDGRID_API_KEY);

exports.test = async (req, res) => {
  return res.json("hi");
}
exports.sendEmail = async (req, res) => {
  try {
    const body = `Press here to verify your email. Thank you.`;
    await sendGridMail.send({
      to: "wstar3233@gmail.com",
      from: "verify@madreply.com",
      subject: "Madreply - Verify your email",
      text: "Verify your email",
      html: body,
    });
    return res.json({
      success: "Please check your mailbox. Verify your email.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Email Send Error!!!!" });
  }
}