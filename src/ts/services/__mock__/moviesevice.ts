import { IMovie } from "../../models/Movie";

export let mockData: IMovie[] = [
  {
    Title: "Best Movie",
    Year: "1992",
    imdbID: "1234",
    Poster: "www.hejhopo/bild/bra",
    Type: "movie",
  },
  {
    Title: "Almost Best Movie",
    Year: "2015",
    imdbID: "6644",
    Poster: "www.hejhopo/bild/almostbra",
    Type: "movie",
  },
  {
    Title: "Starwars",
    Year: "2022",
    imdbID: "8294",
    Poster: "www.hejhopo/bild/starwars",
    Type: "movie",
  },
  {
    Title: "Harry P",
    Year: "1802",
    imdbID: "1644",
    Poster: "www.hejhopo/bild/harry",
    Type: "movie",
  },
];

export const getMovies = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
