
//│   │       └── jwt-auth.guard.ts  Guard para proteger rutas

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

