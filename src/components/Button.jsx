import Link from "next/link";

const Button = ({ name }) => {

  return (
    <Link href="https://www.instagram.com/thecodebreakers/" target="_blank" rel="noopener noreferrer">
      <button className="bg-white text-black font-bold rounded-[4rem] px-[1.6rem] py-[0.7rem] hover:scale-105 max-lg:active:scale-95 transition-all ease-linear duration-100 cursor-pointer shadow-[0px_0px_15px_1px_rgba(255,255,255,0.25)] font-['Montserrat'] max-lg:touch-manipulation max-lg:min-h-[44px] max-lg:px-5 max-lg:py-2.5 max-lg:text-sm">
        {name}
      </button>
    </Link>
  );
};

export default Button;
