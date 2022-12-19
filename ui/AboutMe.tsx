import CopyLink from "./CopyLink";
import Image from 'next/image';

import brandonJacket from '../public/brandon-jacket.jpeg';

export default function AboutMe() {
  return (
    <>
      <div className="flex py-8 justify-center items-center -ml-2">
        <Image className="inline-block rounded-full ring-2 ring-navy mr-4 shrink-0" alt="Picture of brandon" width={192} height={192} src={brandonJacket} />
        <p className="inline-block font-friendly text-4xl leading-snug text-black"> 👋 I'm Brandon Kase, a peripatetic pupil of typed FP&nbsp;👨‍💻 (&#8288;and eating food 🍴&#8288;🍜&#8288;)&#8288;. I&nbsp;make zk tools 🔨⚡️ at <CopyLink href="https://o1labs.org">O(1)&nbsp;Labs</CopyLink> for <CopyLink href="https://minaprotocol.com">Mina&nbsp;Protocol</CopyLink>&nbsp;🪶&#8288;.
        </p>
      </div>
    </>
  )
}
