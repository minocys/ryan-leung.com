import { SocialIcon } from "react-social-icons";

const LinkedIn = (): JSX.Element => (
  <SocialIcon url="https://linkedin.com/in/ryleung" className="linked-in" />
);

const GitHub = (): JSX.Element => (
  <SocialIcon url="https://github.com/minocys" className="github" />
);

const Mail = (): JSX.Element => (
  <SocialIcon url="mailto: contact@ryan-leung.com" className="mail-to" />
);

export { LinkedIn, GitHub, Mail };
