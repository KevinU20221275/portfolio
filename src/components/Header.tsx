import { useNextProyect } from "@hooks/useNextProyect"
import { ToggleTheme } from "@components/ToggleTheme"
import { useCurrentSection } from "@/hooks/useCurrentSection"
import { NavLink } from "@ui/NavLink"

export function Header(){
    const {currentPage, nextProject} = useNextProyect()
    const { currentSection } = useCurrentSection()

    return (
        <header className="flex w-full h-16 fixed left-0 bg-transparent right-0  z-50">
            <nav className="flex items-center justify-center backdrop-blur-[10px] px-5 rounded-full mx-auto mt-2 bg-light-white/40 dark:bg-transparent">
                <ul className="flex justify-between items-center relative font-semibold ">
                    {currentPage !== "/" ? 
                    <>
                        <NavLink className={'nav__item--home'} currentSection={'null'} href={'/'} label={'Home'} />
                        <NavLink className={'nav__item--next-project'} currentSection={currentSection} href={`/projects/${nextProject}`} label={'Next Project'} />
                    </>
                    : (
                        <>
                            <NavLink className={''} currentSection={currentSection} href={'#projects'} label={'Projects'} />
                            <NavLink className={''} currentSection={currentSection} href={'#education'} label={'Education'} />
                            <NavLink className={''} currentSection={currentSection} href={'#about'} label={'About'} />
                            <NavLink className={''} currentSection={currentSection} href={'#contact'} label={'Contact'} />
                        </>
                    )
                    }
                    <span className="nav__link--bg absolute h-8 rounded-md bg-[#EEE3FF] dark:bg-white/20"></span>
                </ul>
                <ToggleTheme />
            </nav>
        </header>
    )    
}


