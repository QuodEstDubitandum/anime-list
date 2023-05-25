"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnimeList(props: { animeCards: AnimeCard[] }) {
  return (
    <>
      <h1 className="relative text-2xl w-fit rounded-lg text-center border px-4 py-2 border-black shadow-md shadow-black">
        Dans unquestionably correct anime tier list to end the age old
        discussion about the best animes
      </h1>
      <div className="relative pt-20 flex flex-wrap gap-6 w-full h-max flex-row justify-evenly">
        {props.animeCards.map((card, index) => (
          <div
            className="relative flex flex-col items-center border bg-black border-black rounded-lg shadow-md shadow-black w-[416px]"
            key={index}
          >
            <div className="text-center py-1 rounded-full border border-foreground w-fit aspect-square my-2 shadow-sm shadow-black">
              {card.ranking}
            </div>
            <div className="text-center pb-2 text-xl">{card.name}</div>
            <Link
              className="relative w-[400px] h-[250px] mb-2 overflow-hidden"
              href={`/${encodeURIComponent(card.name)}`}
            >
              <Image
                src={card.imageUrl}
                alt="Anime Thumbnail"
                fill={true}
                className="zoom-image rounded-lg object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
