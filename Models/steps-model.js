const db = require("../data/db-config");

module.exports = {
    get,
    add,
    update,
    remove
}

function get(id){
    if (id){
        return db('steps').where({ id }).first();
    } else {
        return db('steps');
    }
}

function add(step){
    return db('steps')
        .insert(step)
        .then(([id]) => get(id));
}

function update(id, updatedStep){
    return db('steps')
        .where({ id })
        .update(updatedStep)
        .then(() => get(id));
}

function remove(id){
    return db('steps')
        .where({ id })
        .del();
}