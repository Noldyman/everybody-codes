import { useEffect } from "react";
import { MapView } from "../../models/map";
import { Camera } from "../../models/camera";
import { useMap, TileLayer } from "react-leaflet";
import { CameraMarker } from "./CameraMarker";

const initialView: MapView = {
  coordinates: [52.094, 5.1115],
  zoom: 13,
};

interface Props {
  cameras: Camera[];
  highlightedCamId?: number;
}

export const Map = ({ cameras, highlightedCamId }: Props) => {
  const map = useMap();

  useEffect(() => {
    map.setView(initialView.coordinates, initialView.zoom);
  }, [map]);

  useEffect(() => {
    if (!highlightedCamId) return;
    const highlightZoom = 18;
    const camera = cameras.find((c) => c.id === highlightedCamId);

    if (!camera) return;

    map.flyTo([camera?.latitude, camera?.longitude], highlightZoom);
  }, [map, highlightedCamId, cameras]);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cameras.map((cam) => (
        <CameraMarker
          key={cam.id}
          coordinates={[cam.latitude, cam.longitude]}
          cameraName={cam.name}
          openPopup={cam.id === highlightedCamId}
        />
      ))}
    </>
  );
};
