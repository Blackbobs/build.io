import {supabase} from '../../supabase/client'
import { FieldValues } from 'react-hook-form';

export async function createUser(data: FieldValues) {
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