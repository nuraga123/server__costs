import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Document } from 'mongoose';

export type UserDocument = User | Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
  _id: ObjectId | string;
}

export const UsersSchema = SchemaFactory.createForClass(User);
