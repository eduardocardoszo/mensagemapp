"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_mensagens_dto_1 = require("./dto/create-mensagens-dto");
const mensagens_service_1 = require("./mensagens.service");
let MensagensController = class MensagensController {
    constructor(mensagemServices) {
        this.mensagemServices = mensagemServices;
    }
    create(createMensagemDto, response) {
        this.mensagemServices.createMensagem(createMensagemDto).then(mensagem => {
            response.status(common_1.HttpStatus.CREATED).json(mensagem);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na criacao da mensagem!' });
        });
    }
    getAll(response) {
        this.mensagemServices.getAll().then(mensagemList => {
            response.status(common_1.HttpStatus.OK).json(mensagemList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na recuperacao das mensagens!' });
        });
    }
    update(createMensagemDto, response, idMensagem) {
        this.mensagemServices.updateMensagem(idMensagem, createMensagemDto).then(mensagem => {
            response.status(common_1.HttpStatus.OK).json(mensagem);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na atualizacao da mensagens!' });
        });
    }
    delete(response, idMensagem, nick) {
        this.mensagemServices.deleteMensagem(idMensagem, nick).then(res => {
            response.status(common_1.HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na remocao da mensagens!' });
        });
    }
    getByID(idMensagem) {
        return this.mensagemServices.teste(idMensagem);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mensagens_dto_1.CreateMensagemDto, Object]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "getAll", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Res()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mensagens_dto_1.CreateMensagemDto, Object, Object]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "update", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()), __param(1, common_1.Query('id')), __param(2, common_1.Query('nick')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MensagensController.prototype, "getByID", null);
MensagensController = __decorate([
    common_1.Controller('mensagens'),
    __metadata("design:paramtypes", [mensagens_service_1.MensagensService])
], MensagensController);
exports.MensagensController = MensagensController;
//# sourceMappingURL=mensagens.controller.js.map