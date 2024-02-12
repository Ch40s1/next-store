import Link from "next/link";
import Image from "next/image";

export default function Cards({
  backgroundUrl,
  categoryName,
  imageLink,
}: {
  backgroundUrl: any;
  categoryName: string;
  imageLink: string;
}) {
  return (
    <Link href={imageLink}>
      <div className="w-[27rem] h-[20rem]">
        <div className="relative rounded-lg border-2 overflow-hidden w-full h-full">
          <Image
            src={backgroundUrl}
            alt={categoryName}
            className="rounded-lg object-cover"
            layout="fill"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-2xl font-bold z-10">{categoryName}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
