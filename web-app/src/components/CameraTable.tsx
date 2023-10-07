import { Camera, CameraType } from "../models/camera";
import { sortCameras } from "../utils/sortCameras";

interface Props {
  cameras: Camera[];
  onHighlightCamera: (cameraId: number) => void;
}

export const CameraTable = ({ cameras, onHighlightCamera }: Props) => {
  const sortedCameras = sortCameras(cameras);

  const tableBlocks: { title: string; type: CameraType; columnId: string }[] = [
    { title: "Cameras 3", type: "dividableByThree", columnId: "column3" },
    { title: "Cameras 5", type: "dividableByFive", columnId: "column5" },
    { title: "Cameras 3 & 5", type: "dividableByThreeAndFive", columnId: "column15" },
    { title: "Other cameras", type: "other", columnId: "columnOther" },
  ];

  const blockColumnHeaders = ["Number", "Name", "Latitude", "Longitude"];

  const highlightCamera = (cameraId: number) => {
    onHighlightCamera(cameraId);
  };

  return (
    <div id="camera-table-container">
      <table className="camera-table">
        <tbody>
          <tr>
            {tableBlocks.map((block) => (
              <td className="camera-table__sub-table-container">
                <table className="camera-table__sub-table" id={block.columnId}>
                  <thead>
                    <tr>
                      <th className="camera-table__sub-table-header" colSpan={4}>
                        {block.title}
                      </th>
                    </tr>
                    <tr className="camera-table__header">
                      {blockColumnHeaders.map((header) => (
                        <th>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCameras[block.type].map((cam) => (
                      <tr
                        className="camera-table__row camera-table__clickable-row"
                        onClick={() => highlightCamera(cam.cameraId)}
                      >
                        <td className="camera-table__camera-id">{cam.cameraId}</td>
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
