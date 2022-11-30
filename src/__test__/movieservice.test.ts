/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";

let mockData: IMovie[] = [
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

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData } });
    });
  },
}));

test("should get mock data", async () => {
  let searchText: string = "star";

  let movies: IMovie[] = await getData(searchText);

  expect(movies.length).toBeGreaterThan(0);
  expect(movies.length).toBe(4);
});
