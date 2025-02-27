import React from "react";
import Image from "next/image";

export default function div() {
    const socialLogos = [
        { src: '/logos/fb.svg', alt: 'Facebook', href: 'https://facebook.com' },
        { src: '/logos/insta.svg', alt: 'Instagram', href: 'https://instagram.com' },
        { src: '/logos/yt.svg', alt: 'YouTube', href: 'https://youtube.com' },
        { src: '/logos/x.svg', alt: 'X', href: 'https://x.com' },
      ];
  return (
    <div className="flex flex-col gap-10">
      <div className="text-white font-normal text-sm font-inter flex flex-row gap-6 ">
        <div className="flex flex-col gap-6 w-56">
          <div className="text-xs">INFO</div>
          <div className="flex flex-col gap-1">
            <div>Company</div>
            <div>Opportunities</div>
            <div>MIP</div>
            <div>FAQ</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-56 justify-start">
          <div className="text-xs">ABOUT US</div>
          <div className="flex flex-col gap-1">
            <div>About Us</div>
            <div>How it Works</div>
            <div>Contacts</div>
            <div>Blogs</div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-start">
          <Image
            src="/logos/mainlogo.svg"
            alt="logo"
            width={160}
            height={22}
          ></Image>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-56 justify-start text-white font-normal text-sm font-inter">
        <div className="text-xs">CONTACT US</div>
        <div className="flex flex-col gap-1">
          <div>+91 1234567890</div>
          <div>hello@logoipsum.com</div>
          <div>India</div>
        </div>
      </div>
      <div>
        <div className="text-xs">SUBSCRIPTION</div>
        <div>
          <form className="flex gap-2">
            <div className="w-full">
              <input
                type="text"
                value=""
                placeholder="E-mail"
                readOnly
                className="border border-dark-gray rounded-40-px box-border font-inter text-lg text-dark-gray placeholder:text-dark-gray font-normal leading-7 tracking-normal py-2 pl-4  w-full h-12"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="font-normal text-10-px font-inter text-very-light-gray">
        Disclaimer - *Alt DRX is a platform facilitating access to real estate
        investment opportunities. We are not a registered broker-dealer or
        investment advisor. We do not provide personalized investment advice,
        endorsements, analyses, or recommendations regarding specific
        investments or securities. Investment decisions are ultimately your
        responsibility. We encourage you to conduct thorough due diligence, not
        rely solely on the information presented on this platform, and consider
        seeking professional advice from a financial advisor, attorney, or other
        qualified professional to understand and assess the risks associated
        with any investment opportunity. Alt DRX does not guarantee any specific
        investment performance, outcome, or return of capital for any investment
        opportunity listed on this platform.
      </div>
      <div className="flex flex-row items-end gap-32">
        <div className="flex flex-row gap-3">
            {socialLogos.map((logo, index) => (
            <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-[50px] border"
            >
                <Image src={logo.src} alt={logo.alt} width={16} height={16} />
            </a>
            ))}
        </div>
        <div className="font-normal text-10-px font-inter text-white opacity-40 ml-" >© 2024, ALT DRX. All Rights Reserved</div>
        </div>
    </div>
  );
}
