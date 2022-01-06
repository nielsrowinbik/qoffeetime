# Qoffeetime

Coffee timer Progressive Web App, built using [Next.js](https://nextjs.org), with recipes from James Hoffmann.

## Running locally

```bash
$ git clone https://github.com/nielsrowinbik/qoffeetime
$ cd qoffeetime
```

### With Docker:

```bash
$ docker compose run --rm qoffeetime npm ci # Only on first run to install dependencies
$ docker compose up # To start development server
$ docker compose exec qoffeetime sh # Run this to run commands within the container
```

### Without Docker:

```bash
$ npm i # To install dependencies
$ npm run dev # To start development server
```
