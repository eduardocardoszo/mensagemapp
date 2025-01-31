import { Mensagem } from './entities/mensagem.entity';
import { Repository } from 'typeorm';
import { CreateMensagemDto } from './dto/create-mensagens-dto';
export declare class MensagensService {
    private readonly mensagemRepository;
    constructor(mensagemRepository: Repository<Mensagem>);
    getAll(): Promise<Mensagem[]>;
    createMensagem(mensagemNova: CreateMensagemDto): Promise<Mensagem>;
    updateMensagem(idMensagem: number, mensagemAtualizar: CreateMensagemDto): Promise<Mensagem>;
    deleteMensagem(idMensagem?: number, nick?: string): Promise<any>;
}
