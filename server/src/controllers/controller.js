const NaamOjiModel = require("../models/naamOjiSchema");

const getAllNaamOjis = async (req, res) => {
  try {
    const naamOjis = await NaamOjiModel.find();
    res.status(200).json(naamOjis);
  } catch (error) {
    console.error("Error getting naamOjis:", error);
    res.status(500).json({ message: "Unable to get naamOjis. Please try again." });
  }
};

const receiveNaamOji = async (req, res) => {
  const { name, naamOji } = req.body;
  console.log("Received naamOji:", naamOji);
  try {
    const newNaamOji = new NaamOjiModel({ name, naamOji });
    console.log("Created model:", newNaamOji);
    await newNaamOji.save();
    res.status(201).json({ message: "NaamOji received successfully!" });
  } catch (error) {
    console.error("Error saving naamOji:", error);
    res
      .status(500)
      .json({ message: "Unable to receive NaamOji. Please try again." });
  }
};

module.exports = { getAllNaamOjis, receiveNaamOji };
