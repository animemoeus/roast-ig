async function getInstagramUserData(username: string, recaptchaToken: string) {
  console.log(username, recaptchaToken);
  const requestOptions = {
    method: "GET",
  };

  try {
    console.log(recaptchaToken);
    console.log(username, recaptchaToken);
    const response = await fetch(
      `https://api.animemoe.us/instagram/roasting/${username}/?captcha=${recaptchaToken}`,
      requestOptions,
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export { getInstagramUserData };
