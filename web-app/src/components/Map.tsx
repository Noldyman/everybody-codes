import { Camera } from "../models/camera";
import { useMap, TileLayer, Marker, Popup } from "react-leaflet";

interface Props {
  cameras: Camera[];
}

export const Map = ({ cameras }: Props) => {
  const map = useMap();
  map.setView([52.094, 5.1115], 13);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cameras.map((cam) => (
        <Marker position={[cam.latitude, cam.longitude]}>
          <Popup>{cam.name}</Popup>
        </Marker>
      ))}
    </>
  );
};
