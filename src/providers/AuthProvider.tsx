"use client"
import { errorToast } from '@/utils/Toaster/toast';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState, PropsWithChildren } from 'react'

const AuthProvider = ({children}: PropsWithChildren) => {
    const router = useRouter();
    const [update, setUpdated] = useState(false);

    function pathExistsInUrl(path: string) {
        let url = window.location.href;
        const urlObj = new URL(url);
        return urlObj.pathname.includes(path);
    }

    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(!token){
            router.push("/login")
            errorToast('You are not Authorized')
        }
        else if(pathExistsInUrl("/login")){
            router.push("/")
        }
        else if(pathExistsInUrl("/signup")){
            router.push("/")
        }
        setUpdated(true)
    }, [])

  return (
    <>
        {update && children}
    </>
  )
}

export default AuthProvider