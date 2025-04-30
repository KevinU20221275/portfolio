export function ThemeButton({ theme, changeTheme} : { theme: string, changeTheme: (theme: string) => void }) {
    return (
        <button  
            className="py-2 px-4 rounded-md hover:bg-zinc-200 dark:hover:bg-dark-surface"
            onClick={() => changeTheme(theme)}>
            {theme == 'light' ? 'Light' : theme == 'dark' ? 'Dark' : 'System'}
        </button>
    )
}