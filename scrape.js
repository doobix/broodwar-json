const cheerio = require('cheerio')

var request = require('request');
request(process.argv[2] || 'https://bwapi.github.io/namespace_b_w_a_p_i_1_1_unit_types.html', function (error, response, body) {
  scrape(body);
});



function scrape(html){
    const $ = cheerio.load(html)

    const rows$ = $('.memitem .memdoc');

    const units = [];

    rows$.each((ix, row) => {
        const unitName = $($(row).find('p')[0]).text();
        const unit = {
            Name: unitName.trim()
        };

        $(row).find('table tr').each((ix,tr) => {
            const leftColumn = tr.children[0];
            const rightColumn = tr.children[1];

            const leftValue = $(leftColumn).text().trim();
            
            const links =  $(rightColumn).find('a.el');
            let rightValue = $(rightColumn).text().trim();
            if (rightValue.split(',').length > 1) {
                rightValue = rightValue.split(',');
                rightValue = rightValue.map(str => str.trim());
            }

            if (links.length > 1) {
                rightValue = []
                links.each((ix, a) => {
                    rightValue.push($(a).text());
                });
            }
            

            unit[leftValue] = rightValue;
        });
        
        units.push(unit);
    
    });
    

    console.log(JSON.stringify(units));
}
