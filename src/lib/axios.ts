

import axios from "axios";
import { getSession } from "next-auth/react";



export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})


api.interceptors.request.use(async (config) => {
  try{
    const session = await getSession()

    config.headers.Authorization = `Bearer ${session.user.accessToken}`
  }catch(error){
    console.log(error)
  }

  return config
})
