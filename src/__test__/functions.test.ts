import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { mockData } from "../ts/services/__mocks__/moviesevice";

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
