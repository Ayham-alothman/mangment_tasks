import nodemailer from 'nodemailer';

// It's good practice to initialize the transporter once, outside the function,
// if this code runs in a server environment where it persists.
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587, // Use 465 for SSL. If using 587, 'secure' should be false.
    secure: false, // true for 465, false for other ports (like 587 with STARTTLS)
    auth: {
        user: process.env.user_nodemailer, // Your Zoho Mail address
        pass: process.env.password_nodemailer, // Your Zoho Mail password or app password
    },
    // If you encounter issues with Zoho and port 587, sometimes adding this helps:
    // tls: {
    //     ciphers: 'SSLv3'
    // }
});

const SendEmailLink = async (token: string, email: string) => {
    try {
        // Construct the verification link
        // Ensure process.env.domain is correctly set (e.g., "https://yourdomain.com")
        const verificationLink = process.env.domain + `/verify/` + `${token}`;

        const mailOptions = {
            from: '"Tasker" <ayhamzain4@zohomail.com>', // Sender address
            to: email, // Recipient email address
            subject: 'Verify Your Email Address', // Subject line
            // Plain text body: make sure to use the actual link here
            text: `Hello,\n\nPlease click on the following link to verify your email address: ${verificationLink}\n\nIf you did not request this, please ignore this email.\n\nThanks,\nYour App Team`,
            // HTML body: Corrected way to embed the link
            html: '<p>Hello,</p>' +
                  '<p>Please click on the following link to verify your email address:</p>' +
                  // CORRECTED LINE: Directly embed the verificationLink variable inside href=""
                  `<p><a href="${verificationLink}">Verify My Email</a></p>` +
                  '<p>If you did not request this, please ignore this email.</p>' +
                  '<p>Thanks,<br>Your App Team</p>',
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        console.log(info); // This will show more details about the email sending result
        return; // No need to explicitly return undefined
    } catch (err) {
        console.error('Error sending verification email:', err);
        throw err; // Re-throw the error so it can be handled by the caller
    }
};

export { SendEmailLink };