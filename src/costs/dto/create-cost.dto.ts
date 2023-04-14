import { IsNotEmpty, IsOptional } from 'class-validator';

// Data Transfer Object)
export class CreateCostDto {
  @IsNotEmpty()
  readonly text: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly date: Date;

  @IsOptional()
  readonly userId: string;
}
