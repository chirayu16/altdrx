"use client";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Hero() {
  const [inputValue, setInputValue] = useState<string>("");

  const isValidEmail = ():boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="flex gap-8">
      <Image src="/logos/HeroImg.png" alt="hero" width={554} height={550} />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8  justify-center items-start font-inter text-6xl font-semibold leading-10 tracking-normal text-left ">
          <div className="flex gap-3 py-5 font-inter">
            <div>Refer a friend,</div>
            <div className="text-custom-orange">earn</div>
          </div>
          <div className="text-custom-orange">rewards points</div>
        </div>
        <div className="font-inter text-base font-normal text-custom-gray leading-6">
          Spread the word through email or WhatsApp and watch your earnings
          soar, up to 50,000* a month.
        </div>
        <div>
          <form className="flex gap-2" onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter an email id"
              className="border border-dark-gray rounded-40-px box-border font-inter text-lg text-dark-gray placeholder:text-dark-gray font-normal leading-7 tracking-normal  py-2 pl-4 pr-2 w-96 h-12 "
            />
            <button
              type="submit"
              className={`px-6 text-base font-medium py-2 border rounded-40-px ${
                isValidEmail()
                  ? "border-custom-orange text-custom-orange"
                  : "border-light-gray text-light-gray"
              }`}
            >
              Send invite
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-inter text-base font-medium leading-6 tracking-normal">
            Whatsapp your referral code
          </div>
          <div>
            <form className="flex gap-2" onSubmit={handleFormSubmit}>
              <div className="relative w-96">
                <input
                  type="text"
                  value="SHDA000012"
                  readOnly
                  className="border border-dark-gray rounded-40-px box-border font-inter text-lg text-dark-gray placeholder:text-dark-gray font-normal leading-7 tracking-normal py-2 pl-4 pr-10 w-full h-12"
                />
                <Image
                  src="/logos/copy-01.svg"
                  alt="copy-logo"
                  width={15}
                  height={15}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
              <button
                className="px-6 text-base font-medium py-2 border rounded-40-px border-custom-orange text-custom-orange"
              >
                Send invite
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
