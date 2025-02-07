'use server'


import { cookies } from "next/headers"

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    const cookieStore = cookies();
    (await cookieStore).set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
    (await cookieStore).set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/'
    });
    (await cookieStore).set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
}

export async function resetAuthCookies() {
    const cookieStore = cookies();
    (await cookieStore).delete('session_userid');
    (await cookieStore).delete('session_access_token');
    (await cookieStore).delete('session_refresh_token');
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
  