import {Table,Column,Model,DataType,} from "sequelize-typescript"


@Table({
    tableName:"products",
    modelName:"Procucts",
    timestamps:true
})

class Product extends Model{
    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare productName:string

    @Column({
        type:DataType.TEXT  //multiple content halne maan xa vane TEXT garnu garnu parxa alli words matara xa vane string halnu parxa.
    })
    declare productDescription:string

    @Column({
        type:DataType.INTEGER
    })
    declare productPrice:number

    @Column({
       type:DataType.INTEGER
    })
    declare productTotalStockQty:number

    @Column({
        type:DataType.STRING
    })
    declare productImageUrl:string
}

export default Product