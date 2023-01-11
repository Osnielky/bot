import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 import { AfterInsert } from 'typeorm';
@Entity()
export class IncomeAlert {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
 


@AfterInsert()
logInsert(){
  
  console.log('user inserted');
  
}





}