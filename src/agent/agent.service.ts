import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent, AentDocument } from './schema/agent.schema';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentService {
  constructor(
    @InjectModel(Agent.name) private readonly agentModel: Model<AentDocument>,
  ) {}
  create(createAgentDto: CreateAgentDto): Promise<Agent> {
    const createdAgent = new this.agentModel(createAgentDto);
    return createdAgent.save();
  }

  findAll(): Promise<Agent[]> {
    return this.agentModel.find().exec();
  }

  findOne(id: string) {
    return this.agentModel.findById(id).exec();
  }

  update(id: string, updateAgentDto: UpdateAgentDto): Promise<Agent> {
    return this.agentModel
      .findByIdAndUpdate(id, updateAgentDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.agentModel.findByIdAndDelete(id);
  }
}
