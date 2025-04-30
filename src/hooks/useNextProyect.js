import { useState, useEffect } from "react";


export function useNextProyect(){
    const [currentPage, setCurrentPage] = useState('/')
    const [nextProject, setNextproject] = useState(null)

      useEffect(() => {
        const currentPath = window.location.pathname
        setCurrentPage(currentPath)

        if (currentPath !== "/"){
            const currentProject = currentPath.split("/").pop()
            if (currentProject === "4"){
                setNextproject("1")
            } else {
                const next = Number(currentProject) + 1
                setNextproject(next.toLocaleString())
            }
        }
    }, [])


    return {currentPage, nextProject}
}