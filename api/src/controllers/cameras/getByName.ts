import fs from "fs";
import { RequestHandler } from "express";
import { parseCsv } from "../../utils/parseCsv";

export const getByName: RequestHandler = async (req, res) => {
  const data = fs.readFileSync(require.resolve("../../../../data/cameras-defb.csv"), "utf-8");
  const parsedData = parseCsv(data);

  const nameFilter = req.params.name;
  const filteredData = parsedData.filter((cam) =>
    cam.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  res.send(filteredData);
};
