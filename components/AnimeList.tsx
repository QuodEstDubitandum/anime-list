"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnimeList(props: { animeCards: AnimeCard[] }) {
  return (
    <>
      <h1 className="relative lg:text-2xl text-lg w-3/4 rounded-lg text-center border px-4 py-2 border-black shadow-md shadow-black">
        Dans unquestionably correct anime tier list to end the age old
        discussion about the best animes
      </h1>
      <div className="relative pt-20 flex flex-wrap gap-6 w-full h-max flex-row justify-center">
        {props.animeCards.map((card, index) => (
          <div
            className="relative flex flex-col items-center border bg-black border-black rounded-lg shadow-md shadow-black w-[256px] lg:w-[416px]"
            key={index}
          >
            <div className="text-center py-1 w-fit shadow-sm shadow-black">
              {card.ranking}
            </div>
            <div className="text-center pb-2 lg:text-xl text-base">
              {card.name}
            </div>
            <Link
              className="relative lg:w-[400px] lg:h-[250px] w-[240px] h-[150px] mb-2 overflow-hidden border border-blue-900 rounded-lg"
              href={`/${encodeURIComponent(card.id)}`}
            >
              <Image
                src={card.imageUrl}
                alt="Anime Thumbnail"
                fill={true}
                className="zoom-image rounded-lg object-cover"
                sizes="(max-width: 1023px) 60vw, 100vw"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
