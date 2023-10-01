import app from "./app";

const port = 3001;

export default app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
