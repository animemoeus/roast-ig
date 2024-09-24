import { useEffect } from "react";

async function getInstagramUserData(username: string,recaptchaToken:string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${process.env.ANIMEMOE_API_KEY}`);

  console.log(username,recaptchaToken)
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };


  try {
    console.log(recaptchaToken)
    const response = await fetch(
      `https://api.animemoe.us/instagram/roasting/${username}/?captcha=${recaptchaToken}`,
      requestOptions,
    );
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export { getInstagramUserData};
