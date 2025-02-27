import Image from "next/image";
interface NavButtonProps {
  text?: string;
  logo?: string;
  className?: string;
}
export default function NavButton({
  text,
  logo,
  className = "",
}: NavButtonProps) {
  return (
    <button
      className={`flex justify-center items-center  box-border ${className}`}
    >
      <span>{text}</span>
      {logo && <Image src={logo} alt={`${text} logo`} width={36} height={36} />}
    </button>
  );
}
