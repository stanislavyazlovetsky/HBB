import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { randomBytes } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(username: string, password: string): Promise<User | string> {
    const existingUser = await this.userRepository.findOne({ where: { username } });
    if (existingUser) {
      return 'User already exists';
    }
    const token = randomBytes(16).toString('hex');
    const user = this.userRepository.create({ username, password, token });
    return this.userRepository.save(user);
  }

  async login(username: string, password: string): Promise<User | string> {
    const user = await this.userRepository.findOne({ where: { username, password } });
    if (!user) {
      return 'Invalid credentials';
    }
    return user;
  }
}
