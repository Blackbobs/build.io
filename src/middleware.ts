import { NextRequest } from "next/server";
import { getCurrentLoggedInUser } from "./utils/request/auth";

export default async function middleware(request: NextRequest){
    const user = await getCurrentLoggedInUser()
    // let token = localStorage.getItem("token");
    if(!user){
        // console.log('This user is not Authenticated')
    }
}