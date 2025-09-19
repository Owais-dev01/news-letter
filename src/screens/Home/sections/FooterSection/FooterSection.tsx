import { InstagramIcon, YoutubeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const aboutLinks = ["Member Login", "About Us", "Contact Us", "Now"];

const freeResourcesLinks = [
  "Newsletter",
  "Podcast",
  "Articles",
  "Free Canva\nWhiteboard",
  "Tools We Love",
];

const productsLinks = [
  "WAIM\nUnfiltered",
  "Calm Launch\nFormula",
  "Launch Magic\nAI Prompt\nPack",
];

const socialLinks = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    iconSrc: "/svg-5.svg",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    iconSrc: "/svg.svg",
  },
];

const bottomLinks = [
  {
    label: "What We Stand For",
    hasIcon: true,
    iconSrc: "/svg-1.svg",
  },
  {
    label: "Privacy Policy",
    hasIcon: false,
  },
  {
    label: "Terms of Service",
    hasIcon: false,
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-1 max-h-[426.5px] relative mt-[72.5px] flex-col w-full items-start pt-px pb-0 px-40 bg-slate-950 border-t [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-slate-200">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 px-6 py-14 relative w-full flex-[0_0_auto]">
        <div className="flex gap-10 relative flex-[0_0_auto]">
          <div className="flex flex-col gap-4 relative">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-9 h-9"
                alt="Background shadow"
                src="/background-shadow-1.svg"
              />

              <div className="inline-flex items-baseline gap-2 relative flex-[0_0_auto]">
                <div className="text-slate-200 leading-[25.5px] relative flex items-center justify-center w-fit mt-[-1.00px] random font-medium text-[17px] tracking-[-0.43px] whitespace-nowrap">
                  wandering
                </div>

                <div className="text-slate-400 leading-[25.5px] relative flex items-center justify-center w-fit mt-[-1.00px] random font-medium text-[17px] tracking-[-0.43px] whitespace-nowrap">
                  aimfully
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] random font-normal text-slate-400 text-sm tracking-[0] leading-5">
                Subscribe to get our newsletter with a brand new AI
                <br />
                power prompt every Monday to make your business more
                <br />
                profitable, more predictable, and more peaceful.
              </div>
            </div>

            <div className="items-start flex gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-slate-900 border-slate-700 text-slate-500 placeholder:text-slate-500 rounded-xl h-[48.5px] px-[17px] random text-[15px]"
              />

              <Button className="w-[134.11px] h-[48.5px] bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white random text-[15px] tracking-[-0.38px] leading-[22.5px] gap-2">
                <img className="w-4 h-4" alt="Svg" src="/svg-2.svg" />
                Subscribe
              </Button>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] random font-normal text-slate-500 text-xs tracking-[0] leading-[18px]">
                By subscribing you agree to our Privacy Policy and consent to
                <br />
                receive updates from our company.
              </div>
            </div>
          </div>

          <div className="flex gap-8 pr-0 py-0 relative self-stretch" style={{paddingLeft: 100}}>
            <div className="flex flex-col  items-center gap-3 relative">
              <div className="flex items-start self-stretch w-full flex-col relative flex-[0_0_auto]">
                <div className="text-white tracking-[-0.35px] relative flex items-center justify-center mt-[-1.00px] random font-normal text-sm leading-5">
                  About
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 relative w-full flex-[0_0_auto]">
                {aboutLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start relative w-full flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] random font-normal text-slate-400 text-sm tracking-[0] leading-5 whitespace-nowrap cursor-pointer hover:text-slate-300 transition-colors">
                        {link}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col  items-start gap-3 relative">
              <div className="flex flex-col items-start relative w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center mt-[-1.00px] random font-normal text-white text-sm tracking-[-0.35px] leading-5">
                  Free Resources
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative w-full flex-[0_0_auto]">
                {freeResourcesLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start relative w-full flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] random font-normal text-slate-400 text-sm tracking-[0] leading-5 cursor-pointer hover:text-slate-300 transition-colors">
                        {link.split("\n").map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex < link.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col  items-start gap-3 relative">
              <div className="flex flex-col items-start relative w-full flex-[0_0_auto]">
                <div className="relative mt-[-1.00px] font-normal text-white text-sm tracking-[-0.35px] leading-5 flex items-center justify-center random">
                  Products
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                {productsLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] random font-normal text-slate-400 text-sm tracking-[0] leading-5 cursor-pointer hover:text-slate-300 transition-colors">
                        {link.split("\n").map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex < link.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col  items-start gap-3 pr-0 py-0 relative">
              <div className="flex flex-col items-start relative w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center mt-[-1.00px] random font-normal text-white text-sm tracking-[-0.35px] leading-5">
                  Connect
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className="pt-0 pb-[3px] px-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer hover:text-slate-300 transition-colors">
                      <img
                        className="relative w-4 h-4"
                        alt="Svg"
                        src={social.iconSrc}
                      />

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] random font-normal text-slate-400 text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {social.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-[25px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff1a]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] random font-normal text-slate-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
              © 2025 Really Awesome Company. All rights reserved.
            </div>
          </div>

          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            {bottomLinks.map((link, index) => (
              <div
                key={index}
                className={`inline-flex ${link.hasIcon ? "items-center gap-1" : "flex-col items-start"} relative flex-[0_0_auto]`}
              >
                {link.hasIcon && (
                  <img
                    className="relative w-4 h-4"
                    alt="Svg"
                    src={link.iconSrc}
                  />
                )}

                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] random font-normal text-slate-400 text-sm tracking-[0] leading-5 whitespace-nowrap cursor-pointer hover:text-slate-300 transition-colors">
                  {link.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
