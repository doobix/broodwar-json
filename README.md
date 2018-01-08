# broodwar-json
JSON description of Starcraft Broodwar units / abilities / weapons

Scraped json files can be found in the json folder. Denormalized json data ( to 2 levels ) can be found in denormalized-json.

Commands for generating the files are such:

```bash
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_weapon_types.html" > json/weapons.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_upgrade_types.html" > json/upgrades.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_unit_types.html" > json/units.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_races.html" > json/races.json
node scrape.js "https://bwapi.github.io/namespace_b_w_a_p_i_1_1_tech_types.html" > json/abilities.json
```

Manual post processing was necessary.
