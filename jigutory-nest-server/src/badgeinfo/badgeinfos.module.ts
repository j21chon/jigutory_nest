import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BadgeinfosController } from "./badgeinfos.controller";
import { BadgeinfosRepository } from "./badgeinfos.repository";
import { BadgeinfosService } from "./badgeinfos.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([BadgeinfosRepository])
    ],
    controllers: [BadgeinfosController],
    providers: [BadgeinfosService]
})
export class BadgeinfosModule {}
