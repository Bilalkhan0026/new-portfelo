import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact" className="pt-32 container h-[900px]">
        {/* <h2 className="text-[200] text-center md:text-6xl">Contact Me</h2>s */}
      <div className="grid mt-12 md:grid-cols-2 gap-10">
        <div className="space-y-g">
          <h2 data-aos="zoom-in-up" className="text-7xl mb-5" >Get in touch</h2>
          <p data-aos="zoom-in-up" className="text-white mb-5 text-[20px] pt-2">
            drop me a line, give me a call, or a message by submitting the form{" "}
          </p>
          <div data-aos="zoom-in-up" className="flex gap-3 mb-5 items-center">
            <AiOutlineMail size={30} /> Bilalniazi592@gmail.com
          </div>
          <div data-aos="zoom-in-up" className="flex gap-3 mb-5 items-center">
            <BsTelephone size={30} /> 03023320136
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent broder broder-accent"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent broder broder-accent"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="messsge">Message</label>
            <textarea
              className="bg-transparent broder broder-accent"
              id="msg" rows={8}></textarea>
          </div>
          <button className="bg-accent p-2 px-6">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
