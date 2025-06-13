import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";

const Connect = () => {
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
    <div className="h-screen flex flex-col justify-evenly  items-center relative ">
      <h3 className="uppercase text-lg md:text-2xl tracking-widest text-gray-500 animate-pulse absolute top-24 mb-10 z-10 ">
        Connect Me
      </h3>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact_form absolute text-black mt-34 md:mt-0 items-center flex flex-col gap-4 p-4 bg-[rgb(50,49,49)]   rounded-xl h-[400px] w-[300px] md:w-[600px] justify-evenly z-0 "
      >
        <input
          id="name"
          name="to_name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="input h-10 md:h-12 rounded-lg w-[200px] md:w-[400px] lg:w-[450px] xl:w-500px bg-gray-200 text-xl pl-2 "
        />
        <input
          id="email"
          name="from_name"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="input h-10 md:h-12 rounded-lg w-[200px] md:w-[400px] lg:w-[450px] xl:w-500px bg-gray-200 text-xl pl-2 "
        />
        <textarea
          name="message"
          id="message"
          minLength={20}
          maxLength={150}
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          className="input h-32 md:h-44 rounded-lg w-[200px] md:w-[400px] lg:w-[450px] xl:w-500px bg-gray-200 text-xl overflow-y-scroll pl-2 "
        ></textarea>
        <button className="profileButton w-[80%] border border-gray-500 animate-pulse ">
          Send
        </button>
      </form>
      <div className="absolute bottom-5">
        <SocialIcon
          url="https://github.com/iamsahilydv/"
          target={"_blank"}
          fgColor="grey"
          bgColor="transparent"
          className="hover:animate-bounce"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/iamsahilydv/"
          target={"_blank"}
          fgColor="grey"
          bgColor="transparent"
          className="hover:animate-bounce"
        />
        <SocialIcon
          url="https://twitter.com/iamsahilydv/"
          target={"_blank"}
          fgColor="grey"
          bgColor="transparent"
          className="hover:animate-bounce"
        />
        {/* <SocialIcon
          url="https://www.facebook.com/iamsahilydv/"
          target={"_blank"}
          fgColor="grey"
          bgColor="transparent"
          className="hover:animate-bounce"
        /> */}
        <SocialIcon
          url="https://www.instagram.com/iamsahilydv/"
          target={"_blank"}
          fgColor="grey"
          bgColor="transparent"
          className="hover:animate-bounce"
        />
        <SocialIcon
          className="cursor-pointer hover:animate-bounce"
          target={"_blank"}
          network="email"
          fgColor="grey"
          bgColor="transparent"
          url="https://mail.google.com/mail/u/0/?fs=1&to=100nukhola123@gmail.com&tf=cm"
        />
      </div>
    </div>
  );
};

export default Connect;
