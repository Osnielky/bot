
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class IncomeAlertDto {
  // Validates for a non-empty string
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public exchange: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public ticker: string;
  
  
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public volume: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public time: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public close: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public open: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public high: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public low: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public plot_0: number;






  // Gets only validated if it's part of the request's body
 /* @IsString()
  @IsNotEmpty()
  @IsOptional()
  public email: string;

  // Validates for an integer
  @IsNumber()
  public age: number;

  // Validates for an integer
  @IsBoolean()
  public acceptedTOS: boolean;

  // Validates for a non-empty integer array
  @IsArray()
  @IsNumber({ allowNaN: false }, { each: true })
  @ArrayMinSize(1)
  public nums: number[];*/
}

 