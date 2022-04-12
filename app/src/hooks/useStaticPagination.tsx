import { useState } from "react";


export default function useStaticPagination(width: number, finalTv: number, finalDesktop: number, finalCell: number){
    const [Start, setStart] = useState(0)
    const [Page, setPage] = useState(1)
    const [FinalTv, setFinalTv] = useState(finalTv)
    const [FinalDesktop, setFinalDesktop] = useState(finalDesktop)
    const [FinalCell, setFinalCell] = useState(finalCell)

    const nextPage = () => {
        if(width > 500 && width < 1300){
            setStart(Start + finalDesktop), setFinalDesktop(FinalDesktop + finalDesktop), setPage(Page + 1)
        } 
        if(width < 500) {
            setStart(Start + finalCell), setFinalCell(FinalCell + finalCell), setPage(Page + 1)
        } 
        else {
            setStart(Start + finalTv), setFinalTv(FinalTv + finalTv), setPage(Page + 1)
        }
    }

    const backPage = () => { 
        if(width > 500 && width < 1300){
            setStart(Start - finalDesktop), setFinalDesktop(FinalDesktop - finalDesktop), setPage(Page - 1)
        } 
        if(width < 500) {
            setStart(Start - finalCell), setFinalCell(FinalCell - finalCell), setPage(Page - 1)
        } 
        else {
            setStart(Start - finalTv), setFinalTv(FinalTv - finalTv), setPage(Page - 1)
        }
    }


    return { nextPage, Page ,backPage, Start, FinalTv, FinalCell, FinalDesktop }
}