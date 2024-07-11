const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");


const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


customerSchema.plugin(mongoose_delete,{overrideMethods:'all'})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
