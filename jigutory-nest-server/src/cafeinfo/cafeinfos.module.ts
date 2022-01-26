import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CafeinfosController } from "./cafeinfos.controller";
import { CafeinfosRepository } from "./cafeinfos.repository";
import { CafeinfosService } from "./cafeinfos.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([CafeinfosRepository])
    ],
    controllers: [CafeinfosController],
    providers: [CafeinfosService]
})
export class CafeinfosModule {}