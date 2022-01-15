import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("items")
export class Item {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    ammount: number

    @Column()
    unity: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}