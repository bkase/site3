import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <div className="flex">
        <div className="flex-initial mr-4">
          <img className="inline-block h-44 w-44 rounded-full ring-2 ring-white" alt="Picture of brandon" src="/bkase-avatar-cartoon.jpeg" />
        </div>
        <div>
          <p className="font-copy text-3xl leading-none"> Hi! I'm Brandon Kase, a permanentaly peripatetic pupil of typed functional programming (and eating good food). I build zk tools at <Link href="https://o1labs.org">O(1) Labs</Link> targeting <Link href="https://minaprotocol.com">Mina Protocol</Link>. Dm me on <Link href="https://twitter.com/bkase_">twitter @bkase_</Link>. I use <Link href="https://github.com/bkase"> github @bkase </Link> to build stuff. </p>
        </div>
      </div>
    </>
  )
}
