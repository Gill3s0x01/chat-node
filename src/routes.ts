import { getCustomRepository } from "typeorm";
import { Router } from "express";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/** tipos de parâmetros
 * Routes params => parâmetros de rotas
 * Query params => parâmetros de filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body params => { (um objeto dentro das requisições)
 * }
 * */

routes.post("/settings", async (request, response) => {
  const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username,
  });

  await settingsRepository.save(settings);

  return response.json(settings);
});

export { routes };
