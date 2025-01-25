import Link from "next/link";
import Image from 'next/image';

const mockUrls = [
  "https://elzt6v0s8u.ufs.sh/f/uFA2HmJ0tS5pClnMw0WihDOqFQUb8VvsMdGXnpuSWTZlYBJH",
  "https://elzt6v0s8u.ufs.sh/f/uFA2HmJ0tS5p5hLJHc3nJrIEXU2C3oekhjpObKZYlGfLvDiV",
  "https://elzt6v0s8u.ufs.sh/f/uFA2HmJ0tS5pOTmABEphCLsj9M04xFg2nr7ReWmtPTNSEDkl",
  "https://elzt6v0s8u.ufs.sh/f/uFA2HmJ0tS5pbwhKEOeeJgHDFutL3hzR5q4do9SGvm20Ysr1",
  "https://elzt6v0s8u.ufs.sh/f/uFA2HmJ0tS5p0oYH0TxO3dKLiTeqrAYIB640hUEgJbVvNGmM",
  "https://elzt6v0s8u.ufs.sh/f/uFA2HmJ0tS5pJWrHGtaE4WqhCOI52pUewXSloRYrk7Qz0Gbx"
]

// Generate unique IDs for all copies
const createImageSet = (urls: string[], copies: number) => 
  Array(copies).fill(null).flatMap((_, copyIndex) =>
    urls.map((url, idx) => ({
      id: `${copyIndex + 1}-${idx + 1}`,
      url,
    }))
  );

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {createImageSet(mockUrls, 3).map((image) => (
          <div key={image.id} className="w-48 p-4">
            <Image
              src={image.url}
              alt={`Gallery Image ${image.id}`}
              width={256}
              height={192}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="flex p-4 text-3xl"> Thank you for visiting! (Website in progress...)</div>
    </main>
  );
}
