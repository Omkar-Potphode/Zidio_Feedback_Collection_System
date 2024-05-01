import { useLocation } from "react-router-dom";
import { header } from "../constants";
import Button from "./Button";


const Header = () => {

    const pathName = useLocation();

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-gray-200 lg:bg-background/90 lg:backdrop-blur-sm">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 mx-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <span className="text-lg w-[12rem] md:text-3xl">
                    ReviewHub
                </span>
            </a>

            <nav className="hidden fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto bg-transparent">
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {header.map((item) => (
                        <a
                        key={item.id}
                        href={item.url}
                        className={`block relative font-code text-2xl uppercase text-background transition-colors hover:text-text
                        ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold
                        ${item.url === pathName.hash ? "z-2 lg:text-text" : "lg:text-gray-200/30"}`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </nav>

            <a href="#signup"
            className="button hidden mr-8 text-gray-200/50 transition-colors hover:text-primary lg:block"
            >
                New account
            </a>

            <Button className="hidden lg:flex" href="#login">
                Sign in
            </Button>
        </div>
    </div>
    </>
  )
}

export default Header;