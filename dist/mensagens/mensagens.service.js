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
const mensagem_entity_1 = require("./entities/mensagem.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const pessoa_repository_1 = require("../repository/pessoa.repository");
let MensagensService = class MensagensService {
    constructor(mensagemRepository, pessoaRepository) {
        this.mensagemRepository = mensagemRepository;
        this.pessoaRepository = pessoaRepository;
    }
    async getAll() {
        return await this.mensagemRepository.find();
    }
    async getMensagem(idMensagem) {
        return await this.mensagemRepository.findOne(idMensagem);
    }
    async createMensagem(mensagemNova) {
        const nova = new mensagem_entity_1.Mensagem;
        nova.nick = mensagemNova.nick;
        nova.mensagem = mensagemNova.mensagem;
        return this.mensagemRepository.save(nova);
    }
    async updateMensagem(idMensagem, mensagemAtualizar) {
        const mensagemUpdate = await this.mensagemRepository.findOne(idMensagem);
        mensagemUpdate.mensagem = mensagemAtualizar.mensagem;
        mensagemUpdate.nick = mensagemAtualizar.nick;
        return await this.mensagemRepository.save(mensagemUpdate);
    }
    async deleteMensagem(idMensagem, nick) {
        let res;
        if (idMensagem) {
            res = await this.mensagemRepository.delete(idMensagem);
            console.log('Deletado por ID!');
        }
        if (nick) {
            res = await this.mensagemRepository.createQueryBuilder().delete().where("nick= :nick", { nick: nick }).execute();
            console.log('Deletado por NICK!');
        }
        return res;
    }
    teste(idTeste) {
        return this.pessoaRepository.buscarListaPessoas(idTeste);
    }
};
MensagensService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(mensagem_entity_1.Mensagem)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        pessoa_repository_1.PessoaRepository])
], MensagensService);
exports.MensagensService = MensagensService;
//# sourceMappingURL=mensagens.service.js.map