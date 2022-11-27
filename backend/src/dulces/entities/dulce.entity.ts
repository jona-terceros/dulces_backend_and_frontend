import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dulce {
  @PrimaryGeneratedColumn()
  _id?: number;
  @Column()
  nombre: string;
  @Column()
  marca: string;
  @Column()
  sabor: string;
  @Column()
  cantidad: number;
}
