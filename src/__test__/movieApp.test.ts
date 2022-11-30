/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { createHtml } from "../ts/movieApp";
import { getData } from "../ts/services/movieservice";
import { getMovies, mockData } from "../ts/services/__mock__/moviesevice";
import * as FNservices from "./../ts/services/movieservice";
import * as FNmain from "./../ts/movieApp";

test("Should create HTML", async () => {
  //arrange
  document.body.innerHTML = `
  <div id="movie-container"></div>
  `;
  let container = document.getElementById("movie-container") as HTMLDivElement;

  let searchText: string = "hejhopp";
  let movies: IMovie[] = await FNservices.getData(searchText);

  //act
  createHtml(mockData, container);

  //assert
  expect(document.querySelectorAll("h3").length).toBe(4);

  document.body.innerHTML = "";
});
