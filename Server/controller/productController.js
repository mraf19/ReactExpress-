const { default: mongoose } = require("mongoose");
const Product = require("../model/Product");

const getAllProduct = async (req, res) => {
	try {
		const product = await Product.find();
		res.status(200).send({
			status: 200,
			message: "Data produk berhasil diambil",
			data: product,
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error,
		});
	}
};

const getOneProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.findById(id);
		res.status(200).send({
			status: 200,
			message: "Data produk berhasil diambil",
			data: product,
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error,
		});
	}
};

const createProduct = async (req, res) => {
	try {
		const { name, price, stock, status } = req.body;
		const product = await Product.create({ name, price, stock, status });
		res.status(200).send({
			status: 200,
			message: "Data produk berhasil ditambah",
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error,
		});
	}
};

const updateProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const { name, price, stock, status } = req.body;
		const product = await Product.updateOne(
			{ _id: mongoose.Types.ObjectId(id) },
			{ name, price, stock, status },
		);
		res.status(200).send({
			status: 200,
			message: "Data produk berhasil diupdate",
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error,
		});
	}
};

const deleteProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.deleteOne({
			_id: mongoose.Types.ObjectId(id),
		});
		res.status(200).send({
			status: 200,
			message: "Data produk berhasil dihapus",
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error,
		});
	}
};

module.exports = {
	getAllProduct,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};
