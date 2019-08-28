import { Controller, Post, Body, Get, Put, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { CreateMensagemDto } from './dto/create-mensagens-dto';
import { updateExpression } from '@babel/types';
import { MensagensService } from './mensagens.service';
import { response } from 'express';


@Controller('mensagens')
export class MensagensController {
    constructor (private mensagemServices:MensagensService) {
    }

    @Post()
    create (@Body() createMensagemDto: CreateMensagemDto, @Res() response) {
        this.mensagemServices.createMensagem(createMensagemDto).then(mensagem =>{
            response.status(HttpStatus.CREATED).json(mensagem)
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensagem: 'Erro na criacao da mensagem!'})
        }
        )}

    @Get()
    getAll(@Res() response){
        this.mensagemServices.getAll().then(mensagemList => {
            response.status(HttpStatus.OK).json(mensagemList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensagem: 'Erro na recuperacao das mensagens!'})
        }
        )}

    @Put(':id')
    update (@Body() createMensagemDto: CreateMensagemDto, @Res() response, @Param('id') idMensagem){
        this.mensagemServices.updateMensagem(idMensagem, createMensagemDto).then(mensagem =>{
            response.status(HttpStatus.OK).json(mensagem)
        }
        ).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensagem: 'Erro na atualizacao da mensagens!'})
        }
        )}

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensagem){
        this.mensagemServices.deleteMensagem(idMensagem).then(res => {
             response.status(HttpStatus.OK).json(res)
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensagem: 'Erro na remocao da mensagens!'})
        })
    }

}


