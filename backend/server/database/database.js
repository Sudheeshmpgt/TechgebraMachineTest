const mongoose = require('mongoose');

const Connect = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://sudheeshm:sudheeshm@cluster0.ibrda.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = Connect;