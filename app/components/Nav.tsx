import Image from "next/image";
import NavButton from "./NavButton";
export default function Nav() {
  return (
    <div className="flex justify-between gap-20">
      <Image src="/logos/logo.svg" alt="logo" width={300} height={25} />
      <div className="flex justify-start gap-8 font-inter font-normal text-lg text-custom-gray">
        <NavButton text="Invest" logo="/logos/arrow-down.svg" />
        <NavButton text="Opportunities" />
        <NavButton
          text="Dashboard"
          className="border border-custom-orange rounded-40-px px-22-px py-0.5 text-base"
        />
      </div>
      <div className="flex gap-3 font-inter font-normal text-lg text-custom-gray">
        <NavButton
          text="Explorer"
          logo="/logos/BadgeAsset.svg"
          className="flex flex-row-reverse gap-1 border border-custom-brown rounded-40-px px-10-px py-0.5 text-custom-brown font-medium "
        />
        <NavButton
          text="200"
          logo="/logos/gold-coin.svg"
          className="flex flex-row-reverse gap-1"
        />
        <NavButton logo="/logos/menu.svg" />
      </div>
    </div>
  );
}
