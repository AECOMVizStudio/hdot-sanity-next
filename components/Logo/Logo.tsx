import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-xl font-bold flex flex-row items-center">
      <Image src="/hdot.svg" alt="HDOT Logo" width={75} height={75} />
      <div className="pl-4">Hawaii Department of Transportation</div>
    </div>
  );
};

export default Logo;
