export interface Camera {
  id: number;
  number: number;
  name: string;
  latitude: number;
  longitude: number;
}

export type CameraType =
  | "dividableByThree"
  | "dividableByFive"
  | "dividableByThreeAndFive"
  | "other";

export type SortedCameras = {
  [key in CameraType]: Camera[];
};
