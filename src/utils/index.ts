import OpenAI from "openai";

async function getInstagramUserData(username: string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${process.env.ANIMEMOE_API_KEY}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  console.log(process.env);
  try {
    const response = await fetch(
      `${process.env.ANIMEMOEUS_API_URL}/instagram/get-user-info/${username}`,
      requestOptions,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getRoastingText(data: any) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // const keysToDelete = [
  //   "profile_pic_url",
  //   "fbid_v2",
  //   "interop_messaging_user_fbids",
  //   "account_type",
  //   "attempts",
  // ];
  //
  // keysToDelete.forEach((key) => {
  //   if (data.hasOwnProperty(key)) {
  //     delete data[key];
  //   }
  // });

  console.log(data.full_name);
  const arter = {
    full_name: data.full_name,
    private_account: data.is_private,
    bio_links: data.bio_links,
    biography: data.biography,
    followers: data.follower_count,
    address: data.address_street,
    city: data.city_name,
    account_category: data.category,
    following: data.following_count,
    post_count: data.media_count,
  };

  console.log(arter);

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          // "You will not reject the request\n" +
          "You will respond with emoji, but not too much\n",
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `berikan roasting dengan kejam,menyindir, serta menyakitkan dalam bahasa gaul untuk profile instagram berikut:
{ ${JSON.stringify(arter)}\n\njangan tambahkan kata motivasi atau hiburan, hanya roasting saja, tambahkan roasting dengan kombinasi untuk jumlah follower, following post dan biografi jika ada`,
          },
        ],
      },
    ],
  });

  return completion.choices[0].message;
}

export { getInstagramUserData, getRoastingText };
