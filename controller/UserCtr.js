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
      from: "Thomas@versi.studio",
      subject: "Madreply - Verify your email",
      text: "Verify your email",
      html: body,
    });
    return res.json({
      success: "Please check your mailbox. Verify your email.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Email Send Error!" });
  }
}