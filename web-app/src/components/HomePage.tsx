import { MapContainer } from "react-leaflet";
import { Map } from "./Map";
import { useEffect, useState } from "react";
import { Camera } from "../models/camera";
import { getAllCameras } from "../services/cameraService";
import { Source } from "./Source";
import { CameraTable } from "./CameraTable";

export const HomePage = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);

  useEffect(() => {
    const fetchCameras = async () => {
      const newCameras = await getAllCameras();
      setCameras(newCameras);
    };

    fetchCameras();
  }, []);

  return (
    <>
      <MapContainer id="mapid">
        <Map cameras={cameras} />
      </MapContainer>

      <Source />

      <CameraTable cameras={cameras} />
    </>
  );
};
