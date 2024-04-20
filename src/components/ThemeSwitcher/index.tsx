
"use client"

import Sun from '../../assets/images/sun.png'
import Moon from '../../assets/images/moon.png'
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitcher: React.FC = () => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const isActive = theme === "light";

    const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform ${isActive ? 'translate-x-0' : 'translate-x-6'

        } transition-transform duration-500 ease-in-out`;

    return (

        <div className="relative w-14 h-8 rounded-full p-1 cursor-pointer bg-gray-200" onClick={toggleTheme}>
            <button className={switchClasses}>
                {isActive ? <Image src={Sun} alt='Light mode icon switcher' /> :  <Image src={Moon} alt='dark mode icon switcher' />}
            </button>
        </div>

    )
};

export default ThemeSwitcher;