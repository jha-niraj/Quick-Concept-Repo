import express from "express";

const app = express();

const products = [
    {
        id: 1,
        name: "Jeans",
        price: "100"
    },
    {
        id: 2,
        name: "Pant",
        price: "200"
    },
    {
        id: 3,
        name: "T-Shirt",
        price: "300"
    },
    {
        id: 4,
        name: "Jeans",
        price: "100"
    },
    {
        id: 5,
        name: "Shirt",
        price: "500"
    }
]

app.get("/api/products", (req, res) => {
    if(req.query.search) {
        const filteredProducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filteredProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

app.listen(3000, () => {
    console.log("Listening on port 3000---");
})