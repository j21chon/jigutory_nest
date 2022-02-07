import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BadgeinfosRepository } from "./badgeinfos.repository";


@Injectable()
export class BadgeinfosService{
    constructor(
        @InjectRepository(BadgeinfosRepository)
        private badgeinfosRepository: BadgeinfosRepository
    ){}

    getBadgeinfos(){
        return this.badgeinfosRepository.getBadgeinfos();
    }
} 