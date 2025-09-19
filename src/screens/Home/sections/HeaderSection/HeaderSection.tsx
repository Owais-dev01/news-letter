import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigationItems = [
    { label: "Newsletter", href: "#" },
    { label: "Podcast", href: "#" },
    { label: "Start Here", href: "#" },
  ];

  return (
    <header
      className={
        `sticky z-50 bg-white flex ml-40 mr-40 flex-1 max-h-[70.5px] max-w-screen-xl w-[1280px] items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out ` +
        (scrolled
          ? "top-6 rounded-[3rem]"
          : "top-0")
      }
    >
      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <img
          className="relative w-100 max-w-20"
          alt="Background shadow"
          src="/background-shadow.png"
        />

        <div className="inline-flex items-baseline gap-2 relative flex-[0_0_auto]">
          <div className="text-slate-900 leading-[17px] relative flex items-center justify-center w-fit mt-[-1.00px] random font-medium text-[17px] tracking-[-0.43px] whitespace-nowrap">
            wandering
          </div>

          <div className="text-slate-500 leading-[17px] relative flex items-center justify-center w-fit mt-[-1.00px] random font-medium text-[17px] tracking-[-0.43px] whitespace-nowrap">
            aimfully
          </div>
        </div>
      </div>

      <nav className="relative flex items-center gap-8">
        <NavigationMenu className="relative flex items-center gap-8">
          <NavigationMenuList className="flex items-center gap-4">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem
                key={item.label}
              // className=""
              >
                <a
                  href={item.href}
                  className="font-medium text-slate-700 text-[15px] leading-[22.5px] relative flex items-center justify-center w-fit mt-[-1.00px] random tracking-[0] whitespace-nowrap"
                >
                  {item.label}
                </a>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="relative w-[88.2px] h-[22.5px] bg-transparent border-none p-0 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                <div className="font-medium text-slate-700 text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap flex items-center justify-center random">
                  Products
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4">
                  <p className="text-sm text-slate-600" style={{ right: 0 }}>
                    Products menu content
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="flex items-center gap-2 bg-amber-400 rounded-full overflow-hidden shadow-[0px_10px_20px_-10px_#fbbf24cc,0px_0px_0px_1px_#0000000d] hover:bg-amber-500 border-none">
          <img className="h-4 w-4 ml-4" alt="Svg" src="/svg-8.svg" />
          <span className="flex items-center justify-center mt-[-1.5px] h-[23px] w-[127.57px] random font-normal text-slate-900 text-[15px] tracking-[-0.38px] leading-[22.5px] whitespace-nowrap">
            Improve Launches
          </span>
        </Button>
      </nav>
    </header>
  );
};
