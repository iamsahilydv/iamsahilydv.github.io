import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";
import TiltCard from "./TiltCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Connect = () => {
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [2000, 4500], [-100, 100]);

  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [message, setmessage] = React.useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vv33ci",
        "template_zys1z9t",
        form.current,
        "4IcgGjr35X3Z0P9Hx"
      )
      .then(
        (result) => {
          alert("Mail Sent Successfully");
          setname("");
          setemail("");
          setmessage("");
        },
        (error) => {
          console.log(error);
          alert("Mail Not Sent ");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen w-full flex flex-col justify-center items-center relative text-center max-w-4xl px-4 sm:px-10 mx-auto pt-24 pb-12 overflow-hidden"
    >
      <motion.div
        style={{ y: yVal }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10 text-[18vw] font-black text-white/[0.015] uppercase tracking-[1rem] sm:tracking-[2rem] leading-none"
      >
        contact
      </motion.div>

      <h3 className="absolute top-6 uppercase tracking-[16px] sm:tracking-[24px] text-gray-500 text-base sm:text-lg md:text-2xl animate-pulse w-full text-center">
        Connect Me
      </h3>

      <TiltCard
        className="w-full max-w-lg mt-12 rounded-3xl glass-card p-6 sm:p-8 border border-white/5 shadow-2xl preserve-3d"
        maxTilt={6}
        scale={1.01}
      >
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center items-center w-full translate-z-10"
        >
          <input
            id="name"
            name="to_name"
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
            className="glass-input h-12 rounded-xl w-full text-sm sm:text-base px-4 py-3"
          />
          <input
            id="email"
            name="from_name"
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            className="glass-input h-12 rounded-xl w-full text-sm sm:text-base px-4 py-3"
          />
          <textarea
            name="message"
            id="message"
            minLength={10}
            maxLength={250}
            type="text"
            required
            placeholder="Message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="glass-input h-32 sm:h-40 rounded-xl w-full text-sm sm:text-base px-4 py-3 resize-none overflow-y-auto"
          ></textarea>
          
          <button 
            type="submit"
            className="w-full py-3 sm:py-3.5 bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black font-bold uppercase rounded-xl tracking-wider text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(247,171,10,0.25)] hover:shadow-[0_4px_25px_rgba(247,171,10,0.45)] mt-2"
          >
            Send Message
          </button>
        </form>
      </TiltCard>

      <div className="flex justify-center items-center gap-4 mt-10">
        <SocialIcon
          url="https://github.com/iamsahilydv/"
          target="_blank"
          fgColor="#9ca3af"
          bgColor="transparent"
          className="hover:scale-125 hover:!fgColor-[#F7AB0A] transition-transform duration-300"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/iamsahilydv/"
          target="_blank"
          fgColor="#9ca3af"
          bgColor="transparent"
          className="hover:scale-125 hover:!fgColor-[#F7AB0A] transition-transform duration-300"
        />
        <SocialIcon
          url="https://twitter.com/iamsahilydv/"
          target="_blank"
          fgColor="#9ca3af"
          bgColor="transparent"
          className="hover:scale-125 hover:!fgColor-[#F7AB0A] transition-transform duration-300"
        />
        <SocialIcon
          url="https://www.instagram.com/iamsahilydv/"
          target="_blank"
          fgColor="#9ca3af"
          bgColor="transparent"
          className="hover:scale-125 hover:!fgColor-[#F7AB0A] transition-transform duration-300"
        />
        <SocialIcon
          className="hover:scale-125 hover:!fgColor-[#F7AB0A] transition-transform duration-300"
          target="_blank"
          network="email"
          fgColor="#9ca3af"
          bgColor="transparent"
          url="mailto:iamsahilydv@gmail.com"
        />
      </div>
    </motion.div>
  );
};

export default Connect;
