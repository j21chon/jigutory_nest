import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeinfosModule } from './cafeinfo/cafeinfos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'jigutory.closjql9emea.us-east-2.rds.amazonaws.com', //process.env.DATABASE_HOST,
      port: 13306, //Number(process.env.DATABASE_PORT),
      username: 'admin', // process.env.DATABASE_USER,
      password: 'dotenv123', // process.env.DATABASE_PASSWORD,
      database: 'jigutory', // process.env.DATABASE_NAME,
      entities: ["dist/**/*.js"],
      // entities에는 만약 dist 폴더가 있다면 dist 폴더의 entities 폴더에 있는 파일들을 불러와야 한다
      // .ts entities를 불러오면 안된다 (만약 dist가 없다면 상관없을 듯)
      // entities: ["src/entities/Cafeinfos.ts"],
      // entities: ["src/entities/*{.ts,.js}"],
      // entities: [__dirname + '**/*.entity{.ts,.js}'],
      synchronize: true //Boolean(process.env.DATABASE_SYNCHRONIZE)
    }),
    CafeinfosModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}