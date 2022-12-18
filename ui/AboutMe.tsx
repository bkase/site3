import CopyLink from "./CopyLink";

export default function AboutMe() {
  return (
    <>
      <div className="flex py-8 justify-center items-center -ml-2">
        <img className="inline-block h-48 w-48 rounded-full ring-2 ring-navy mr-4" alt="Picture of brandon" src="/brandon-jacket.jpeg" />
        <p className="inline-block font-friendly text-4xl leading-snug text-black"> 👋 I'm Brandon Kase, a peripatetic pupil of typed FP&nbsp;👨‍💻 (&#8288;and eating food 🍴&#8288;🍜&#8288;)&#8288;. I&nbsp;make zk tools 🔨⚡️ at <CopyLink href="https://o1labs.org">O(1)&nbsp;Labs</CopyLink> for <CopyLink href="https://minaprotocol.com">Mina&nbsp;Protocol</CopyLink>&nbsp;🪶&#8288;.
        </p>
      </div>
    </>
  )
}
