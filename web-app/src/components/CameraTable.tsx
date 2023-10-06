import { Camera, CameraType } from "../models/camera";
import { sortCameras } from "../utils/sortCameras";

interface Props {
  cameras: Camera[];
}

export const CameraTable = ({ cameras }: Props) => {
  const sortedCameras = sortCameras(cameras);

  const tableBlocks: { title: string; type: CameraType; columnId: string }[] = [
    { title: "Cameras 3", type: "dividableByThree", columnId: "column3" },
    { title: "Cameras 5", type: "dividableByFive", columnId: "column5" },
    { title: "Cameras 3 & 5", type: "dividableByThreeAndFive", columnId: "column15" },
    { title: "Other cameras", type: "other", columnId: "columnOther" },
  ];

  const blockColumnHeaders = ["Number", "Name", "Latitude", "Longitude"];

  return (
    <div id="cameraTableContainer">
      <table id="cameraTable">
        <tbody>
          <tr>
            {tableBlocks.map((block) => (
              <td>
                <table id={block.columnId}>
                  <thead>
                    <tr>
                      <th colSpan={4}>{block.title}</th>
                    </tr>
                    <tr>
                      {blockColumnHeaders.map((header) => (
                        <th>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCameras[block.type].map((cam) => (
                      <tr>
                        <td>{cam.cameraId}</td>
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
