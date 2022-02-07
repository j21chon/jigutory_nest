import { Badgeinfos } from "src/entities/Badgeinfos";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Badgeinfos)
export class BadgeinfosRepository extends Repository<Badgeinfos> {

    async getBadgeinfos(){
        const result = await this.find();
        return result;
    }
}