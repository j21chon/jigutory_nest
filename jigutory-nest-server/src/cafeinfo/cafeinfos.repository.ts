import { Cafeinfos } from "src/entities/Cafeinfos";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Cafeinfos)
export class CafeinfosRepository extends Repository<Cafeinfos> {
    
    async getCafeinfos(){
        const result = await this.find();
        return result;
    }
}


