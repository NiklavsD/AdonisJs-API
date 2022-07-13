// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone"
import { schema } from '@ioc:Adonis/Core/Validator'
// import { scope } from "@ioc:Adonis/Lucid/Orm";
import Item from 'App/Models/Item'
// import PinoPretty from "pino-pretty";

export default class ItemsController {
    // GET method - lists all items
    public async index({}: HttpContext){
        return Item.all();
    }
    // POST method - stores new item
    public async store({request, response}: HttpContext){
        const itemSchema = schema.create({
            name: schema.string(),
        })
        
        const payload = await request.validate({ schema: itemSchema})        

        const item = await Item.create(payload)

        response.status(201)

        return item
    }
    // DELETE method - destroys specified /items/{id} item 
    public async destroy({params, response}: HttpContext){
        const item = await Item.findOrFail(params.id)
        response.status(204)
        return item.delete();
    }
}
