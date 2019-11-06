const db = require("../data/db-config");

module.exports = {
    get,
    getSteps,
    add,
    update,
    remove
}

function get(id){
    if (id) {
        return db('schemes').where({ id }).first()
    } else {
        return db('schemes as sc')
        .join('steps as st', "sc.id", "st.scheme_id")
        .select('sc.*')
        .count('st.instructions as scheme_steps')
        .groupBy('scheme_id');
    }
}

function getSteps(id){
    return db('schemes as sc')
        .join('steps as st', 'sc.id', 'st.scheme_id')
        .select('sc.scheme_name as Goal', 'st.step_number as Step Number', 'st.instructions')
        .where({ scheme_id: id })
}

function add(scheme){
    return db('schemes')
        .insert(scheme)
        .then(([id]) => get(id));
}

function update(id, updatedScheme){
    return db('schemes')
        .where({ id })
        .update(updatedScheme)
        .then(() => get(id));
}

function remove(id){
    return db('schemes')
        .where({ id })
        .del();
}