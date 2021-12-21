import nc from "next-connect";
import { allRooms } from "../../../controllers/roomControllers";


const handler = nc().get(allRooms)

export default handler;
