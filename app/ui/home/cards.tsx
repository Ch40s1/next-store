import Link from "next/link";

export default function Cards({
  backgroundUrl,
  categoryName,
  imageLink,
}: {
  backgroundUrl: string;
  categoryName: string;
  imageLink: string;
}) {
  return (
    <Link href={imageLink}>
      <div
        className={`${backgroundUrl} bg-cover w-[31rem] h-[20rem] flex justify-center items-center`}
      >
        <div className="bg-white w-[10rem] h-[5rem] flex justify-center items-center border-black border-2 bg-opacity-50">
          <h1>{categoryName}</h1>
        </div>
      </div>
    </Link>
  );
}
