import AnimeList from "@/components/AnimeList";
import { client } from "@/lib/contentful";

export default async function Home() {
  const animeCardArray: AnimeCard[] = [];
  const entries = await client.getEntries({
    limit: 100,
    content_type: "animeCard",
  });

  for (let i = 0; i < entries.items.length; i++) {
    const animeCard: AnimeCard = {
      id: entries.items[i].sys.id,
      name: entries.items[i].fields.name as string,
      description: entries.items[i].fields.description as string,
      imageUrl:
        entries.items[i].fields.image !== null
          ? "https:" +
            (
              entries.items[i].fields.image as {
                fields: { file: { url: string } };
              }
            ).fields.file.url
          : "",
      ranking: entries.items[i].fields.ranking as number,
      comment: entries.items[i].fields.comment as string | undefined,
    };
    animeCardArray.push(animeCard);
  }
  animeCardArray.sort((a, b) => a.ranking - b.ranking);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 xl:p-12">
      <AnimeList animeCards={animeCardArray} />
    </div>
  );
}
