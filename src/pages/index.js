import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <h2 className=" text-[25px] ">Demo</h2>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger
            className="bg-primary text-primary-foreground"
            value="account"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            className="bg-primary text-primary-foreground"
            value="password"
          >
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <div>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>
            <input type="text" />
            <select>
              <option>demo</option>
            </select>
          </PopoverContent>
        </Popover>

        <Button
          className="bg-primary text-primary-foreground"
          default="secondary"
          size={""}
        >
          Button
        </Button>
      </div>
    </main>
  );
}
