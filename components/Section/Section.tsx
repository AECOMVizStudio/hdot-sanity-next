import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableTextBlock } from 'next-sanity';

// components
import Button from '@/components/Button/Button';

interface SectionProps {
  title: string;
  imageIsOnRight: boolean;
  isTimeline?: boolean;
  isIcon?: boolean;
  content: PortableTextBlock[];
  imageSrc: string;
  altText: string;
  buttonText?: string;
  buttonLink?: string;
}

const Section = ({
  title,
  content,
  imageIsOnRight,
  isTimeline,
  isIcon,
  imageSrc,
  altText,
  buttonText,
  buttonLink,
}: SectionProps) => {
  if (isTimeline === true) {
    return (
      <div className='w-full flex flex-col justify-center items-center py-12 bg-hdotBgAqua shadow-lg'>
        <div className='w-full md:w-1/2 text-center md:text-left p-4'>
          <h2 className='text-3xl font-semibold text-hdotTeal mb-4'>{title}</h2>
          <hr className='border-t-2 border-hdotTeal my-4 w-full md:w-1/2' />
          {/* <div className="text-hdotHoverTeal text-lg">{children}</div> */}
        </div>
        <div className='md:text-left '></div>
        <Image
          src={imageSrc}
          alt={altText}
          width={1500}
          height={400}
          className='w-full'
        />
      </div>
    );
  } else {
    return (
      <section className='my-8 p-8'>
        <div
          className={`flex flex-col md:flex-row items-center justify-center ${
            imageIsOnRight
              ? 'flex-col items-center md:flex-row'
              : 'flex-col items-center md:flex-row-reverse'
          }`}
        >
          {/* Content Section */}
          <div className='w-full md:w-1/2 lg:w-1/3 text-center md:text-left p-4'>
            <h2 className='text-3xl font-semibold text-hdotTeal mb-4'>
              {title}
            </h2>
            <hr className='border-t-2 border-hdotTeal my-4 w-full md:w-1/2' />
            <div className='flex flex-col space-y-4'>
              <div className='text-hdotHoverTeal text-lg'>
                <PortableText value={content} />
              </div>
              {buttonText && buttonLink && (
                <Link href={buttonLink} className=''>
                  <Button>{buttonText}</Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className='w-full md:w-1/2 lg:w-2/3 p-4 items-center justify-center flex'>
            <Image
              src={imageSrc}
              alt={altText}
              width={isIcon ? 250 : 700} // Smaller if isIcon is true
              height={isIcon ? 250 : 400}
              className=''
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Section;
