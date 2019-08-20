import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Mensagem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: String;
    
    @Column()
    mensagem: String;
}
