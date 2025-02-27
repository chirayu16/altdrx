import React from "react";
import Image from "next/image";

export default function Step() {
  return (
    <div className="flex flex-col gap-8 px-14 rounded-[40px] bg-f7-gray mt-40 pt-10 pb-12">
      <div className="font-inter text-lg font-medium leading-7 tracking-normal ">
        01 Sign up & Complete KYC
      </div>
      <div className="flex flex-row gap-8">
        <Image
          src="/logos/Group1522.svg"
          alt="group"
          width={498}
          height={348}
        />
        <div className="flex flex-col gap-4 pt-3">
          <div className="font-inter text-xl font-medium leading-8 tracking-normal ">
            START INVESTING IN FEW STEPS
          </div>
          <div className="font-inter text-40-px font-medium leading-10 tracking-normal text-dark-gray">
            Sign up & Complete KYC
          </div>
          <div className="font-inter text-lg text-custom-gray font-normal leading-7 tracking-normal ">
            Get started with a quick{" "}
            <span className="text-custom-orange">sign-up</span> and{" "}
            <span className="text-custom-orange">KYC verification</span> it’s
            —seamless and secure, ensuring you’re set to explore real estate
            opportunities right away.
          </div>
        </div>
      </div>
    </div>
  );
}
