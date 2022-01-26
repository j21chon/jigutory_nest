import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CafeinfosRepository } from "./cafeinfos.repository";


@Injectable()
export class CafeinfosService {
    constructor(
        @InjectRepository(CafeinfosRepository)
        private cafeinfosRepository: CafeinfosRepository
    ){}

    getCafeinfos(){
        return this.cafeinfosRepository.getCafeinfos();
    }
}