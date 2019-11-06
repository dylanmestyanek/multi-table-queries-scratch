
exports.seed = function(knex) {
      return knex('steps').insert([
        {scheme_id: 1, step_number: 1, instructions: 'Acquire the poison vile from the kobald cave.'},
        {scheme_id: 1, step_number: 2, instructions: 'Sneak to the castle and inject the darnassian bleu with the poison from the vile.'},
        {scheme_id: 1, step_number: 3, instructions: 'RUN! You must not get caught poisoning the meal!'},
        {scheme_id: 2, step_number: 1, instructions: 'First, grab your favorite hoodie, any black kind should do.'},
        {scheme_id: 2, step_number: 2, instructions: 'Now, storm the left door, on the west side of the building. Head to the back right corner, I will meet you there.'},
        {scheme_id: 2, step_number: 3, instructions: 'Sneak past the staff door, and raid the office. Take the safe on your way out!'},
        {scheme_id: 3, step_number: 1, instructions: 'Get a match.'},
        {scheme_id: 3, step_number: 2, instructions: 'Strike it.'},
        {scheme_id: 3, step_number: 3, instructions: 'Run.'},
        {scheme_id: 4, step_number: 1, instructions: 'Join my FREE!!!! webinar tonight and I\'ll show you how to become a millionare!!!!!!'},
        {scheme_id: 4, step_number: 2, instructions: 'Okay, now that you\'re here, let me waste your time for several hours, teaching you absolutely nothing about what I promised!'},
        {scheme_id: 4, step_number: 3, instructions: 'Finally! Here is the pitch! Pay me your entire life savings, for absolutely no knowledge in exchange! How awesome! Thanks for coming!'},
      ]);
};
