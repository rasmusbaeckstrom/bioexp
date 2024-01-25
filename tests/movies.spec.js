import { expect, test } from "@jest/globals";
import request from "supertest";
import app from "../static/scripts/app";

// Function to test movie titles
const testMovieTitles = async (movieId, expectedTitle) => {
  const response = await request(app)
    .get(`/movies/${movieId}`)
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  //The response text should contain expected movie title  
  expect(response.text).toMatch(expectedTitle);
};

const movieTests = [
  { id: 8, title: "Pulp Fiction" },
  { id: 2, title: "Encanto" },
  { id: 1, title: "Isle of dogs" },
  { id: 4, title: "Min granne Totoro" },
  { id: 3, title: "The Shawshank Redemption" },
  { id: 6, title: "Forrest Gump" },
  { id: 5, title: "The Muppets" },
];

//Create a test for each test case
movieTests.forEach(({ id, title }) => {
  test(`${title} page shows title of movie`, () => testMovieTitles(id, title));
});
