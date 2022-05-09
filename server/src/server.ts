import 'dotenv/config';
import { app } from "./app";

app.listen(process.env.SERVER_PORT, () => console.log(`http://localhost:${process.env.SERVER_PORT}`))