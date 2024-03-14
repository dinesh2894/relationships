const mongoose = require("mongoose");
const {Schema} = require("mongoose");

main().then(() => console.log("Connection successfully")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const Order = mongoose.model("Order", orderSchema);

const addOrders = async () => {
    let res = await Order.insertMany(
        [{item: "Samosa", price: 12},
        {item: "Chips", price: 20},
        {item: "Chocolate", price: 40}]
    );
    console.log(res);
}

addOrders();