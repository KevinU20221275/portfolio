import { useEffect, useState } from 'react'
import { THEMES, ICONS } from '../constants/themes'

export function useToggleTheme(){
    const [darkMode, setDarkMode] = useState(true)
    const [icon, setCurrentIcon] = useState(ICONS.MOON)
 

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        changeTheme(savedTheme || THEMES.SYSTEM)
    }, [])

    useEffect(() => {
        if (darkMode){
            document.body.classList.add(THEMES.DARK)
            localStorage.setItem('theme', THEMES.DARK)
        } else {
            document.body.classList.remove(THEMES.DARK)
            localStorage.setItem('theme', THEMES.LIGHT)
        }
    }, [darkMode])

    const changeTheme = (theme) => {
        if (theme === THEMES.DARK){
            setDarkMode(true)
            localStorage.setItem('theme', THEMES.DARK)
            setCurrentIcon(ICONS.MOON)
        } else if (theme === THEMES.LIGHT){
            setDarkMode(false)
            localStorage.setItem('theme', THEMES.LIGHT)
            setCurrentIcon(ICONS.SUN)
        } else {
            localStorage.removeItem('theme')
            const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(isDark)
            setCurrentIcon(ICONS.SYSTEM)
        }
    }

    return {  icon, changeTheme };
}

