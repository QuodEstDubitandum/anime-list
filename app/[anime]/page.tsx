export default function Anime({ params }: { params: { anime: string } }) {
  return (
    <>
      <div>{decodeURIComponent(params.anime)}</div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Iwh5yOMmyFM"
        allowFullScreen
      ></iframe>
    </>
  );
}
