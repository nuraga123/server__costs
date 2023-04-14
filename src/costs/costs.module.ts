import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Cost, CostsSchema } from 'src/schemas/costs.schemas';
import { CostsService } from './costs.service';
import { CostsController } from './costs.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostsSchema }]),
    AuthModule,
  ],
  controllers: [CostsController],
  exports: [CostsService],
  providers: [CostsService],
})
export class CostsModule {}
