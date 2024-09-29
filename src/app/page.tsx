"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import Header from "@/sections/header";
import Footer from "@/components/footer";
import Community from "@/sections/roasting";
export default function Page() {
  const [usename, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [roastingResult, setRoastingResult] = useState(null);

  const { toast } = useToast();

  const handleUsernameChange = (e: string) => {
    setUsername(e);
    console.log(e);
  };

  const handleRoasting = () => {
    if (!usename) {
      toast({
        title: "(╯‵□′)╯︵┻━┻",
        description: "Username ga boleh kosong ya!",
        action: (
          <ToastAction altText="Goto schedule to undo">Okeii</ToastAction>
        ),
      });
      return;
    }

    fetch(`https://api.animemoe.us/instagram/roasting/${usename}?captcha`);
  };

  return (
    <div className={"min-h-screen"}>
      <Header
        handleRoasting={handleRoasting}
        handleUsernameChange={handleUsernameChange}
      />
      <Community />

      <div className={""}>
        <Footer />
      </div>
    </div>
  );
}
