import { Camera, SortedCameras } from "../models/camera";

export const sortCameras = (cameras: Camera[]) => {
  const sortedCameras: SortedCameras = {
    dividableByThree: [],
    dividableByFive: [],
    dividableByThreeAndFive: [],
    other: [],
  };

  cameras.forEach((cam) => {
    const number = cam.number;

    if (number % 5 === 0 && number % 3 === 0) {
      sortedCameras.dividableByThreeAndFive.push(cam);
    } else if (number % 3 === 0) {
      sortedCameras.dividableByThree.push(cam);
    } else if (number % 5 === 0) {
      sortedCameras.dividableByFive.push(cam);
    } else {
      sortedCameras.other.push(cam);
    }
  });

  return sortedCameras;
};
