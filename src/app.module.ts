import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
                host: 'ep-aged-rice-a5tw080a.us-east-2.aws.neon.tech',
                port: 5432,
                username: 'healthband_owner',
                password: 'mdGXwj3Ue2Ta',
                database: 'healthband',
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false, // Встановіть false, якщо використовуєте самопідписаний сертифікат
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
