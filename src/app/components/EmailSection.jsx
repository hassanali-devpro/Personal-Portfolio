"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pihcmti', 'template_icuxtsk', form.current, {
        publicKey: 'n47DjWdZJYwy9gZVW',
      })
      .then(
        () => {
          alert('Email Send!');
          form.current.reset();
      },
      (error) => {
          alert('Unable to Send the Email', error.text);
      },
      );
  };

  return (
    <section
      id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label className="text-white block mb-2 text-sm font-medium">  Your email</label>
              <input name="from_name" type="email"  required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="jacob@google.com"/>
            </div>
            <div className="mb-6">
              <label  className="text-white block text-sm mb-2 font-medium">  Subject</label>
              <input name="subject" type="text"  required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Just saying hi"/>
            </div>
            <div className="mb-6">
              <label className="text-white block text-sm mb-2 font-medium">  Message</label>
              <textarea name="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."/>
            </div>
            <input type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" value="Send" />
          </form>
        
      </div>
    </section>
  );
};

export default EmailSection;
