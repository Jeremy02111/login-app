import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trabajador } from './trabajador.entity';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async findAllActive(): Promise<Trabajador[]> {
    const query = `
      SELECT id, nombre, cargo 
      FROM trabajador 
      WHERE estado_trabajador = 1 
      ORDER BY nombre ASC;
    `;
    return this.trabajadorRepository.query(query);
  }

  async findJerarquia(id: number): Promise<any[]> {
    const query = `
      WITH RECURSIVE jerarquia AS (
        SELECT id, nombre, cargo, id_jefe, 1 as nivel 
        FROM trabajador 
        WHERE id = ?
        UNION ALL
        SELECT t.id, t.nombre, t.cargo, t.id_jefe, j.nivel + 1 
        FROM trabajador t 
        INNER JOIN jerarquia j ON t.id = j.id_jefe
      )
           SELECT nivel, nombre, cargo 
           FROM jerarquia ORDER BY nivel;
    `;
    return this.trabajadorRepository.query(query, [id]);
  }
}

