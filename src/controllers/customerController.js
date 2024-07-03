const Customer = require("../models/customer");
const {
  createCustomerService,

} = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");
const path = require("path");

const getDisplayCustomer = async (req, res) => {
  // const [users] = await connection.query("SELECT * FROM Users");
  const customer = await Customer.find();
  res.render("customerView.ejs", { customer: customer });
};

const postCreateCustomer = async (req, res) => {
  try {
    let { name, address, email, phone, description } = req.body;
    let imageURL = "";

    console.log("check body", req.body);
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("khong co file nao dc tai len");
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }
    console.log("check img", imageURL);

    let customerData = {
      name,
      address,
      email,
      phone,
      description,
      image: imageURL,
    };
    let customer = await createCustomerService(customerData);
    res.redirect("/v1/api/customer");
  } catch (error) {
    console.log(error);
  }
};

const getUpdateCustomer = async (req, res) => {
  let id = req.params.id;
  console.log("check id cuistomer ", id);

  const customer = await Customer.findById(id);
  res.render("editCustomer", { customer: customer });
};



const postUpdateCustomer = async (req, res) => {
  try {
    let id = req.body.id;
    let { name, address, email, phone, description } = req.body;
    let imageURL = "";

    console.log("check id", id);
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("khong co file nao dc tai len");
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }
    console.log("check img", imageURL);


    let customer = await Customer.updateOne(
      { _id: id },
      {
        name: name,
        address: address,
        email: email,
        phone: phone,
        description: description,
        // image: imageURL,
      }
    );
    console.log(customer);
    res.redirect("/v1/api/customer");
  } catch (error) {
    console.log("check erreooro", error);
    res.status(500).send(error);
  }
};
const getDeleteCustomer = async (req, res) => {
  let id = req.params.id;
  console.log("check id cuistomer ", id);

  const customer = await Customer.findById(id);
  res.render("deleteCustomer", { customer: customer });
};
const postDeleteCustomer = async (req,res) =>{
  let id = req.body.id;
  console.log(id);
  let customer = await Customer.deleteOne({_id:id}).exec();
  res.redirect("/v1/api/customer")
  console.log("check deletee",customer);
}


module.exports = {
  postCreateCustomer,
  getDisplayCustomer,
  getUpdateCustomer,
  postUpdateCustomer,
  getDeleteCustomer,
  postDeleteCustomer
};
