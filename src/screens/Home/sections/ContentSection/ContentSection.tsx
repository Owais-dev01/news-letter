import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const issuesData = [
  {
    id: "#0042",
    title: "An AI Prompt to Create Your Own Repeatable Reels Series",
    backgroundImage: "bg-[url(../cards.png)]",
    gradient:
      "bg-[linear-gradient(11deg,rgba(224,231,255,1)_0%,rgba(224,242,254,1)_50%,rgba(209,250,229,1)_100%)]",
  },
  {
    id: "#0041",
    title: "Make an Existing Offer More Irresistible With This Prompt",
    backgroundImage: "bg-[url(/doodle.svg)]",
    gradient:
      "bg-[linear-gradient(11deg,rgba(255,228,230,1)_0%,rgba(254,243,199,1)_50%,rgba(209,250,229,1)_100%)]",
  },
  {
    id: "#0040",
    title: "Kickstart Your Next Launch in 5 Minutes With This Prompt",
    backgroundImage: "bg-[url(/launch.svg)]",
    gradient:
      "bg-[linear-gradient(11deg,rgba(224,242,254,1)_0%,rgba(224,231,255,1)_50%,rgba(255,228,230,1)_100%)]",
  },
  {
    id: "#0039",
    title: "Reframe Self‑Doubt and Launch Hesitation With This Prompt",
    backgroundImage: "bg-[url(/sun-doodle.svg)]",
    gradient:
      "bg-[linear-gradient(11deg,rgba(254,243,199,1)_0%,rgba(255,228,230,1)_50%,rgba(224,231,255,1)_100%)]",
  },
  {
    id: "#0038",
    title: "An AI Prompt for Regrouping After a Lackluster Launch",
    backgroundImage: "bg-[url(/chart.svg)]",
    gradient:
      "bg-[linear-gradient(11deg,rgba(224,242,254,1)_0%,rgba(255,228,230,1)_50%,rgba(254,243,199,1)_100%)]",
  },
  {
    id: "#0037",
    title: "5 AI Prompts for Sustainable Content Creation",
    backgroundImage: "bg-[url(/emails.svg)]",
    gradient:
      "bg-[linear-gradient(11deg,rgba(224,231,255,1)_0%,rgba(209,250,229,1)_50%,rgba(224,242,254,1)_100%)]",
  },
];

export const ContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-center gap-10 px-4 lg:px-0 mt-[59px] max-w-7xl mx-auto">
      <div className="flex flex-col w-full lg:w-[808px] items-start gap-6">
        <header className="flex items-center w-full">
          <h2 className="[font-family:'Kalam',Helvetica] font-bold text-slate-900 text-[28px] tracking-[-0.70px] leading-8">
            Latest issues of Growing Steady:
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {issuesData.map((issue, index) => (
            <Card
              key={issue.id}
              className="bg-white rounded-3xl border border-solid border-slate-200 shadow-[0px_1px_2px_#0000000d]"
            >
              <CardContent className="p-[17px] flex flex-col gap-3">
                <div className="flex items-center justify-between w-full">
                  <span className="random font-medium text-slate-500 text-xs tracking-[0] leading-4">
                    {issue.id}
                  </span>
                  <Badge
                    variant="secondary"
                    className="inline-flex items-center gap-1 bg-transparent border-0 p-0"
                  >
                    <img
                      className="w-3.5 h-3.5"
                      alt="AI Prompt Icon"
                      src="/svg-3.svg"
                    />
                    <span className="random font-normal text-emerald-600 text-xs tracking-[0] leading-4">
                      AI Prompt
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col items-start w-full">
                  <h3 className="random font-normal text-slate-900 text-xl tracking-[-0.50px] leading-7">
                    {issue.title.includes("<br />")
                      ? issue.title.split("<br />").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < issue.title.split("<br />").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))
                      : issue.title}
                  </h3>
                </div>

                <div
                  className={`h-[164px] flex flex-col items-start justify-center pt-[17px] pb-[13px] px-[13px] rounded-2xl overflow-hidden border border-solid border-slate-200 ${issue.gradient}`}
                >
                  <div
                    className={`flex-1 max-w-[358px] w-full rounded-xl ${issue.backgroundImage} bg-cover bg-[50%_50%]`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-start pt-2 w-full">
          <Button
            variant="outline"
            className="h-auto rounded-xl border border-solid border-slate-300 px-6 py-3 flex items-center gap-2"
          >
            <span className="random font-medium text-slate-900 text-[15px] tracking-[0] leading-[22.5px]">
              Load More
            </span>
            <img className="w-4 h-4" alt="Load More Icon" src="/svg-10.svg" />
          </Button>
        </div>
      </div>

      <aside className="flex flex-col w-full lg:w-96 lg:pl-6">
        <Card className="bg-white rounded-3xl shadow-[0px_1px_2px_#0000000d] border border-solid border-slate-200">
          <CardContent className="pt-[25px] pb-[41px] px-[25px] flex flex-col items-start gap-[7.1px]">
            <div className="flex flex-col items-start w-full">
              <h3 className="[font-family:'Kalam',Helvetica] font-bold text-slate-900 text-xl tracking-[-0.50px] leading-7">
                Subscribe to our Growing Steady
                <br />
                newsletter!
              </h3>
            </div>

            <div className="flex flex-col items-start w-full">
              <p className="random font-normal text-slate-600 text-[15px] tracking-[0] leading-[24.4px]">
                Join 12k+ readers for actionable tips on
                <br />
                how to grow your creator business and
                <br />
                make it more profitable, more predictable,
                <br />
                and more peaceful.
              </p>
            </div>

            <div className="flex flex-col items-start pt-[8.9px] gap-3 w-full">
              <Input
                type="email"
                placeholder="name@email.com"
                className="w-full bg-white border-slate-300 rounded-xl pt-3.5 pb-[15.5px] px-[17px] random font-normal text-slate-400 text-[15px] tracking-[0]"
              />

              <Button className="w-full h-[46.5px] bg-indigo-600 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700">
                <img
                  className="w-4 h-4"
                  alt="Subscribe Icon"
                  src="/svg-9.svg"
                />
                <span className="random font-normal text-white text-[15px] tracking-[-0.38px] leading-[22.5px]">
                  Subscribe
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </aside>
    </section>
  );
};
