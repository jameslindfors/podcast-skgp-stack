import app from "./App";
import { port } from "./config/environment";

const start = async () => {
  try {
    app.listen(port);
    console.log(`🛰  GraphQL server running at port: ${port}`);
  } catch {
    console.log("Not able to run GraphQL server");
  }
};

start();
