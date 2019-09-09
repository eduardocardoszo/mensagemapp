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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const vivo_nodejs_commons_1 = require("vivo-nodejs-commons");
const _ = require("lodash");
const vivo_nodejs_commons_2 = require("vivo-nodejs-commons");
let PessoaRepository = class PessoaRepository extends vivo_nodejs_commons_1.SoapRepository {
    constructor() {
        super('http://alsb3-soa:80/Pessoa?wsdl');
        this.pessoaValidation = new vivo_nodejs_commons_1.PessoaValidation();
    }
    buscarListaPessoas(numeroLinha) {
        console.log("Iniciando buscar lista pessoa para a linha " + numeroLinha, "PessoaRepository - buscarListaPessoas(numeroLinha)", null);
        let operation = 'buscarListaPessoas';
        let args = {
            tipoFiltro: "Linha",
            filtro1: numeroLinha,
            usarFiltroExtra: "false",
            nrRegPorPagina: "2",
            nrPagina: "1"
        };
        return this.callWS(operation, args, null, null)
            .then(result => {
            this.logger.verbose('Finalizado consulta buscarListaPessoas para numeroLinha ' +
                numeroLinha, 'PessoaRepository - buscarListaPessoas(numeroLinha)');
            this.logger.debug('Finalizado consulta buscarListaPessoas para numeroLinha ' +
                numeroLinha, 'PessoaRepository - buscarListaPessoas(numeroLinha)', { data: result });
            result = _.get(result, 'pessoas.pessoa[0]', {});
            return result;
        }).catch(error => {
            this.logger.verbose('Error consulta buscarListaPessoas para numeroLinha ' + numeroLinha, 'PessoaRepository - buscarListaPessoas(numeroLinha)', { data: error });
            if (error.constructor === vivo_nodejs_commons_2.GenericException) {
                const errorMessage = _.get(error.message, 'message.soapenv:Envelope.soap:Body.soap:Fault.faultstring._text', error);
                if (typeof errorMessage === 'string' &&
                    (errorMessage.indexOf('15003') > -1 ||
                        errorMessage.indexOf('999') > -1)) {
                    throw new vivo_nodejs_commons_2.MsisdnNotFoundException();
                }
            }
            throw error;
        }).catch(error => {
            this.logger.verbose('Error consulta buscarListaPessoas para numeroLinha ' + numeroLinha, 'PessoaRepository - buscarListaPessoas(numeroLinha)', { data: error });
            if (error.constructor === vivo_nodejs_commons_2.GenericException) {
                const errorMessage = _.get(error.message, 'message.soapenv:Envelope.soap:Body.soap:Fault.faultstring._text', error);
                if (typeof errorMessage === 'string' &&
                    (errorMessage.indexOf('15003') > -1 ||
                        errorMessage.indexOf('999') > -1)) {
                    throw new vivo_nodejs_commons_2.MsisdnNotFoundException();
                }
            }
            throw error;
        });
    }
};
PessoaRepository = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], PessoaRepository);
exports.PessoaRepository = PessoaRepository;
//# sourceMappingURL=pessoa.repository.js.map