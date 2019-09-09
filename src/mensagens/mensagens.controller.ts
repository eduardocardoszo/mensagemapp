import { Controller, Post, Body, Get, Put, Delete, Param, Res, HttpStatus, Query } from '@nestjs/common';
import { CreateMensagemDto } from './dto/create-mensagens-dto';
import { updateExpression } from '@babel/types';
import { MensagensService } from './mensagens.service';
import { response } from 'express';
import { TestingModule } from '@nestjs/testing';


@Controller('mensagens')
export class MensagensController {
    constructor(private mensagemServices: MensagensService) {
    }

    @Post()
    create(@Body() createMensagemDto: CreateMensagemDto, @Res() response) {
        this.mensagemServices.createMensagem(createMensagemDto).then(mensagem => {
            response.status(HttpStatus.CREATED).json(mensagem)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na criacao da mensagem!' })
        }
        )
    }

    @Get()
    getAll(@Res() response) {
        this.mensagemServices.getAll().then(mensagemList => {
            response.status(HttpStatus.OK).json(mensagemList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na recuperacao das mensagens!' })
        }
        )
    }

    @Put(':id')
    update(@Body() createMensagemDto: CreateMensagemDto, @Res() response, @Param('id') idMensagem) {
        this.mensagemServices.updateMensagem(idMensagem, createMensagemDto).then(mensagem => {
            response.status(HttpStatus.OK).json(mensagem)
        }
        ).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na atualizacao da mensagens!' })
        }
        )
    }

    @Delete()
    delete(@Res() response, @Query('id') idMensagem?, @Query('nick') nick?){ 
            this.mensagemServices.deleteMensagem(idMensagem, nick).then(res => {
                response.status(HttpStatus.OK).json(res)
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensagem: 'Erro na remocao da mensagens!' })
            })

    }

    @Get(':id')
    getByID(@Param('id') idMensagem){
        //return this.mensagemServices.getMensagem(idMensagem)
        return this.mensagemServices.teste(idMensagem)
    }
}