"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { useReCaptcha } from "next-recaptcha-v3";

import Header from "@/sections/header";
import Footer from "@/components/footer";
import Roasting from "@/sections/roasting";

type RoastingDataType = {
  full_name: string | null;
  username: string;
  profile_pic_url: string;
  roasting_text: string;
};

export default function Page() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roastingResult, setRoastingResult] = useState<null | RoastingDataType>(
    null,
  );

  const { toast } = useToast();
  const { executeRecaptcha } = useReCaptcha();

  const handleUsernameChange = (e: string) => {
    setUsername(e);
  };

  const handleRoasting = async () => {
    if (!username) {
      toast({
        title: "(╯‵□′)╯︵┻━┻",
        description: "Username ga boleh kosong ya!",
        action: (
          <ToastAction altText="Goto schedule to undo">Okeii</ToastAction>
        ),
      });
      return;
    }

    const captcha = await executeRecaptcha("roasting");
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.animemoe.us/instagram/roasting/${username}?captcha=${captcha}`,
      );

      if (!response.ok) {
        const error = await response.json();
        toast({
          title: "╰（‵□′）╯",
          description: error.error,
        });
        return;
      }

      const data = await response.json();
      setRoastingResult(data);
    } catch (error: unknown | { message: string }) {
      toast({
        title: "Aduhh 😿",
        description: error?.message,
        action: (
          <ToastAction altText="Goto schedule to undo">Okeii</ToastAction>
        ),
      });
    } finally {
      setIsLoading(false);
    }

    console.log(roastingResult);
  };

  return (
    <div
      className={
        "min-h-screen dark:bg-darkBg bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]"
      }
    >
      <Header
        handleRoasting={handleRoasting}
        handleUsernameChange={handleUsernameChange}
        isLoading={isLoading}
      />
      {roastingResult && <Roasting roastingData={roastingResult} />}

      <div className={"sticky top-[100vh]"}>
        <Footer />
      </div>
    </div>
  );
}

export type { RoastingDataType };
