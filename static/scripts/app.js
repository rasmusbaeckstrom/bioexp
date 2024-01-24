import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./movies.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/DATAmovies", async (req, res) => {
  res.render("DATAmovies");
});

app.get("/contact", async (req, res) => {
  res.render("contact");
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.get("/age-limit", async (req, res) => {
  res.render("age-limit");
});

app.get("/news", async (req, res) => {
  res.render("news");
});

app.get("/APIhome", async (req, res) => {
  const movies = await loadMovies();
  res.render("APIhome", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("APImovie", { movie });
});

app.use("/static", express.static("./static"));

export default app;