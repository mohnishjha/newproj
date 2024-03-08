import Image from "next/image";

const Logo = () => {
  return (
    <Image alt="logo" src={'/banner.png'} width={'200'} height={'200'} className="bg-black sm:w-20 md:w-28 lg:w-40"/>
  );
};

export default Logo;
