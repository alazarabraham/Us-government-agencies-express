const db = require("./conn");
class UsAgency {
    constructor(name,founded,administration,located, employees, executive,role, existant){
        this.name = name;
        this.founded = founded;
        this.administration =  administration;
        this.located = located; 
        this.employees = employees;
        this.executive = this.executive;
        this.role = role;
        this.existant = this.existant;
    }

static async getAll(){
    try{
        const response = await db.any('select * from usagency;');
        return response;
    }catch(error){
        return error.message;
    }

};
}
module.exports = UsAgency;