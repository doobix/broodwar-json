#! /bin/bash
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_weapon_types.html" > json/weapons.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_upgrade_types.html" > json/upgrades.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_unit_types.html" > json/units.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_races.html" > json/races.json