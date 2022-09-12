import React from "react";
import Uplaodicon from "../assets/images/upload.png";

export default function ContactForm() {
  return (
    <div className="contact-form ">
      <div>
        <h1 className="text-[18px] font-[600]">Contact Form</h1>
      </div>
      <div className="contact-form__upload-wrapper">
        <div className="text-center">Click To Upload image</div>
        <img src={Uplaodicon} className="w-[100px] m-auto mt-[10px]" />
      </div>
      <form>
        <input type="file" className="hidden" />
        <input
          type="text"
          className="input contact-form__input"
          placeholder="Name"
        />
        <input
          type="email"
          className="input contact-form__input"
          placeholder="Email"
        />
        <input
          type="tel"
          className="input contact-form__input"
          placeholder="Phone Number"
        />
        <input
          type="address"
          className="input contact-form__input"
          placeholder="Address"
        />
      </form>
    </div>
  );
}
