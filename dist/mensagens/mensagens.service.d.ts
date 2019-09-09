import { Mensagem } from './entities/mensagem.entity';
import { Repository } from 'typeorm';
import { CreateMensagemDto } from './dto/create-mensagens-dto';
import { PessoaRepository } from '../repository/pessoa.repository';
export declare class MensagensService {
    private readonly mensagemRepository;
    private readonly pessoaRepository;
    constructor(mensagemRepository: Repository<Mensagem>, pessoaRepository: PessoaRepository);
    getAll(): Promise<Mensagem[]>;
    getMensagem(idMensagem: number): Promise<Mensagem>;
    createMensagem(mensagemNova: CreateMensagemDto): Promise<Mensagem>;
    updateMensagem(idMensagem: number, mensagemAtualizar: CreateMensagemDto): Promise<Mensagem>;
    deleteMensagem(idMensagem?: number, nick?: string): Promise<any>;
    teste(idTeste: number): Promise<object>;
}
