import React from "react";
import { linearMapColor, rgbToHex } from "../utils";
import Icon, { IconType } from "./Icon";
import { Link } from "react-router-dom";

export default function StatisticsSidebar() {
  const stakes = [
    {
      img: "https://play-lh.googleusercontent.com/DbepofsHLK7fTQmiQi9KurqbL1VvVJEAJ0AOX8CejdsgygCTH_0K4kG9JLmcKl3MkN0K",
      name: "Asaj Life Sure",
      amount: 100.34,
      rate: 0.94,
    },
    {
      img: "https://m.economictimes.com/thumb/msid-102577743,width-1200,height-900,resizemode-4,imgsize-9920/max-life.jpg",
      name: "XAM life policies",
      amount: 84.24,
      rate: 0.51,
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/020/335/989/original/sbi-logo-sbi-icon-free-free-vector.jpg",
      name: "Normie Car Insurnace",
      amount: 12.32,
      rate: 0.26,
    },
    {
      img: "https://avatars.githubusercontent.com/u/134763039?s=200&v=4",
      name: "Agrosurance",
      amount: 350.04,
      rate: 1,
    },
    {
      img: "https://cdn.logojoy.com/wp-content/uploads/2018/07/30125031/insurance8.png",
      name: "Cocksford Theft Insurnace",
      amount: 0.13,
      rate: 0.03,
    },
  ];

  const socialLinks: Array<{ link: string; icon: IconType }> = [
    { link: "", icon: "github" },
    { link: "", icon: "github" },
    { link: "", icon: "github" },
    { link: "", icon: "github" },
  ];

  const totalStake = 503.42;

  return (
    <section className="flex relative flex-col border-l border-border max-w-[20vw] h-screen">
      <div className="p-6 flex flex-col gap-y-2">
        <h1 className="text-mute text-base font-bold">SureCoin Balance</h1>
        <div>
          <h2 className="text-xs -mb-1">Wallet</h2>
          <p className="font-mono text-primary text-2xl font-medium">103.00</p>
        </div>
        <div>
          <h2 className="text-xs -mb-1">Pending</h2>
          <p className="font-mono text-primary text-2xl font-medium">84.20</p>
        </div>
      </div>

      <div className="border-y border-border px-6 py-4 flex flex-col gap-y-5 max-h-[50vh] overflow-y-scroll scrollbar-primary">
        <div className="flex items-center justify-between gap-x-3">
          <h1 className="text-mute text-base font-bold">Your Stakes</h1>
          <p className="bg-foreground p-2 text-sm font-semibold rounded-lg">
            Total : {totalStake}
          </p>
        </div>

        {stakes.map((stake, key) => (
          <div className="border border-border p-1 rounded-lg">
            <div key={key} className="flex gap-x-3 items-center">
              <img
                src={stake.img}
                alt="bf"
                className="aspect-square rounded-lg h-12 bg-foreground"
              />

              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-sm max-w-[12vw] truncate">
                  {stake.name}
                </h1>
                <p className="text-xs">Staked : {stake.amount}</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-1 pt-2 text-xs">
              <p
                className="font-medium"
                style={{
                  color: rgbToHex(
                    linearMapColor(
                      stake.rate,
                      { from: 0, to: 1 },
                      { from: [255, 0, 0], to: [0, 255, 0] }
                    )
                  ),
                }}
              >
                Exchange : {stake.rate}
              </p>
            </div>
          </div>
        ))}
      </div>

      <figure role="separator" className="flex-1" />

      <div className="border-t border-border px-6 py-4">
        <div className="flex items-center gap-x-3">
          Socials
          {socialLinks.map((social, key) => (
            <Link to={social.link} key={key}>
              <Icon icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
