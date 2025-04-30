import { useState } from "react"
import { System, Light, Dark } from "@icons/ThemeIcons"
import { ThemeButton } from "@ui/ThemeButton"
import { ICONS, THEMES } from "@/constants/themes"
import { useToggleTheme } from "@/hooks/useToggleTheme"

export function ToggleTheme(){
    const [openOptions, setOpenOptions] = useState(false)
    const {icon, changeTheme} = useToggleTheme()

    const handlechangeTheme = (theme: string) => {
        changeTheme(theme)
        setOpenOptions(false)
    }


    return (
        <div className="relative flex items-center">
            {icon === ICONS.MOON && 
                <button onClick={() => setOpenOptions(!openOptions)}>
                    <Dark className={'w-6 h-6 text-black dark:text-white cursor-pointer hover:scale-105 hover:text-light-textPrimary transition-all animate-[show_0.2s_ease-in-out]'}/> 
                </button> 
            }
            {icon === ICONS.SUN && 
                <button onClick={() => setOpenOptions(!openOptions)}>
                    <Light className={'w-6 h-6 text-black dark:text-white cursor-pointer hover:scale-105 hover:text-light-textPrimary transition-all animate-[show_0.2s_ease-in-out]'}/> 
                </button>
            }
            {icon === ICONS.SYSTEM && 
                <button onClick={() => setOpenOptions(!openOptions)}>
                    <System className={'w-6 h-6 text-black dark:text-white cursor-pointer hover:scale-105 hover:text-light-textPrimary transition-all animate-[show_0.2s_ease-in-out]'}/> 
                </button>
            }
            {
                openOptions && 
                <div className="absolute z-50 bg-light-white dark:bg-[#090D23] right-0 top-10 rounded-md p-2 flex flex-col">
                    {
                        Object.entries(THEMES).map(([key, value]) => {
                            return (
                                <ThemeButton key={key} theme={value} changeTheme={handlechangeTheme} />
                            )
                        })
                    }
                </div>
            }

        </div>

    )
}

