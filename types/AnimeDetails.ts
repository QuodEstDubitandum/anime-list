interface AnimeDetails {
  name: string;
  description: string;
  imageUrl: string;
  comment: string | undefined;
  seasons: Array<{
    firstRelease: string;
    seasonNr: number;
    episodes: number;
    trailerLink: string | undefined;
  }>;
}
