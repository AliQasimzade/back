const { Listings } = require("../Model/Listings.js");

 const GetListings = async (req, res) => {
  const listings = await Listings.find();
  res.json(listings);
};


module.exports = {
  GetListings

}
