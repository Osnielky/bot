import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 import { AfterInsert } from 'typeorm';
@Entity()


export class IncomeAlert {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
exchange: string;
 
  @Column()
ticker: string;

@Column()
volume:number

@Column()
time:string

@Column()
close:number

@Column()
open:number

@Column()
high:number

@Column()
low :number

@Column()
rsi :number

@AfterInsert()
logInsert(){
  
  console.log('user inserted');
  
}

}

// exange
// ticket
// current price 
// volume
// relative volume
// rsi 
// las candell botton
// time frame
// 
