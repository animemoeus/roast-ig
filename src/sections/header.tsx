import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header({
  handleRoasting,
  handleUsernameChange,
}: {
  handleRoasting: () => void;
  handleUsernameChange: (e: string) => void;
}) {
  return (
    <header className="dark:bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          Instagrammu Siap Kena Roasting? Let's Go!
        </h1>

        <div className={"mt-7 flex flex-col md:flex-row gap-1.5"}>
          <Input
            className="w-full md:w-8/12 p-0 pl-1"
            type="text"
            placeholder="arter_tendean"
            autoComplete={"off"}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />

          <Button
            className={"w-full md:w-4/12"}
            variant={"noShadow"}
            onClick={handleRoasting}
          >
            Roast Me!
          </Button>
        </div>
      </div>
    </header>
  );
}
