import express from 'express';
import { engine } from 'express-handlebars';
import fs from 'fs/promises';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const MENU = [
  {
    label: 'Home page',
    link: '/',
  },
  {
    label: 'About us',
    link: '/movies',
  },
  {
    label: 'Contact us',
    link: '/contact',
  },
];

async function renderPage(response, page) {
  const currentPath = (page == 'index')? '/' : `/${page}`;

  response.render(page, {
    menuItems: MENU.map(item => {
      return {
        active: currentPath == item.link,
        label: item.label,
        link: item.link,
      };
    })
  });
}

app.get('/', async (request, response) => {
  renderPage(response, 'index');
});

app.get('/movies', async (request, response) => {
  renderPage(response, 'movies');
});

app.get('/contact', async (request, response) => {
  renderPage(response, 'contact');
});

app.get('/about', async (request, response) => {
  renderPage(response, 'about');
});

app.get('/age-limit', async (request, response) => {
  renderPage(response, 'age-limit');
});

app.get('/news', async (request, response) => {
  renderPage(response, 'news');
});

app.get('/QandA', async (request, response) => {
  renderPage(response, 'QandA');
});


app.use('/static', express.static('./static'));

app.listen(3080);