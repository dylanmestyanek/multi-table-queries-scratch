const db = require("../data/db-config");

module.exports = {
    get,
    getSteps,
    add,
    update,
    remove
}

function get(id){
    return id 
        ? db('schemes').where({ id }).first()
        : db('schemes');
}

function getSteps(id){
    
}

function add(scheme){

}

function update(id, updatedScheme){

}

function remove(id){

}