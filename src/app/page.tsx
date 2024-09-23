"use client";

import { useState, useEffect } from "react";
import { getInstagramUserData, getRoastingText } from "@/utils";

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [roastingText, setRoastingText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRoasting = async () => {
    if (!username) return alert("Username gaboleh kosong tod 😾!");

    setIsLoading(true);
    try {
      const userData = await getInstagramUserData(username);
      const roastingData = await getRoastingText(userData);
      setRoastingText(roastingData.content);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <div className="p-3 h-screen">
        <div className="mx-auto h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
          <article className="w-full h-full">
            <div className="px-4 py-2 text-left h-full">
              <p className="text-base mb-4">May 15th, 2023</p>
              <h1 className="text-[32px] mb-4">hmmm...</h1>

              <div className="flex flex-col sm:flex-row gap-1.5">
                <input
                  className="basis-9/12 w-full  border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
                  placeholder="arter_tendean"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <button
                  className="basis-3/12 w-full h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md disabled:opacity-50 disabled:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  onClick={handleRoasting}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Roast! ☠️"}
                </button>
              </div>

              <p className="mt-4 text-2xl mb-4 ">{roastingText}</p>
              {/*<strong>Read More</strong>*/}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
