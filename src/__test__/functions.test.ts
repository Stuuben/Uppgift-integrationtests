import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { mockData } from "../ts/services/__mock__/moviesevice";

test("should sort movietitles a-ö", () => {
  //arrange

  //act
  movieSort(mockData, true);
  //assert
  expect(mockData[0].Title).toBe("Almost Best Movie");
  expect(mockData[3].Title).toBe("Starwars");
});
test("should sort movietitles ö-a", () => {
  //arrange

  //act
  movieSort(mockData, false);
  //assert
  expect(mockData[0].Title).toBe("Starwars");
  expect(mockData[3].Title).toBe("Almost Best Movie");
});

test("should sort movietitles ö-a", () => {
  //arrange

  //act
  movieSort(mockABCD, false);
  //assert
  expect(mockABCD[0].Title).toBe("d");
});

export let mockABCD: IMovie[] = [
  {
    Title: "a",
    Year: "1992",
    imdbID: "1234",
    Poster: "www.hejhopo/bild/bra",
    Type: "movie",
  },
  {
    Title: "b",
    Year: "2015",
    imdbID: "6644",
    Poster: "www.hejhopo/bild/almostbra",
    Type: "movie",
  },
  {
    Title: "c",
    Year: "2022",
    imdbID: "8294",
    Poster: "www.hejhopo/bild/starwars",
    Type: "movie",
  },
  {
    Title: "d",
    Year: "1802",
    imdbID: "1644",
    Poster: "www.hejhopo/bild/harry",
    Type: "movie",
  },
];
