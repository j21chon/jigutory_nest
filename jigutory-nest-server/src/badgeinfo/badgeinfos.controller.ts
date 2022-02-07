import { Controller, Get } from "@nestjs/common";
import { BadgeinfosService } from "./badgeinfos.service";


@Controller('badge')
export class BadgeinfosController {
    constructor(private badgeinfosService: BadgeinfosService){}

    @Get('/list')
    getBadgeinfos(){
        return this.badgeinfosService.getBadgeinfos();
    }
}