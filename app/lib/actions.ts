'use server'


import { cookies } from "next/headers"

export async function handleLogin(userId: string, accessToken: string, refreshToken: string){
     (await cookies()).set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });
     (await cookies()).set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 60 minitues
        path: '/'
    });
     (await cookies()).set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });
}


export async function resetAuthCookies() {
    (await cookies()).set('session_userid','');
    (await cookies()).set('session_access_token','');
    (await cookies()).set('session_refresh_token','');
}

//
// Get data
export async function getUserId() {
    const userId = (await cookies()).get("session_userid")?.value;
    return userId ? userId : null;
  }
  //
  //access token 

  export async function getAccessToken(){
    let accessToken = (await cookies()).get('session_access_token')?.value;
    return accessToken;
  }
  