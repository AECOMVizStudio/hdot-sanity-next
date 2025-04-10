import Image from 'next/image';

const FooterLogos = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row'>
        <Image
          src={'/hdot_logo.svg'}
          width={100}
          height={100}
          alt='Hawaii Department of Transportation Logo'
          className=''
          priority={false}
        />
        <Image
          src={'/KHRP_badge.svg'}
          width={110}
          height={110}
          alt='Kamehameha Highway Resilience Plan Logo'
          className=''
          priority={false}
        />
      </div>
      <p className='py-8'>Copyright © {getCurrentYear()} AECOM</p>
    </div>
  );
};

export default FooterLogos;
