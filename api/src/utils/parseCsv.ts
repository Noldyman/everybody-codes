export const parseCsv = (csv: string, colsWithNumber: string[]) => {
  const delimeter = ";";

  const rows = csv.split("\n");
  const headers = rows.shift().split(delimeter);
  const numOfColums = headers.length;

  const parsedCsv = rows.map((row) => {
    const values = row.split(delimeter);

    const data: { [key: string]: string | number } = {};
    for (let i = 0; i < numOfColums; i++) {
      const header = headers[i];
      const value = values[i];

      if (colsWithNumber.includes(header)) {
        data[header] = parseFloat(value);
      } else {
        data[header] = value;
      }
    }

    return data;
  });

  return parsedCsv;
};
