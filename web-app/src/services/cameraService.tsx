import { Camera } from "../models/camera";

export const getAllCameras = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/cameras/all");
    const result: Camera[] = await response.json();
    return result;
  } catch (_) {
    alert(
      "Error - Unable to fetch cameras. Perhaps you didn't start the server? Checkout the README for more info."
    );
    return [];
  }
};
