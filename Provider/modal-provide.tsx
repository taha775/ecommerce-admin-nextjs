"use client"

import { Storemodal } from "@/components/modals/store-modal"


import {useState,useEffect} from "react"



export const ModalProvide =()=>{
    const [isMounted,setIsmounted] = useState(false)

    useEffect(()=>{
        setIsmounted(true)        
    },[])


    if(!isMounted){
        return null
    }


    return(
        <>
        
        <Storemodal/>
        </>
        
    )




}