import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-xl font-bold flex flex-row items-center">
      <Image src="/hdot.svg" alt="Logo" width={100} height={100} />
      <div className="pl-4">Hawaii Department of Transportation</div>
    </div>
  );
};

export default Logo;
