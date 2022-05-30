import { SetupServer } from "@src/server";
import supertest from "supertest";

//rodar antes de todos testes da aplicação 
beforeAll(()=> {
    const server = new SetupServer
    server.init();

    global.testRequest = supertest(server.getApp())
})