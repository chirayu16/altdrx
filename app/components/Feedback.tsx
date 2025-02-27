import React from "react";

export default function div() {
  return (
    <div className="flex flex-col gap-6 bg-f7-gray py-8 px-6 rounded-2xl ">
      <div className="font-normal text-10-px font-inter text-form-gray opacity-40">
        FEEDBACK
      </div>
      <div className="text-dark-gray font-semibold text-28-px leading-9 font-inter">
        <span className="text-custom-orange">
          Seeking personalized support?
        </span>{" "}
        Request a call from our team
      </div>
      <div>
        <form className="flex gap-2">
          <div className=" w-96">
            <input
              type="text"
              placeholder="email id"
              className="border border-form-black rounded-40-px box-border font-inter text-lg text-custom-gray placeholder:text-custom-gray font-normal leading-7 tracking-normal py-4 pl-4 pr-10 w-full h-12"
            />
          </div>
        </form>
      </div>
      <div>
        <form className="flex gap-2">
          <div className=" w-96">
            <input
              type="text"
              placeholder="mobile number"
              className="border border-form-black rounded-40-px box-border font-inter text-lg text-custom-gray placeholder:text-custom-gray font-normal leading-7 tracking-normal py-4 pl-4 pr-10 w-full h-12"
            />
          </div>
        </form>
      </div>
      <div>
        <button className="py-3 px-6 bg-custom-orange rounded-full text-white">
          CTA here
        </button>
      </div>
      <div className="mt-auto text-custom-gray text-10-px">
        Terms and Conditions | Privacy Policy{" "}
      </div>
    </div>
  );
}
