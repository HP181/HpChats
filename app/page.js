"use client"

import Image from "next/image";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import data from "@/components/data";

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col p-4">
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

<div>
  <p className="text-center">Chat App</p>

  <div className="">
    {data.map((ids) => (
     <div key={ids.id} className={`flex w-full   bg-slate-300 ${ids.type === "left" ? "justify-start" : "justify-end"}`}>
      <p className={`max-w-60 ${ids.type === "left" ? "bg-cyan-500" : "bg-rose-600"}`}>id : {ids.id} and message : {ids.message}, type : {ids.type}</p>
      </div>
    ))}



  </div>
</div>


    </main>
  );
}
