
"use client"

import Sun from '../../assets/images/sunny-day.png'
import Moon from '../../assets/images/half-moon.png'
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Props {
    className?: string;
}
const ThemeSwitcher: React.FC<Props> = ({className}:Props) => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const isActive = theme === "light";

    const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full'

        } transition-all duration-500 ease-in-out`;

    return (

            <button  onClick={toggleTheme} className={switchClasses}>
                {isActive ? <Image className={className || undefined}  src={Sun} alt='Light mode icon switcher' /> :  <Image className={className || undefined} src={Moon} alt='dark mode icon switcher' />}
            </button>

    )
};

export default ThemeSwitcher;