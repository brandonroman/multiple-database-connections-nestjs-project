import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConnADefault } from './entities/conn-a-default.entity';
import { ConnBDefault } from './entities/conn-b-default.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ConnADefault, 'CONN-A')
    private connADefaultRepository: Repository<ConnADefault>,
    @InjectRepository(ConnBDefault, 'CONN-B')
    private connBDefaultRepository: Repository<ConnBDefault>,
  ) {}

  async connectionA(query: string): Promise<any> {
    if (!query)
      throw new ConflictException(`Query param 'query' should not be empty`);
    try {
      const queryExecution = await this.connADefaultRepository.query(query);
      return queryExecution;
    } catch (e) {
      throw new ConflictException(e.message);
    }
  }

  async connectionB(query: string): Promise<any> {
    if (!query)
      throw new ConflictException(`Query param 'query' should not be empty`);
    try {
      const queryExecution = await this.connBDefaultRepository.query(query);
      return queryExecution;
    } catch (e) {
      throw new ConflictException(e.message);
    }
  }
}
