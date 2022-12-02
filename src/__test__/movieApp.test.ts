/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { createHtml } from "../ts/movieApp";
import { getData } from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/moviesevice";
import * as FNservices from "./../ts/services/movieservice";
import * as fn from "./../ts/movieApp";

// jest.mock("/../src/ts/services/movieservice.ts");

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData } });
    });
  },
}));

test("Should create HTML", async () => {
  //arrange
  document.body.innerHTML = `
  <div id="movie-container"></div>
  `;
  let container = document.getElementById("movie-container") as HTMLDivElement;

  let searchText: string = "hejhopp";
  let movies: IMovie[] = await FNservices.getData(searchText);

  //act
  createHtml(movies, container);

  //assert
  expect(document.querySelectorAll("h3").length).toBe(4);
  expect(document.querySelectorAll("div.movie").length).toBe(4);

  document.body.innerHTML = "";
});

//

//
/* test("Should call handleSubmit", () => {
  // arrange
  let spy = jest.spyOn(FNmain, "handleSubmit").mockReturnThis();

  // act
  document.body.innerHTML = `
<form id="searchForm">
<button type="submit" id="search">Sök</button>
</form>
`;

  FNmain.init();

  (document.getElementById("searchForm") as HTMLFormElement)?.submit();

  //Assert

  expect(spy).toHaveBeenCalled();
});
 */

test("should be able to call fn handleSubmit", () => {
  //Arrange

  let spy = jest.spyOn(fn, "handleSubmit").mockReturnValue(
    new Promise((resolve) => {
      resolve();
    })
  );

  document.body.innerHTML = `

  <form id="searchForm">

  <button type="submit" id="search">Sök</button>

  </form>

    `;

  fn.init();

  //Act

  (document.getElementById("searchForm") as HTMLFormElement)?.submit();

  //Assert

  expect(spy).toHaveBeenCalled();

  document.body.innerHTML = "";
});

//

//
/* 
test("Should handle given data", async () => {
  // Arrange
  document.body.innerHTML = `
  <form id="searchForm">
  <input type="text" id="searchText" placeholder="Skriv titel här" />
  </form>
  <div id="movie-container"></div>
  `;

  let container = document.getElementById("movie-container") as HTMLDivElement;

  let movies = await getData(searchText);

  let spy = jest.spyOn(fn, "createHtml").mockReturnValue();

  // ACT
  fn.handleSubmit();
  // Assert
  expect(spy).toHaveBeenCalled();
});
 */
