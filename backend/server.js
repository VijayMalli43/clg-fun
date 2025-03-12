// const express = require("express");
// const multer = require("multer");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//     //origin : "https://lab-e4iwi9ctr-madhans-projects-418c7660.vercel.app/"
//     origin : "*"
// }));

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post("/send-email", upload.array("files", 10), async (req, res) => {
//     const { rollNumber, collegeEmail } = req.body;
//     const files = req.files;

//     if (!rollNumber || !collegeEmail || files.length === 0) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const attachments = files.map(file => ({
//         filename: file.originalname,
//         content: file.buffer,
//     }));

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: collegeEmail,
//         subject: "Your Lab Work Files",
//         text: `Hello, your files are attached. Roll Number: ${rollNumber}`,
//         attachments: attachments,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: "Files sent successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error sending email", error });
//     }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));




// const express = require("express");
// const multer = require("multer");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: "*"
// }));

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post("/send-email", upload.array("files", 10), async (req, res) => {
//     const { rollNumber, collegeEmail } = req.body;
//     const files = req.files;

//     if (!rollNumber || !collegeEmail || files.length === 0) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         secure: false,
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const attachments = files.map(file => ({
//         filename: file.originalname,
//         content: file.buffer,
//     }));

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: collegeEmail,
//         subject: "Your Lab Work Files",
//         text: `Hello, your files are attached. Roll Number: ${rollNumber}`,
//         attachments: attachments,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: "Files sent successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error sending email", error });
//     }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));






const express = require("express");
const multer = require("multer");
const cors = require("cors");
const FormData = require("form-data");
const Mailgun = require("mailgun.js");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
});

console.log(process.version)

app.post("/send-email", upload.array("files", 10), async (req, res) => {
    const { rollNumber, collegeEmail } = req.body;
    const files = req.files;

    if (!rollNumber || !collegeEmail || !files || files.length === 0) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const formData = new FormData();
        formData.append("from", `noreply@${process.env.MAILGUN_DOMAIN}`);
        formData.append("to", collegeEmail);
        formData.append("subject", "Your Lab Work Files");
        formData.append("text", `Hello, your files are attached. Roll Number: ${rollNumber}`);

        files.forEach(file => {
            formData.append("attachment", file.buffer, { filename: file.originalname });
        });

        const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: `noreply@${process.env.MAILGUN_DOMAIN}`,
            to: [collegeEmail],
            subject: "Your Lab Work Files",
            text: `Hello, your files are attached. Roll Number: ${rollNumber}`,
            attachment: files.map(file => ({
                data: file.buffer,
                filename: file.originalname,
            })),
        });

        console.log("Mail sent:", response);
        res.status(200).json({ message: "Files sent successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email", error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));