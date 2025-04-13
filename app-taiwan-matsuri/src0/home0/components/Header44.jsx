"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">台湾</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            台湾まつり開催
          </h1>
          <p className="md:text-md">
            2025年5月31日と6月1日に、川崎市高津区でお待ちしています！
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="詳細">詳細</Button>
            <Button title="参加" variant="secondary">
              参加
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
