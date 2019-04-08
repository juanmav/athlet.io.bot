function filterProducts(data, stringFilter) {

    let [ productFilter, variantFilter ] = stringFilter.split(' ');

    console.log(variantFilter);

    let items = productFilter ? data.items.filter( i => i.name.toLowerCase().includes(productFilter)) : data.items;

    let labels = items.map( i => {
        let variants = i.productOptions.Sabor.choices;
        let subLabels = variants
            .filter(v => variantFilter ? v.description.toLowerCase().includes(variantFilter) : v)
            .map( v => '-- '+ v.description).join('\n');

        return '- ' + i.name + '\n' + subLabels;
    }).join('\n');
    return labels
}

module.exports = filterProducts;