# Shortener
A small and simple url shortener with Laravel, Reactjs and Docker

## How to install Shortener
### Installation with Docker

* Download and install docker from https://www.docker.com/get-started
* Bring up Docker, wait for "Docker is running"
* Clone the repository (https://github.com/Asinox/Shortener)
* Open your terminal and go inside the new directory Shortener and try `docker-compose up -d` command to bring up all your services.
* You can visit the docker URL `http://localhost:4000`, if you want to change the port 4000, just edit the `docker-compose.yml` and change change `ports` value `4000:8080`

### Running outside of Docker with Artisan
* Clone the repository (https://github.com/Asinox/Shortener)
* Open your terminal and go inside the new directory Shortener and run `php artisan serve` and now you can visit the URL `http://localhost:8000`

### Database (optional?)
> The Shortener database is hosted on Heroku, you can review the `.env` file and change it if you want.
> After change the database (.env) remember just migrate the database with artisan command `php artisan migrate`

### React, a note
>If there is anything that you want to change about React, you can go inside the path `resource/js` and work there.
>Are you done with react?, just go to the root directory and run the command `npm run dev` (to test on development) or `npm run production` for build the production files.

