"use client";

import { useState } from "react";
import { ReCaptchaProvider, ReCaptcha } from "next-recaptcha-v3";
import { getInstagramUserData } from "@/utils";

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [roastingText, setRoastingText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRoasting = () => {
    if (!username) {
      alert("Username ga boleh kosong anjirr!");
      return;
    }

    setIsLoading(true);
    getInstagramUserData(username, recaptchaToken ?? "")
      .then((result) => {
        setRoastingText(result.roasting_text);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Lahh, error anjirr! Coba lagi ya, hehehe...");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <ReCaptchaProvider reCaptchaKey="6Ldrbk0qAAAAAKBNvSqKUxRd1jnfaXsyo_Is6Eqv">
        <div className="p-4 min-h-screen">
          <div className="mx-auto max-w-lg h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
            <article className="w-full h-full">
              <div className="mb-3 px-4 py-2 text-left h-full">
                <p className="text-base mb-4"></p>

                <h1 className="text-[32px] text-center mb-4">Roasting IG 🗿</h1>

                <div className="flex flex-col sm:flex-row gap-1.5">
                  <input
                    className="basis-9/12 w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
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
                  <ReCaptcha
                    onValidate={(token) => {
                      setRecaptchaToken(token);
                    }}
                    action="page_view"
                  />
                </div>

                <p className="mt-4 text-2xl mb-4">{roastingText}</p>
              </div>
            </article>
          </div>
        </div>
      </ReCaptchaProvider>
    </>
  );
}
