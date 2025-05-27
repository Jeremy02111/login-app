import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty() // Documenta esta propiedad en Swagger
  username: string;

  @ApiProperty() //Documenta esta propiedad en Swagger
  password: string;
}

//aqui se hace el Desarrollo de endpoints de autenticación
