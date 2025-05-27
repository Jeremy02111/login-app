import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

//Revisión de seguridad y buenas prácticas

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({   //expiración de módulo:
      secret: 'secretKey123', // Usa algo más seguro en producción
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
