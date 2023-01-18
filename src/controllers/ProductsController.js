const ProductsModel = require('../models/ProductsModel');

exports.CreateProduct = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })
}


exports.ReadProduct = (req, res) => {
    let Query = {}
    let Projection = "ProductName ProductCode ProductImage UnitPrice Quantity TotalPrice"
    ProductsModel.find(Query, Projection, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}

exports.UpdateProduct = (req, res) => {
    let id = req.params.id;
    let Query = {_id: id}
    let reqBody = req.body;

    ProductsModel.updateOne(Query, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}

exports.DeleteProduct = (req, res) => {
    let id = req.params.id;
    let Query = {_id: id};

    ProductsModel.deleteOne(Query, (err, data) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}