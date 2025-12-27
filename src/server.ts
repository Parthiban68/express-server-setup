import app from "./app";

const port: number = Number(process.env.PORT);

const serverWatch = () => {
  console.log(`Server is up and Running on port : ${port}`);
};

app.listen(port, serverWatch);
