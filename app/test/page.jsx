"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SendEmailWithImage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const form = e.target;
    // The form element
    console.log(form);

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_S_ID, // Service ID from EmailJS
        process.env.NEXT_PUBLIC_EMAILJS_T_ID, // Template ID from EmailJS
        form, // The form element itself
        process.env.NEXT_PUBLIC_EMAILJS_P_KEY // User ID from EmailJS
      );

      if (response.status === 200) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send email.");
      }
      console.log("Response:", response);
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      console.error("Error details:", error);
    }
  };

  return (
    <div>
      <h1>Send Email with Image</h1>
      <form onSubmit={handleSendEmail}>
        <input type="file" name="file" onChange={handleFileChange} />
        <button type="submit">Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export default function Test() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     console.log(form.current);

//     emailjs
//       .sendForm(
// process.env.NEXT_PUBLIC_EMAILJS_S_ID,
// process.env.NEXT_PUBLIC_EMAILJS_T_ID,
// form.current,
// {
//   publicKey: process.env.NEXT_PUBLIC_EMAILJS_P_KEY,
// }
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
