import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey123',
    });
  }

 async validate(payload: any) {
  return {
    userId: payload.sub,
    username: payload.username,
    role: payload.role,
  };
  }
}

//│   │   │   └── jwt.strategy.ts   👈 Estrategia JWT


/*

 async validate(payload: any) {
  return {
    userId: payload.sub,
    username: payload.username,
    role: payload.role,
  };
  }
}

*/
