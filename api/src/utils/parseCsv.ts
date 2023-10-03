import { Camera } from "../models/camera";

export const parseCsv = (csv: string): Camera[] => {
  const delimeter = ";";
  const cameraIdRegex = new RegExp(/UTR-CM-([0-9]{3})/);

  const rows = csv.split("\n");
  rows.shift();
  const filteredRows = rows.filter((r) => !r.startsWith("ERROR"));

  const parsedData = filteredRows.map((row): Camera => {
    const cameraIdExecArr = cameraIdRegex.exec(row);
    const cameraId = cameraIdExecArr[1];
    const values = row.split(delimeter);

    return {
      cameraId,
      name: values[0],
      latitude: parseFloat(values[1]),
      longitude: parseFloat(values[2]),
    };
  });

  return parsedData;
};
