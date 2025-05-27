import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | null> {
  return this.userRepository.findOne({ where: { username } });
}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, full_name } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
//Revisar manejo de contraseñas (hash, salt).
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      full_name,
      role: 'user',
    });

    return this.userRepository.save(user);
  }
 async seedAdmin(): Promise<string> {
  const existingAdmin = await this.userRepository.findOne({
    where: { username: 'admin' },
  });

  if (existingAdmin) {
    await this.userRepository.remove(existingAdmin); // 🔥 Eliminar el existente
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = this.userRepository.create({
    username: 'admin',
    password: hashedPassword,
    full_name: 'Administrador del sistema',
    role: 'admin',
  });

  await this.userRepository.save(admin);

  return 'Usuario admin creado o actualizado exitosamente';
}
async findAll(): Promise<any[]> {
  const users = await this.userRepository.find();
  return users.map(({ password, ...rest }) => rest); // Oculta la contraseña
}
}

