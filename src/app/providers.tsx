"use client";

import { ReCaptchaProvider } from "next-recaptcha-v3";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ReCaptchaProvider reCaptchaKey={"6Ldrbk0qAAAAAKBNvSqKUxRd1jnfaXsyo_Is6Eqv"}>
    {children}
  </ReCaptchaProvider>
);

export default Providers;
