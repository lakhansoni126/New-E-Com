const mongoose = require("mongoose");

const orderItemSchema= new mongoose.schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity :{
        type:Number,
        required :true
    }

    })


// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema,types.ObjectID,
      ref:"user"
    },
    orderItems: {
      type:[orderItemSchema] ,
      required: true,
      
    },
    adress: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        required: true,
        enum:['PENDING', 'CANCELLED, DELIVERED']
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
  },
  { timestamps: ture }
);

//Export the model
module.exports = mongoose.model("order", orderSchema);
