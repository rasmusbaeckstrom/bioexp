import { expect, test } from "@jest/globals";
import request from "supertest";
import app from "../static/scripts/app";
import movieTests from "../static/scripts/APImovies";

// Function to test movie titles
const testMovieTitles = async (movieId, expectedTitle) => {
  const response = await request(app)
    .get(`/movies/${movieId}`)
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  //The response text should contain expected movie title  
  expect(response.text).toMatch(expectedTitle);
};

//Create a test for each test case
movieTests.forEach(({ id, title }) => {
  test(`${title} page shows title of movie`, () => testMovieTitles(id, title));
});



//Function to test 404error page
test('404error page shows right info and responses with correct http status', async () => {
  const response = await request(app).get('/404error')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(404);

  //The response text should contain expected text
  expect(response.text).toMatch('404 Error: Not Found');
});
