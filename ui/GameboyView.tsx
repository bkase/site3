'use client';

export default function GameboyView({ gameSrc, children }: {gameSrc: string, children: React.ReactNode}) {
  return (
    <div className="">
      <figure className="">
        <iframe
          className="h-80 w-80"
          src={gameSrc}
        />
        <div className="mb-6">
          <figcaption className="flex before:content-['.'] before:inline-block before:w-4 before:mr-3 before:bg-lightgrey">{children}</figcaption>
        </div>
      </figure>
    </div>
  )
}
