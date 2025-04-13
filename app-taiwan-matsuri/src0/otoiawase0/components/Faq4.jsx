"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            よくある質問
          </h2>
          <p className="md:text-md">
            イベントに関するよくある質問をまとめました。
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                子連れでもOK？
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                はい、子連れのお客様も大歓迎です。家族で楽しめるアクティビティがたくさんあります。安心してお越しください。
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                雨天時は？
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                雨天の場合でもイベントは開催されます。屋内のスペースも用意していますので、安心してご参加ください。天候に応じた情報は公式サイトでお知らせします。
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                駐車場はありますか？
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                はい、駐車場を用意しています。混雑が予想されるため、公共交通機関の利用をお勧めします。詳細は公式サイトをご確認ください。
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                飲食物の持ち込みは？
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                飲食物の持ち込みはご遠慮ください。会場内には多様なフードやドリンクのブースがあります。ぜひお楽しみください。
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                ペットは入場可？
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                ペットの入場はご遠慮いただいています。安全と衛生のため、ご了承ください。特別な支援犬は除きます。
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            まだ質問がありますか？
          </h4>
          <p className="md:text-md">お気軽にお問い合わせください。</p>
          <div className="mt-6 md:mt-8">
            <Button title="お問い合わせ" variant="secondary">
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
