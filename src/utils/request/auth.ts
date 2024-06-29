import {supabase} from '../../supabase/client'
import { userType } from '../types';

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
   } catch (error) {
    console.log(error)
   }
}