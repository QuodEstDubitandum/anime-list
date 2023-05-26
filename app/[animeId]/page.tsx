import { client } from "@/lib/contentful";

export default async function Anime({
  params,
}: {
  params: { animeId: string };
}) {
  const anime = await client.getEntry(decodeURIComponent(params.animeId));
  console.log(anime);
  return (
    <>
      <div>{decodeURIComponent(params.animeId)}</div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Iwh5yOMmyFM"
        allowFullScreen
      ></iframe>
    </>
  );
}
