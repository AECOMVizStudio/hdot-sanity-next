import Image from "next/image";

interface PhotoGalleryProps {
  images: { asset: { url: string } }[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  if (!images || images.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={image.asset.url}
            alt={`Gallery Image ${index + 1}`}
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
