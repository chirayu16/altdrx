import Image from 'next/image'; 
export default function MiddleButton({ text, logo, className = ''  }) {
    return(
        <button
      className={`flex justify-center items-center  box-border ${className}`}
    >
            <span>{text}</span>
            {logo && (
                    <Image src={logo} alt={`${text} logo`} width={36} height={36} />
                )}
        </button>
    )
}