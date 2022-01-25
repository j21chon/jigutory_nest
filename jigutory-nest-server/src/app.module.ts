import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ["src/entities/*.entity{.ts,.js}"],
      // entities: [__dirname + '**/*.entity{.ts,.js}'],
      synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE)
    })
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

// 새롭게 db를 만들려면 이렇게 하고 직접 entity를 하나하나 작성해서 synchronize해야지 테이블이 생겨나지만,
// 이미 있는 db 테이블을 typeorm으로 적용하는 것은 직접 entity를 만들지 않고 이미 생성된 테이블을 entity
// 파일로 만들어주는 typeorm-model-generator 라이브러리를 사용하면 됨
// npm i -g typeorm-model-generator
// typeorm-model-generator -h server_ip -d database_name -p server_port -u server_id -x server_pw -e db_종류 -o entity_생성할_folder_경로 
// 위가 안되면 앞에 npx 붙이기
// -h : host, 연결할 서버 ip

// -d : database, 연결할 db 이름

// -p : port, 연결할 서버 port

// -u : user, db 사용자 id

// -x : db 사용자 패스워드

// -e : engine, db 종류 (mssql, postgres, mysql, mariadb, oracle, sqlite)

// -o : out, entity 파일 생성할 폴더 경로
