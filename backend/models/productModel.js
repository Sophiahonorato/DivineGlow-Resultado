import db from "../config/db.config.js";


const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String
})

export default mongoose.model("Product", productSchema)
