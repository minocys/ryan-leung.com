import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { MdOutlineStickyNote2 } from "react-icons/md";

const LinkedIn = (): JSX.Element => (
  <SocialIcon url="https://linkedin.com/in/ryleung" className="linked-in" />
);

const GitHub = (): JSX.Element => (
  <SocialIcon url="https://github.com/minocys" className="github" />
);

const Mail = (): JSX.Element => (
  <SocialIcon url="mailto: contact@ryan-leung.com" className="mail-to" />
);

const Notes = (): JSX.Element => (
  <Link href="/notes">
    <a>
      <MdOutlineStickyNote2 size={56} />
    </a>
  </Link>
);

export { LinkedIn, GitHub, Mail, Notes };
