import { Camera } from "../models/camera";

interface Props {
  cameras: Camera[];
}

export const CameraTable = ({ cameras }: Props) => {
  return (
    <main>
      <table id="cameraTableContainer">
        <tbody>
          <tr>
            <td>
              <table id="column3">
                <thead>
                  <tr>
                    <th colSpan={4}>Cameras 3</th>
                  </tr>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </td>
            <td>
              <table id="column5">
                <thead>
                  <tr>
                    <th colSpan={4}>Cameras 5</th>
                  </tr>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </td>
            <td>
              <table id="column15">
                <thead>
                  <tr>
                    <th colSpan={4}>Cameras 3 &amp; 5</th>
                  </tr>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </td>
            <td>
              <table id="columnOther">
                <thead>
                  <tr>
                    <th colSpan={4}>Other Cameras</th>
                  </tr>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
