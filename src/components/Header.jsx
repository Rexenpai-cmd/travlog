import { useState } from "react";
import travlog from "../assets/travlog.png";
import { navigation } from "../constants";
import hamburgerMenu from "../assets/svg/hamburger-menu.svg";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
    const pathName = useLocation();

    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        if (menu) {
            setMenu(false);
            enablePageScroll();
        } else {
            setMenu(true);
            disablePageScroll();
        }
    }

    function handleClick() {
        if (!menu) return;

        enablePageScroll();
        setMenu(false);
    }

    return (
        <div className="fixed z-5 top-0 right-0 left-0 w-full flex items-center">
            <div className="px-5 md:px-10 lg:px-20 w-full flex items-center">
                <a href="/">
                    <img
                        src={travlog}
                        alt="Travlog"
                        height={40}
                        width={140}
                        className="py-7.5 cursor-pointer"
                    />
                </a>
                <nav
                    className={`${menu ? "flex" : "hidden"} fixed top-30 z-10 left-0 bottom-0 right-0 lg:flex lg:static lg:mx-auto`}
                >
                    <div className="relative flex items-center m-auto flex-col lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                href={item.url}
                                onClick={() => handleClick()}
                                className={`cursor-pointer hover:text-primart py-5 text-2xl uppercase lg:capitalize lg:py-10 lg:px-5 lg:text-sm font-medium ${item.isMobile && "lg:hidden"} ${item.url === pathName.hash ? "text-text-black" : "text-text-black/50"} lg:leading-5`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <div className="hidden lg:flex items-center justify-end gap-7.5">
                    <a href="" className="text-sm font-medium">
                        Log In
                    </a>
                    <button className="h-12.5 w-28.75 rounded-full flex items-center justify-center text-text-light bg-primart">
                        Sign Up
                    </button>
                </div>
                <button
                    className="ml-auto flex items-center justify-center cursor-pointer lg:hidden"
                    onClick={() => toggleMenu()}
                >
                    <img
                        src={hamburgerMenu}
                        alt="Hmaburger Menu"
                        height={40}
                        width={40}
                    />
                </button>
            </div>
        </div>
    );
};

export default Header;
