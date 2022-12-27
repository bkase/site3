'use client';

export default function GameboyView({ gameSrc, children }: {gameSrc: string, children: React.ReactNode}) {
  return (
    <div className="">
      <figure className="">
        <iframe
          className="h-80 w-80"
          src={gameSrc}
        />
        <div className="">
          <figcaption className="">{children}</figcaption>
        </div>
      </figure>
    </div>
  )
}
