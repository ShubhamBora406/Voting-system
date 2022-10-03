import express from "express";
import cors from "cors";
import helmet from "helmet";

const voting = express();


//application middlewares
voting.use(express.json());
voting.use(express.urlencoded({extended: false}));
voting.use(helmet());
voting.use(cors());
voting.get("/",(req, res) => res.json({ messege: "Setup SUCCESS"}));

voting.listen(4000, ()=> console.log("Server is Running "));