import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();
  const handleContactForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send(
        "service_2h4ffnj",
        "template_3wyxb5k",
        templateParams,
        "SHBboEyVPvHLpeabj"
      )
      .then(() => {
        toast.success("Thank You! Your message has been sent successfully.");
        setLoading(false);
        navigateTo("/");
      })
      .catch((err) => {
        toast.error("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
        <div className="bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]border-4 border-dashed border-stone-400 mx-auto w-3/5 h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-3xl border-4 border-[#20171763]">
          <form
            className="flex flex-col gap-5 w-full"
            onSubmit={handleContactForm}
          >
            <h3
              className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
            >
              Contact Us
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-900">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-900">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-900">Your Phone</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-900">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-900">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 p-1 border border-gray-300  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                required
              />
            </div>

            <button
              className="bg-[#d6482b] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-1 px-4 rounded-md text-white my-4"
              type="submit"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
