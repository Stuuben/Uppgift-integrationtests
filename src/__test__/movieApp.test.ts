/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { createHtml } from "../ts/movieApp";
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

test("Should display no results", () => {
  document.body.innerHTML = `<div id="movie-container"></div>`;
  let container = document.getElementById("movie-container") as HTMLDivElement;

  fn.displayNoResult(container);

  expect(container.innerHTML).toBe("<p>Inga sökresultat att visa</p>");
});
