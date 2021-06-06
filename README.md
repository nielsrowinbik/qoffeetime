# Brewtime

[Next.js](https://nextjs.org) implementation of [Brewtime](https://brewtimeapp.com), available on iOS and Android, with recipes from James Hoffmann.

## Running locally

```bash
$ git clone https://github.com/nielsrowinbik/brewtime
$ cd brewtime
```

### With Docker:

```bash
$ docker-compose run --rm brewtime npm ci # Only on first run to install dependencies
$ docker-compose up # To start development server
$ docker-compose exec brewtime sh # Run this to run commands within the container
```

### Without Docker:

```bash
$ npm i # To install dependencies
$ npm run dev # To start development server
```
