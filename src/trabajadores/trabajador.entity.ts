import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Trabajador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cargo: string;

  @Column({ type: 'int', nullable: true })
  id_jefe: number | null;

  @Column({ type: 'tinyint', width: 1, default: 1 })
  estado_trabajador: number;

  @ManyToOne(() => Trabajador, { nullable: true })
  @JoinColumn({ name: 'id_jefe' })
  jefe: Trabajador;
}
