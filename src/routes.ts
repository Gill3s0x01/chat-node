import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
const settingsController = new SettingsController();

/** tipos de parâmetros
 * Routes params => parâmetros de rotas
 * Query params => parâmetros de filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body params => { (um objeto dentro das requisições)
 * }
 * */

routes.post("/settings", settingsController.create);

export { routes };
