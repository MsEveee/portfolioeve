import contactimg from "../assets/SVG/contactimg.svg";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrauy3h",
        "template_r15txfc",
        formRef.current,
        "au2w0jUnz4Oke9625"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="bg-[#f9f8ff] py-16">
      <div className="flex flex-col md:flex-row py-16 items-center md:items-start gap-8 px-4 md:px-16">
        <div className="w-full md:w-1/2">
          <div className="px-4 md:px-14 py-4">
            <h1 className="font-bold text-2xl md:text-2xl py-2">
              Get In Touch!
            </h1>
          </div>

          <div className="px-4 md:px-14">
            <form
              action=""
              className="flex flex-col gap-4 "
              ref={formRef}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone number"
                className="h-12 rounded px-5 outline-none border w-full"
              />

              <textarea
                name="user_message"
                placeholder="Message..."
                className="h-28 rounded px-5 py-3 outline-none border w-full"
                required
              ></textarea>
              <button
                type="submit"
                className="py-3 border rounded-lg bg-blue-500 text-white w-36 px-4 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="w-full md:w-1/2 rounded-md py-14 ">
          <img src={contactimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
