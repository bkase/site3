import CopyLink from "./CopyLink";
import Image from 'next/image';
import Link from 'next/link';

import brandonJacket from '../public/brandon-jacket.jpeg';

export default function AboutMe() {
  return (
    <>
      <div className="flex py-4 justify-center items-center -ml-0.25">
        <Link className="inline-block shrink-0" href="/">
          <Image className="inline-block rounded-full ring-2 ring-navy mr-4" alt="Picture of brandon" width={96} height={96} src={brandonJacket} />
        </Link>
        <p className="inline-block font-friendly text-xl leading-snug text-black"> 👋 I'm Brandon Kase, a peripatetic pupil of typed FP&nbsp;👨‍💻 (&#8288;and eating food 🍴&#8288;🍜&#8288;)&#8288;. I&nbsp;make zk tools 🔨⚡️ at <CopyLink href="https://o1labs.org">O(1)&nbsp;Labs</CopyLink> for <CopyLink href="https://minaprotocol.com">Mina&nbsp;Protocol</CopyLink>&nbsp;🪶&#8288;.
        </p>
      </div>
    </>
  )
}
