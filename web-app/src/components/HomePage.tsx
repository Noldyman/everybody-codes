import { useEffect, useState } from "react";
import { Camera } from "../models/camera";
import { getAllCameras } from "../services/cameraService";
import { Map } from "./map/Map";
import { MapContainer } from "react-leaflet";
import { Source } from "./Source";
import { CameraTable } from "./CameraTable";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [highlightedCamId, setHighlightedCamId] = useState<number>();

  useEffect(() => {
    const fetchCameras = async () => {
      setLoading(true);
      const newCameras = await getAllCameras();
      setCameras(newCameras);
      setLoading(false);
    };

    fetchCameras();
  }, []);

  const highlightCamera = (cameraId: number) => {
    setHighlightedCamId(cameraId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <MapContainer id="mapid">
        <Map cameras={cameras} highlightedCamId={highlightedCamId} />
      </MapContainer>

      <Source />

      <CameraTable cameras={cameras} onHighlightCamera={highlightCamera} />
    </>
  );
};
