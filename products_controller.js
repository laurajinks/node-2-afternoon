module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        db.create_product(req.body)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    },

    getOne: (req, res) => {
        console.log(req.params);
        const db = req.app.get('db');
        db.read_product(req.params)
        .then((product) => {
            res.status(200).json(product)
        })
        .catch(err => console.log(err))
    },

    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_products()
        .then((products) => {
            res.status(200).json(products)
        })
        .catch(err => console.log(err))
    },

    update: (req, res) => {
        // console.log(req.params);
        const db = req.app.get('db');
        db.update_product([req.params.product_id, req.query.desc])
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        db.delete_product(req.params.product_id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    },
}