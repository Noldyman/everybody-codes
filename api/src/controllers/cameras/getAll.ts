import fs from "fs";
import { RequestHandler } from "express";
import { parseCsv } from "../../utils/parseCsv";

export const getAll: RequestHandler = async (_, res) => {
  const data = fs.readFileSync(require.resolve("../../../../data/cameras-defb.csv"), "utf-8");
  const parsedData = parseCsv(data, ["Latitude", "Longitude"]);

  res.send(parsedData);
};
