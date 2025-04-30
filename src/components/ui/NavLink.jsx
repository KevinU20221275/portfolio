export function NavLink({ className, href, label, currentSection }){
    const isActive = currentSection === href.replace("#", "");
    
    return (
        <li className={`nav__item ${className}`}>
            <a href={href} className={`nav__link ${isActive && 'text-light-textPrimary dark:text-dark-textPrimary'} py-2 px-3  hover:text-light-textPrimary dark:hover:text-dark-textPrimary`}>
                {label}
            </a>
        </li>
    )
}