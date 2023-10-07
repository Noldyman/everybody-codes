import { useEffect, useRef } from "react";
import { Coordinates } from "../../models/map";
import { Marker, Popup } from "react-leaflet";

interface Props {
  coordinates: Coordinates;
  cameraName: string;
  openPopup?: boolean;
}

export const CameraMarker = ({ coordinates, cameraName, openPopup }: Props) => {
  const markerRef = useRef<{ openPopup: () => void }>();

  useEffect(() => {
    if (openPopup && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [openPopup, markerRef]);

  return (
    <Marker ref={markerRef} position={coordinates}>
      <Popup>{cameraName}</Popup>
    </Marker>
  );
};
