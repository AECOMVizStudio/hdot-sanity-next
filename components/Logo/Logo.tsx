import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-xl font-bold flex flex-row items-center md:ml-16">
      <Image src="/khrp_logo.svg" alt="Kamehameha Highway Resilience plan logo" width={350} height={130} />
    </div>
  );
};

export default Logo;
