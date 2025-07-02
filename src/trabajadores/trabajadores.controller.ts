import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('trabajadores')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}

  @Get()
  findAllActive() {
    return this.trabajadoresService.findAllActive();
  }

  @Get('jerarquia/:id')
  findJerarquia(@Param('id') id: string) {
    return this.trabajadoresService.findJerarquia(+id);
  }
}

