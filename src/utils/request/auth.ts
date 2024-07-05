import {supabase} from '../../supabase/client'
import { userType } from '../types';
import { successToast, errorToast } from '../Toaster/toast';

export async function createUser(data: userType) {
    const {email, password} =  data;
   try {
    const { data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options:{
            emailRedirectTo: 'http://localhost:3000'
        }
    })
    console.log(data, error)
    return {data, error}
   } catch (error) {
    // errorToast(error)
    console.log(error)
   }
}

export async function login(data: userType) {
    const {email, password} = data;
    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password : password,
        })
        console.log(data, error)
        return{data, error}
    } catch (error) {
        console.log(error)
    }
}

export async function resetPassword(email: string){
    try {
        const response = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: '/update-password'
        })
        return response
    } catch (error) {
        console.log(error)
    }
} 

export async function updatePassword(password: string){
    try {
       const response = await supabase.auth.updateUser({password})
       return response
    } catch (error) {
        console.log(error)
    }
}

export async function logout(){
    try {
        const {error} = await supabase.auth.signOut({scope: 'local'})
        return error
    } catch (error) {
        console.log(error)
    }
}