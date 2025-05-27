import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
//Los decoradores de Swagger para documentar errores se implementan principalmente en:

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
//Revisión final, despliegue y entrega de documentación

   async validateUser(username: string, pass: string): Promise<any> {
    console.log('🟡 Intentando login con:', username, pass);

    const user = await this.usersService.findByUsername(username);
    console.log('🟢 Usuario encontrado:', user);

    const isMatch = user ? await bcrypt.compare(pass, user.password) : false;
    console.log('🔐 ¿Contraseña válida?:', isMatch);

    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
  const payload = {
    username: user.username,
    role: user.role, // Esto debe estar incluido
    sub: user.id,
  };

  return {
    access_token: this.jwtService.sign(payload),
  };
}

}
