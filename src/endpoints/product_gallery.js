
const products = ["Card 1","Card 2","Card 3"]

export function show_gallery(req, res) {
    
    res.json(products);
}

export function show_product(req, res) {
    
    const product = products.filter((product) => {
        return product === req.params.name
    })
    res.json(product[0]);
}