import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScenarioController } from './scenario.controller';
import { ScenarioService } from './scenario.service';
import { ScenarioNode } from './schemas/scenario-nodes.schema';
import { ScenarioResponse } from './schemas/scenario-responses.schema';
import { Scenario } from './schemas/scenario.schema';

@Module({
  imports: [TypeOrmModule.forFeature([Scenario, ScenarioNode, ScenarioResponse])],
  controllers: [ScenarioController],
  providers: [ScenarioService],
})
export class ScenarioModule {}