"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function AnimeDetails({ anime }: { anime: AnimeDetails }) {
  const [currentSeason, setCurrentSeason] = useState<number>(0);

  return (
    <div className="relative w-full h-full flex xl:flex-row flex-col items-center sm:text-sm text-xs xl:space-y-0 space-y-20 xl:space-x-20">
      <div className="relative flex flex-col items-start xl:w-1/3 w-full">
        <Link
          href="/"
          className="bg-transparent w-fit sm:text-xl text-base border border-emerald-700 rounded-md px-2 mb-4"
        >
          Back to Anime List
        </Link>
        <div className="flex flex-col items-center w-full bg-black px-5 shadow-lg shadow-black rounded-lg">
          <div className="flex flex-row items-center justify-center pt-4 w-full">
            <h2 className="sm:text-2xl text-lg underline underline-offset-8 w-fit">
              {anime.name}
            </h2>
          </div>
          <div
            className="relative w-full h-full overflow-hidden mt-8"
            style={{ aspectRatio: "1.6" }}
          >
            <Image
              src={anime.imageUrl}
              alt={`${anime.name} Image`}
              fill={true}
              className="rounded-lg object-cover border border-blue-900"
            />
          </div>
          <div
            className="bg-emerald-700 mt-7 mb-5 w-full"
            style={{ height: "1px" }}
          ></div>
          <div className="bg-black shadow-lg shadow-black rounded-lg leading-6 xl:leading-7">
            {anime.description}
          </div>
          <div
            className="bg-emerald-700 mt-5 mb-5 w-full"
            style={{ height: "1px" }}
          ></div>
        </div>
      </div>
      <div className="relative flex flex-col items-center xl:w-2/3 xl:h-2/3 w-full h-full">
        {anime.seasons[currentSeason].trailerLink ? (
          <iframe
            className="relative aspect-video xl:w-[90%] xl:h-[90%] w-full h-full rounded-t-lg shadow-lg shadow-black"
            src={`${anime.seasons[currentSeason].trailerLink}`}
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative items-center justify-center aspect-video xl:w-[90%] xl:h-[90%] w-full h-full rounded-t-lg shadow-lg shadow-black flex">
            <div className="text-2xl w-fit bg-black rounded-lg shadow-lg shadow-black px-4 py-1 border border-emerald-700">
              No Trailer available
            </div>
          </div>
        )}
        <div
          className="relative bg-emerald-700 w-full xl:w-[90%]"
          style={{ height: "1px" }}
        ></div>
        <div className="relative flex flex-row items-center justify-between bg-black shadow-lg shadow-black p-3 xl:w-[90%] w-full text-base">
          <div>
            Season:{" "}
            <select
              className="bg-black border border-emerald-700 rounded-md pr-3 pl-1 ml-3"
              value={currentSeason}
              onChange={({ target }) =>
                setCurrentSeason(parseInt(target.value))
              }
            >
              {anime.seasons.map((season, index) => (
                <option key={index} value={season.seasonNr - 1}>
                  {season.seasonNr}
                </option>
              ))}
            </select>
          </div>
          <div className="md:flex flex-row hidden">
            <p className="pr-2">Release Date:</p>
            {anime.seasons[currentSeason].firstRelease.slice(8, 10)}.
            {anime.seasons[currentSeason].firstRelease.slice(5, 7)}.
            {anime.seasons[currentSeason].firstRelease.slice(0, 4)}
          </div>
          <p>{anime.seasons[currentSeason].episodes} Episodes</p>
        </div>
        <div
          className="relative bg-emerald-700 w-full xl:w-[90%] md:hidden"
          style={{ height: "1px" }}
        ></div>
        <div className="relative flex md:hidden flex-row justify-start bg-black shadow-lg shadow-black p-3 xl:w-[90%] w-full text-base">
          <div className="md:hidden flex-row flex">
            <p className="pr-2">Release Date:</p>
            {anime.seasons[currentSeason].firstRelease.slice(8, 10)}.
            {anime.seasons[currentSeason].firstRelease.slice(5, 7)}.
            {anime.seasons[currentSeason].firstRelease.slice(0, 4)}
          </div>
        </div>
        <div
          className="relative bg-emerald-700 w-full xl:w-[90%]"
          style={{ height: "1px" }}
        ></div>
        <div className="relative bg-black shadow-lg shadow-black rounded-b-lg p-3 xl:w-[90%] w-full leading-6 xl:leading-7">
          {anime.comment}
        </div>
      </div>
    </div>
  );
}
