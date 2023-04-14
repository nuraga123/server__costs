import { UpdateCostDto } from './dto/update-cost.dto';
import { CreateCostDto } from './dto/create-cost.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cost, CostsDocument } from './../schemas/costs.schemas';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CostsService {
  constructor(
    @InjectModel(Cost.name) private costsModel: Model<CostsDocument>,
  ) {}

  async findAll(): Promise<Cost[]> {
    return this.costsModel.find();
  }

  async findOne(id: string): Promise<Cost> {
    return this.costsModel.findOne({ _id: id });
  }

  async create(createCostDto: CreateCostDto): Promise<CostsDocument> {
    const createdCost = new this.costsModel(createCostDto);
    return createdCost.save();
  }

  async update(updateCostDto: UpdateCostDto, id: string): Promise<Cost> {
    await this.costsModel.updateOne(
      { _id: id },
      { $set: { ...updateCostDto } },
    );

    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.costsModel.deleteOne({ _id: id });
  }
}
