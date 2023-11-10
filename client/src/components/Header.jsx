import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { SideBar } from './SideBar';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LangSelect } from './LangSelect';
const language = [
    { label: 'English', flag: '🇺🇸' },
    { label: 'French', flag: '🇫🇷' },
    { label: 'Germany', flag: '🇩🇪' },
    { label: 'Arabic', flag: '🇦🇪' }
];
export const Header = () => {
    const [enabled, setEnabled] = useState(false);
    const [selected, setSelected] = useState(language[0])
    useEffect(()=>{
        console.log("rendered");
    },[])
    return (
        <header className="flex justify-between items-center px-3 shadow fixed top-0 right-0 left-0 h-14 bg-white">

            {/* dark mode switcher */}
            <ThemeSwitcher enabled={enabled} setEnabled={setEnabled} />

            {/* logo container */}
            <div className='flex items-center py-3 gap-1 relative z-10'>
                <Logo className="" style={{ width: "2rem" }} />
                <span className='font-bold'>AI LINGUACHAT</span>
            </div>

            {/* languages selector */}
            <LangSelect language={language} selected={selected} setSelected={setSelected}  />
            
            {/* sideBar for small screens */}
            <SideBar language={language} enabled={enabled} selected={selected} setEnabled={setEnabled} setSelected={setSelected} />
        </header>
    );
};