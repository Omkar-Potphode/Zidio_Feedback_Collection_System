import { socials } from "../constants";
import Section from "./Section";


const Footer = () => {
  return (
    <>
    <Section crosses className="!px-0 !py-10 ">
        <footer className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col ml-18 md:ml-20 mt-12">
            <p className="caption text-text">
                © {new Date().getFullYear()}. All rights reserved.
            </p>

            <ul className="flex gap-5 flex-wrap">
                {socials.map((item) => (
                    <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary transition-colors hover:bg-tertiary"
                    >
                        <img src={item.iconUrl} width={16} height={16} alt={item.title}/>
                    </a>
                ))}
            </ul>
        </footer>
    </Section>
    </>
  )
}

export default Footer;