import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import expressLayouts from "express-ejs-layouts";
import { loadMovie, loadMovies } from "../scripts/movies.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Only for test and will be removed
const anotherresult = 999;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../templates"));
app.use(expressLayouts); 
app.set('layout', 'main'); 

//Testlogic is only for test and will be removed
app.get("/testlogic", async (req, res) => {
  res.render("testlogic", { anotherresult });
});

app.get("/404error", async (req, res) => {
  res.status(404).render("404error");
});

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

app.get("/QandA", async (req, res) => {
  res.render("QandA");
});

app.get("/APIhome", async (req, res) => {
  const movies = await loadMovies();
  res.render("APIhome", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await loadMovie(movieId);

  if (!movie) {
    // Movie not found
    res.redirect("/404error");
    return;
  }

  // Movie found
  res.render("APImovie", { movie });
});


app.use("/static", express.static(path.join(__dirname, "../../static")));


export default app;