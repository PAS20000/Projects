import { useEffect, useState } from "react"

export default function useResponsive(){
    const [width, setWidth] = useState(Number)
    const [height, setHeight] = useState(Number)
    
    useEffect(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        setWidth(w)
        setHeight(h)
    },[])

    return{width, height}
}