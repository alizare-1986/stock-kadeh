import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
 
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: [ "xiaomi", "apple", "samsung","otherbrand"],
      required: true,
    },
    description: {
      type: [String],
      default: [],
    },
   
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Product = models.Product || model("Product",productSchema)
export default Product
