const ProductModel = require("../model/productSchema");

const addNewProduct = async (req, res) => {
  try {
    const {title, description, price, discountPercentage, rating, brand, category, image} = req.body
    if(title && description && price && discountPercentage && rating && brand && category && image){
        const product = new ProductModel({
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          discountPercentage: req.body.discountPercentage,
          rating: req.body.rating,
          brand: req.body.brand,
          category: req.body.category,
          image: req.body.image,
        });
        const newProduct = await product.save()
        res.send({message:'Product added Successfully'})
    }else{
        res.send({message:'Please enter all details'})
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductDetails = async (req, res) => {
    try{
        const products = await ProductModel.find({})
        if(products?.length != 0){
            res.send({message:'Ok', products:products})
        }else{
            res.status(404).send({message:'Data not found'})
        }
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = {addNewProduct, getProductDetails};
