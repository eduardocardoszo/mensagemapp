import { CreateMensagemDto } from './dto/create-mensagens-dto';
import { MensagensService } from './mensagens.service';
export declare class MensagensController {
    private mensagemServices;
    constructor(mensagemServices: MensagensService);
    create(createMensagemDto: CreateMensagemDto, response: any): void;
    getAll(response: any): void;
    update(createMensagemDto: CreateMensagemDto, response: any, idMensagem: any): void;
    delete(response: any, idMensagem?: any, nick?: any): void;
    getByID(idMensagem: any): Promise<object>;
}
