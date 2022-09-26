import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  clientCode: string;

  @Prop()
  cpfClient: string;

  @Prop()
  clientName: string;

  @Prop()
  titleNumber: string;

  @Prop()
  emissionDate: Date;

  @Prop()
  dueDate: Date;

  @Prop()
  competencyDate: string;

  @Prop()
  titleSituation: string;

  @Prop()
  openTitleValue: string;

  @Prop()
  titleInterest: number;

  @Prop()
  titleTicket: number;

  @Prop()
  titleInterestTicket: number;

  @Prop()
  titleDiscount: number;

  @Prop()
  totalTitleValue: number;

  @Prop()
  titleCodeType: string;

  @Prop()
  titlePayer: string;

  @Prop()
  originDocument: string;

  @Prop()
  transaction: string;

  @Prop()
  observation: string;

  @Prop()
  portadorCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
