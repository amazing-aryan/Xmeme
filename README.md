# Xmeme

## Introduction

This is App where new memes can be added along with seeing the 100 most recent memes added by different users. App has been developed using MERN stack.

`Xmeme-frontend` contains frontend code written using react

`Xmeme-backend` contains backend code written using nodejs, expressjs and mongodb.

## Installation

To install the app run the following commands in sequence(for linux):

`chmod +x install.sh`

`./install.sh`

`chmod +x run_server.sh`

`./run_server.sh`

## Running the app

Run the app using `npm run start` command in `/backend` directory 

## List of APIs

1. `POST \memes` add new meme

2. `GET \memes` get latest 100 memes

3. `GET \memes\:id` get a specific meme by id

4. `PATCH \memes\:id` change url and caption of a meme
