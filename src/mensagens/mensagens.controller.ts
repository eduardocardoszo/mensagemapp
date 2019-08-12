import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensagemDto } from './dto/create-mensagens-dto';
import { updateExpression } from '@babel/types';


@Controller('mensagens')
export class MensagensController {

    @Post()
    create (@Body() createMensagemDto: CreateMensagemDto) {
        return 'Mensagem criada!';
    }

    @Get()
    getAll(){
        return 'Lista de Mensagens!';
    }

    @Put(':id')
    update (){
        return 'Mensagem atualizada!';
    }

    @Delete(':id')
    delete(@Body() deleteMensagemDto: CreateMensagemDto){
        return 'Mensagem deletada!'
    }

}


