import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column({ default: 'user' })
  role: string;
}



//Análisis de Entidad User y Migraciones 🗄️

/*
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ default: true })
  isActive: boolean;
}


Para las migraciones, es necesario:

Configurar TypeORM para migraciones en typeorm.config.ts:
export const typeOrmConfig: TypeOrmModuleOptions = {
  // ...existing config...
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
  migrationsRun: true
}

//Definir y documentar el modelo de datos (diagrama ER).
*/
