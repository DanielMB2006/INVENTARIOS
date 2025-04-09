import {Router} from "express";
import { methodHTTP as categoriasController} from "../controllers/categorias.controllers.js";
const router = Router();

//get
router.get("/", categoriasController.getCategorias)

export default router;