import CopyLink from "./CopyLink";
import Image from 'next/image';
import Link from 'next/link';

import brandonJacket from '../public/brandon-jacket.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  const social = (
    <div className="flex justify-center w-full md:justify-start mt-2 md:mt-4 lg:mt-6 text-xs md:text-sm lg:text-lg">
      <Link href="https://twitter.com/bkase_">
        <span className="inline-block px-2 md:px-0 text-navy hover:text-green">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </span>
      </Link>

      <Link href="http://github.com/bkase">
        <span className="inline-block px-2 md:px-0 md:ml-4 lg:ml-6 text-navy hover:text-green">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </span>
      </Link>
    </div>
  );

  return (
    <>
      <div className="flex py-4 items-center -ml-0.25">
        <div className="inline-block shrink-0 mr-4 md:mr-6 lg:mr-8">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
            <Link className="" href="/">
              <Image className="inline-block rounded-full ring-2 ring-navy" alt="Picture of brandon" width={192} height={192} src={brandonJacket} />
            </Link>
          </div>
          <div className="md:hidden inline-block w-full">
          {social}
          </div>
        </div>
        <div>
        <p className="inline-block font-friendly text-xl md:text-2xl lg:text-4xl leading-snug text-black max-w-3xl"> 👋 I'm Brandon Kase, a peripatetic pupil of typed FP&nbsp;👨‍💻 (&#8288;and eating food 🍴&#8288;🍜&#8288;)&#8288;. I&nbsp;make zk tools 🔨⚡️ at <CopyLink href="https://o1labs.org">O(1)&nbsp;Labs</CopyLink> for <CopyLink href="https://minaprotocol.com">Mina&nbsp;Protocol</CopyLink>&nbsp;🪶&#8288;.
        </p>
          <div className="md:inline-block hidden">
          {social}
          </div>
        </div>
      </div>
    </>
  )
}
