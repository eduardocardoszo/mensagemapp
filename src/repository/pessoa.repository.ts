import { Injectable, Logger } from "@nestjs/common";
import { PessoaValidation, SoapRepository } from "vivo-nodejs-commons"
import * as _ from 'lodash';
import {GenericException,MsisdnNotFoundException,RequestWS} from 'vivo-nodejs-commons';

@Injectable()
export class PessoaRepository extends SoapRepository{
    private pessoaValidation: PessoaValidation;
    
    constructor() { 
        super('http://alsb3-soa:80/Pessoa?wsdl');
        this.pessoaValidation = new PessoaValidation();
    }

    buscarListaPessoas(numeroLinha) {
        console.log("Iniciando buscar lista pessoa para a linha "+numeroLinha, "PessoaRepository - buscarListaPessoas(numeroLinha)", null)
       
        let operation = 'buscarListaPessoas';
        let args = {
            tipoFiltro:"Linha",
            filtro1: numeroLinha,
            usarFiltroExtra:"false",
            nrRegPorPagina:"2",
            nrPagina:"1"
        }

        return this.callWS(operation, args, null, null)
        .then(result => {
            this.logger.verbose(
              'Finalizado consulta buscarListaPessoas para numeroLinha ' +
                numeroLinha,
              'PessoaRepository - buscarListaPessoas(numeroLinha)',
            );
            this.logger.debug(
              'Finalizado consulta buscarListaPessoas para numeroLinha ' +
                numeroLinha,
              'PessoaRepository - buscarListaPessoas(numeroLinha)',
              { data: result },
            );
    
            result = _.get(result, 'pessoas.pessoa[0]', {});
            return result;
          }).catch(error => {
        this.logger.verbose(
          'Error consulta buscarListaPessoas para numeroLinha ' + numeroLinha,
          'PessoaRepository - buscarListaPessoas(numeroLinha)',
          { data: error },
        );

        if (error.constructor === GenericException) {
          const errorMessage = _.get(
            error.message,
            'message.soapenv:Envelope.soap:Body.soap:Fault.faultstring._text',
            error,
          );
          if (
            typeof errorMessage === 'string' &&
            (errorMessage.indexOf('15003') > -1 ||
              errorMessage.indexOf('999') > -1)
          ) {
            throw new MsisdnNotFoundException();
          }
        }
        throw error;
      }).catch(error => {
        this.logger.verbose(
          'Error consulta buscarListaPessoas para numeroLinha ' + numeroLinha,
          'PessoaRepository - buscarListaPessoas(numeroLinha)',
          { data: error },
        );

        if (error.constructor === GenericException) {
          const errorMessage = _.get(
            error.message,
            'message.soapenv:Envelope.soap:Body.soap:Fault.faultstring._text',
            error,
          );
          if (
            typeof errorMessage === 'string' &&
            (errorMessage.indexOf('15003') > -1 ||
              errorMessage.indexOf('999') > -1)
          ) {
            throw new MsisdnNotFoundException();
          }
        }
        throw error;
      })

    } 
}