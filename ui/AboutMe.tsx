'use client';

import CopyLink from './CopyLink';
import Image from 'next/image';
import Link from 'next/link';

import brandonJacket from '../public/brandon-jacket.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  const social = (
    <div className="mt-2 flex w-full justify-center text-xs md:mt-4 md:justify-start md:text-sm lg:mt-6 lg:text-lg">
      <Link href="https://twitter.com/bkase_">
        <span className="inline-block px-2 text-navy hover:text-green md:px-0">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </span>
      </Link>

      <Link href="http://github.com/bkase">
        <span className="inline-block px-2 text-navy hover:text-green md:ml-4 md:px-0 lg:ml-6">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </span>
      </Link>
    </div>
  );

  return (
    <>
      <div className="-ml-0.25 flex items-center py-4">
        <div className="mr-4 inline-block shrink-0 md:mr-6 lg:mr-8">
          <div className="h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48">
            <Link className="" href="/">
              <Image
                className="inline-block rounded-full ring-2 ring-navy"
                alt="Picture of brandon"
                width={192}
                height={192}
                src={brandonJacket}
              />
            </Link>
          </div>
          <div className="inline-block w-full md:hidden">{social}</div>
        </div>
        <div>
          <p className="inline-block max-w-3xl font-friendly text-xl leading-snug text-black md:text-2xl lg:text-4xl">
            👋 I'm Brandon Kase, a peripatetic pupil of typed FP&nbsp;👨‍💻
            (&#8288;and eating food 🍴&#8288;🍜&#8288;)&#8288;. I&nbsp;do
            agentic engineering 🔨⚡️.
          </p>
          <div className="hidden md:inline-block">{social}</div>
        </div>
      </div>
    </>
  );
}
