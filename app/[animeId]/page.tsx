import { AnimeDetails } from "@/components/AnimeDetails";
import { client } from "@/lib/contentful";
import { redirect } from "next/navigation";

export default async function Anime({
  params,
}: {
  params: { animeId: string };
}) {
  const anime = await client.getEntry(decodeURIComponent(params.animeId));

  const animeSeasons = [];
  if (!anime.fields.seasons) {
    redirect("/");
  }
  for (const season of anime.fields.seasons as any) {
    const animeSeason = {
      firstRelease: season.fields.firstRelease,
      seasonNr: season.fields.seasonNr,
      trailerLink: season.fields.trailerLink,
      episodes: season.fields.episodes,
    };
    animeSeasons.push(animeSeason);
  }
  animeSeasons.sort((a, b) => a.seasonNr - b.seasonNr);
  const filteredAnime: AnimeDetails = {
    name: anime.fields.name as string,
    description: anime.fields.description as string,
    imageUrl:
      "https:" +
      (
        anime.fields.image as {
          fields: { file: { url: string } };
        }
      ).fields.file.url,
    comment: anime.fields.comment?.toString(),
    seasons: animeSeasons,
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 xl:px-12 xl:pt-12 xl:pb-4">
      <AnimeDetails anime={filteredAnime} />
    </div>
  );
}
