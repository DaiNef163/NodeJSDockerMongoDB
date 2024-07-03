const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    await Customer.create({
      name: customerData.name,
      address: customerData.address,
      email: customerData.email,
      phone: customerData.phone,
      description: customerData.description,
      image: customerData.image,
    });
  } catch (error) {
    console.log(error);
  }
};

// const updateCustomerService = async (req, res, customerData) => {
//   let id = req.params.id;
//   console.log("check id update", id);
//   try {
//     await Customer.updateOne(
//       { _id: id },
//       {
//         name: customerData.name,
//         address: customerData.address,
//         email: customerData.email,
//         phone: customerData.phone,
//         description: customerData.description,
//         image: customerData.image,
//       }
//     );
//   } catch (error) {
//     console.log("check erreooro", error);
//   }
// };

// (function (req, res) {
//   let id = req.body.id;
//   console.log("check id update", id);
// })();

module.exports = {
  createCustomerService,
  // updateCustomerService,
};
