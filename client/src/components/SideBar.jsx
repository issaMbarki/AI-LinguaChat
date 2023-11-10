import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { classNames } from '../utils/classNames'
import { ThemeSwitcher } from "./ThemeSwitcher"
import { LangSelect } from "./LangSelect"

export const SideBar = ({ enabled, setEnabled, language, selected, setSelected }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="block sm:hidden">
            {/* menu icon for small screens */}
            <div className="relative z-10" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <XMarkIcon style={{ width: "2rem" }} className={classNames("sm:hidden menu-icon",
                )}

                /> : <Bars3Icon style={{ width: "2rem" }} className={classNames("sm:hidden menu-icon",
                )}
                />}
            </div>


            {/* side bar */}
            <div className={classNames("fixed flex flex-col gap-6 divide-y-2 bg-white pt-20 right-0 top-0 h-screen transition-all duration-300 ",
                menuOpen ? "w-screen px-4" : "w-0")}>
                {/* dark mode switcher */}
                <div className="flex justify-between items-center">
                    <span className=" text-sm font-normal leading-4 text-gray-500">
                        Dark mode
                    </span>
                    <ThemeSwitcher enabled={enabled} setEnabled={setEnabled} show={true} />
                </div>

                {/* languages selector */}
                <div className="pt-2 flex justify-between items-center">
                    <span className=" text-sm font-normal leading-4 text-gray-500">
                        language
                    </span>
                    <LangSelect language={language} selected={selected} setSelected={setSelected} show={true} />
                </div>

            </div>
        </div>
    )
}
