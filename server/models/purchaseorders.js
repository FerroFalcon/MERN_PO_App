import mongoose from "mongoose";

const newpurchaseorderSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: String,
  },
  po: { type: String, required: true },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdby: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export default new mongoose.model("purchaseorders", newpurchaseorderSchema);
