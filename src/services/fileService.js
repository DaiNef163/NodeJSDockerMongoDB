const path = require("path");


const uploadSingleFile = async (fileObject) => {
  let uploadPath = path.resolve(__dirname, '../public/images/' + fileObject.name);

  //get image extension
  let extName = path.extname(fileObject.name)
//get image's name
  let basename = path.basename(fileObject.name , extName)

  //create final name

  

  let finalName = `${basename}-${Date.now()}`
  let finalPath = `${uploadPath}/${finalName}`
  try {
    let results = await fileObject.mv(finalPath);
  } catch (error) {
    return {
      status: "access",
      path: 'link-image',
      error: error,
    };
  }
};

const uploadMultipleFile = () => {};

module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
