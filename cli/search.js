#!/usr/bin/env node
require("colors");

const namePrefix = "--name";
const arguments = process.argv;
const nameIndex = arguments.indexOf(namePrefix) + 1;
const name = arguments[nameIndex];

if (!name) {
  console.log(
    "INVALID REQUEST".red,
    "Please provide a name to search the cameras. Checkout the README for more info.".bold
  );
  process.exit();
}

const fetchCameras = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/cameras/name/${name}`);
    const result = await response.json();

    if (!result.length) {
      console.log("NO DATA".yellow, "No cameras match the name you provided.".bold);
    } else {
      let output = "";

      result.forEach((camera) => {
        output += `${camera.number} | ${camera.name} | ${camera.latitude} | ${camera.longitude}\n`;
      });

      console.log("SUCCESS".green, `${result.length} camera(s) found`.bold, "\n\n" + output.bold);
    }
  } catch (_) {
    console.log(
      "ERROR".red,
      "Unable to fetch data. Perhaps you didn't start the server? Checkout the README for more info."
        .bold
    );
  }
};

fetchCameras();
