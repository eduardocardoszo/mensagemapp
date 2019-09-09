"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mensagens_controller_1 = require("./mensagens/mensagens.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mensagens_service_1 = require("./mensagens/mensagens.service");
const mensagem_entity_1 = require("./mensagens/entities/mensagem.entity");
const pessoa_repository_1 = require("./repository/pessoa.repository");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'nest',
                password: 'nest',
                database: 'sendmeapp_db',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([mensagem_entity_1.Mensagem])
        ],
        controllers: [app_controller_1.AppController, mensagens_controller_1.MensagensController],
        providers: [app_service_1.AppService, mensagens_service_1.MensagensService, pessoa_repository_1.PessoaRepository],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map