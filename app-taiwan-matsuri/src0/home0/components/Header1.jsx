"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl">
              黒猫台湾まつりで台湾文化を体験しよう
            </h1>
            <p className="md:text-md">
              2025年5月31日と6月1日に川崎市で開催される黒猫台湾まつりでは、台湾の美味しい料理や飲み物、文化を楽しむことができます。地域の人々との交流を通じて、台湾の魅力を存分に味わいましょう。
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="詳細">詳細</Button>
              <Button title="参加" variant="secondary">
                参加
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
