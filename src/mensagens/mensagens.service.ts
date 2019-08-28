import { Injectable } from '@nestjs/common';
import { Mensagem } from './entities/mensagem.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateMensagemDto } from './dto/create-mensagens-dto';


@Injectable()
export class MensagensService {

    constructor(
        @InjectRepository(Mensagem)
        private readonly mensagemRepository: Repository<Mensagem>
    ) { }

    async getAll(): Promise<Mensagem[]> {
        return await this.mensagemRepository.find();
    }

    async createMensagem(mensagemNova: CreateMensagemDto): Promise<Mensagem> {

        const nova = new Mensagem;

        nova.nick = mensagemNova.nick;
        nova.mensagem = mensagemNova.mensagem;

        return this.mensagemRepository.save(nova);
    }

    async updateMensagem(idMensagem: number, mensagemAtualizar: CreateMensagemDto): Promise<Mensagem> {
        const mensagemUpdate = await this.mensagemRepository.findOne(idMensagem);
        mensagemUpdate.mensagem = mensagemAtualizar.mensagem;
        mensagemUpdate.nick = mensagemAtualizar.nick;

        return await this.mensagemRepository.save(mensagemUpdate);
    }

    async deleteMensagem(idMensagem?: number, nick?: string): Promise<any> {
        let res;
        if (idMensagem) {
             res = await this.mensagemRepository.delete(idMensagem)
             console.log('Deletado por ID!')
        } if (nick) {
            res = await this.mensagemRepository.createQueryBuilder().delete().where("nick= :nick", { nick: nick }).execute()
            console.log('Deletado por NICK!')
            }
        return res;
    }
}
