const mongoose = require("mongoose");
const {Schema} = require("mongoose");

main().then(() => console.log("Connection successfully")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            city: String,
            location: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = User({
        username: "sherlockhomes",
        addresses: [
            {
                location: "221B Baker Street",
                city: "London"
            }]
    });

    user1.addresses.push({location: "932 WallStreet",city:"London"});

    let result = await user1.save();
    console.log(result);
};

addUsers();