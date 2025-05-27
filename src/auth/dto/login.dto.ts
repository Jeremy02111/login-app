import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty() // Documenta esta propiedad en Swagger
  username: string;

  @ApiProperty() //Documenta esta propiedad en Swagger
  password: string;
}
