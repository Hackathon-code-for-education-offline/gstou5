import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import router from "./routs/Users-router"
// import { connect } from "./mysql/mysql-start";
dotenv.config()

const app = express(); 
const PORT = process.env.PORT || 5001

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// await connect()

app.use(express.json());
app.use(cors(corsOptions));
app.use(router)



app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});




 
