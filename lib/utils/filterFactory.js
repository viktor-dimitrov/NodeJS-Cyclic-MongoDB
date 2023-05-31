

exports.carFilter = (query) => {

    let queryArray = [];

    if (query) {

        if (query.where != undefined && query.where !== '' && !query.where.includes(' and ')) {
            queryArray.push((query.where));
        }

        if (query.where != undefined && query.where !== '' && query.where.includes(' and ')) {
            queryArray = (query.where.split(' and '));
        }
    }

    const splitQuery = queryArray.map(x => x.split('='));

    const filterArray = splitQuery.map((x) => {
        const obj = {};
        obj[x[0]] = x[1].replace(/["']/g, '');

        return obj;
    })
    return filterArray;

    
}