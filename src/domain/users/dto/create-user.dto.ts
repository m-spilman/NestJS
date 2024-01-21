import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

/*

In NestJS, a DTO (Data Transfer Object) is a design pattern used to define and encapsulate 
the data that is exchanged between different layers of an application. 

In the context of NestJS, DTOs are often used to represent the structure of data that is sent 
over the network in requests and responses. They help to define a clear contract between the
client and server by specifying the format of data being exchanged.

Using DTOs provides several benefits, including:
Validation: DTOs can include validation rules, ensuring that the received data meets certain criteria.
Type Safety: TypeScript is often used in NestJS, and DTOs help enforce type safety by clearly defining the data types expected.
Documentation: DTOs serve as a form of documentation, making it clear what data is expected in requests and what data will be returned in responses.
Loose Coupling: DTOs help decouple different parts of the application. The client and server can evolve independently as long as they adhere 
to the agreed-upon DTO structure.
*/
export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsPhoneNumber('US')
  readonly phone: string;
  @IsString()
  readonly password: string;
}
