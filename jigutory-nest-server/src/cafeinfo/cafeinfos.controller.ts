import { Controller, Get, HttpCode } from "@nestjs/common";
import { CafeinfosService } from "./cafeinfos.service";


@Controller('cafe')
export class CafeinfosController {
    constructor(private cafeinfosService: CafeinfosService){}

    @Get('/list')
    @HttpCode(200)
    getCafeinfos(){
        return this.cafeinfosService.getCafeinfos();
    }

}