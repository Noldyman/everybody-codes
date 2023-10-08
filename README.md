# Everybody codes

This repository is divided into three parts: an API, a CLI, and a web app. Both the CLI and the web app are dependent on the API, so make sure to start the API server before using the CLI or web app.

## Install dependencies

Before you start, make sure to use the right Node.js version and install the required dependencies. Assuming [node version manager (nvm)](https://github.com/nvm-sh/nvm) is installed, run the following commands from the root directory:

`nvm use`

`npm run inst`

## API

The API serves the data from the `data/cameras-defb.csv` file. It allows you to fetch all cameras or to search for cameras that match a specific name. To start the server, run the following command from the root directory:

`npm run server`

## CLI

This console application enables you to search for cameras by name. The script fetches data from the API, so make sure to start the server as described above. To use the script, navigate to the `cli/` directory and provide a name using the `--name` flag. For example:

`cd cli/`

`node search.js --name Neude`

## Web app

The web app is a simple React application that displays the location of all the cameras on a map. Below the map, you'll find a table with all the cameras sorted by camera number. In the table, you can click on any camera to highlight its location on the map.

To start the web application, make sure the API is running and run the following command from the root directory:

`npm run app`
