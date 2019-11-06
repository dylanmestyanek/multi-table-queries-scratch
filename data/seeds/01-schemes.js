exports.seed = function(knex) {
      return knex('schemes').insert([
        { scheme_name: "Poison the President's dinner"},
        { scheme_name: "Steal from the local Kroger"},
        { scheme_name: "Burn down the freeway"},
        { scheme_name: "jOiN tHE SiX FiguRE cLubB!!!"},
      ]);
};
