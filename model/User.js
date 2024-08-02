import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },

  Orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  WishLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WishLists",
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
  hasShippingAdress: {
    type: Boolean,
    default: false,
  },

  shippingAddress: {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    address: {
      type: String,
    },

    City: {
      type: String,
    },

    postalCode: {
      type: String,
    },
    province: {
      type: String,
    },
    country: {
      type: String,
    },

    phone: {
      type: String,
    },
  },
},
{
  timestamps: true,


}
);
// compile the schema to moodel

const User = mongoose.model("User", UserSchema );

export default User;