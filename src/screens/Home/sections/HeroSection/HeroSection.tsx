import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-1 max-h-[942px] relative flex-col w-full h-[942px] items-start px-40 py-0">
      <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_50%_-20%,rgba(79,70,229,0.18)_0%,rgba(79,70,229,0)_60%),radial-gradient(50%_50%_at_90%_10%,rgba(244,114,182,0.18)_0%,rgba(244,114,182,0)_55%),radial-gradient(50%_50%_at_10%_20%,rgba(16,185,129,0.15)_0%,rgba(16,185,129,0)_50%),linear-gradient(0deg,rgba(239,250,255,1)_0%,rgba(239,250,255,1)_100%)]" />

      <img
        className="absolute w-full h-[calc(100%_-_62px)] top-0 left-0"
        alt="Container"
        src="/container.svg"
      />

      <div className="flex flex-col max-w-screen-xl h-[942px] items-start gap-px pt-[53px] pb-0 px-64 relative w-full">
        <div className="flex flex-col max-w-screen-md items-center gap-4 relative w-full flex-[0_0_auto]">
          <img
            className="relative w-[349.21px] h-[212px]"
            alt="Group"
            src="/group-2.png"
          />

          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Kalam',Helvetica] font-bold text-[#595e69] text-base text-center tracking-[2.16px] leading-6">
              A WEEKLY NEWSLETTER FOR SOLO CREATORS USING AI TO WORK LESS SO
              THEY CAN LIVE MORE
            </p>
          </div>

          <div className="flex items-center pt-2 pb-0 px-0 self-stretch w-full flex-col relative flex-[0_0_auto]">
            <h1 className="relative flex items-center justify-center w-[1124px] mt-[-1.00px] ml-[-178.00px] mr-[-178.00px] random font-normal text-slate-900 text-5xl text-center tracking-[-1.20px] leading-[48px]">
              Practical prompts to help you grow your creator business—with the
              help of AI.
            </h1>
          </div>

          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] random font-normal text-slate-600 text-base text-center tracking-[0] leading-6">
              Every Monday you&apos;ll get one expertly‑crafted AI prompt for
              growing a calm business—one that isxxxxxxxx
              <br />
              predictable, profitable, and peaceful.
            </p>
          </div>

          <div className="items-center justify-center pt-2 pb-0 px-0 flex gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[380px] items-start relative">
              <Input
                className="justify-center w-full flex-[0_0_auto] bg-white border-slate-300 flex items-start pt-3.5 pb-[15.5px] px-[17px] relative self-stretch rounded-xl overflow-hidden border border-solid h-auto"
                placeholder="name@email.com"
                defaultValue=""
              />
            </div>

            <Button className="relative w-[214.47px] h-[46.5px] bg-indigo-600 rounded-xl overflow-hidden shadow-[0px_10px_20px_-10px_#4f46e5cc] hover:bg-indigo-700">
              <img className="w-4 h-4 mr-2" alt="Svg" src="/svg-2.svg" />
              <span className="w-[151px] h-[23px] flex items-center justify-center random font-normal text-white text-[15px] text-center tracking-[-0.38px] leading-[22.5px] whitespace-nowrap">
                Join 12,000+ Readers
              </span>
            </Button>
          </div>
        </div>

        <div className="flex max-w-screen-md h-[360px] items-end justify-center relative w-full mb-[-3.50px]">
          <div className="relative max-w-screen-md w-[609px] h-[340px] rounded-3xl bg-[url(/two-smiling-people.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
    </section>
  );
};
