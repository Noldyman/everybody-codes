import { Camera, CameraType } from "../models/camera";
import { sortCameras } from "../utils/sortCameras";

interface Props {
  cameras: Camera[];
  onHighlightCamera: (cameraId: number) => void;
}

export const CameraTable = ({ cameras, onHighlightCamera }: Props) => {
  const sortedCameras = sortCameras(cameras);

  const subTables: { title: string; type: CameraType; key: string }[] = [
    { title: "Cameras 3", type: "dividableByThree", key: "column3" },
    { title: "Cameras 5", type: "dividableByFive", key: "column5" },
    { title: "Cameras 3 & 5", type: "dividableByThreeAndFive", key: "column15" },
    { title: "Other cameras", type: "other", key: "columnOther" },
  ];

  const blockColumnHeaders = ["Number", "Name", "Latitude", "Longitude"];

  const highlightCamera = (cameraId: number) => {
    onHighlightCamera(cameraId);
  };

  return (
    <div id="container--side-scroll">
      <table className="camera-table">
        <tbody>
          <tr>
            {subTables.map((subTable) => (
              <td key={subTable.key}>
                <table className="camera-table__sub-table">
                  <thead>
                    <tr>
                      <th className="camera-table__sub-table-header" colSpan={4}>
                        {subTable.title}
                      </th>
                    </tr>
                    <tr className="camera-table__header">
                      {blockColumnHeaders.map((header) => (
                        <th key={header + subTable.key}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCameras[subTable.type].map((cam) => (
                      <tr
                        key={cam.id}
                        className="camera-table__row camera-table__row--clickable"
                        onClick={() => highlightCamera(cam.id)}
                      >
                        <td className="camera-table__camera-number">{cam.number}</td>
                        <td>{cam.name}</td>
                        <td>{cam.latitude}</td>
                        <td>{cam.longitude}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
