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

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              width={256} // Matches Tailwind w-64
              height={192} // Matches Tailwind h-48
            />
          </div>
        ))}
      </div>
      <div className="flex p-4 text-3xl">Hello (Website in progress...)</div>
    </main>
  );
}
