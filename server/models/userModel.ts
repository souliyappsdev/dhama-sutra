import mongoose from 'mongoose'
import { IUser } from '../config/interface'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "ກະລຸນາເພີ່ມຊື່ຂອງທ່ານ"],
    trim: true,
    maxLength: [100, "ຊື່ຂອງທ່ານສູງສຸດເເມ່ນ 100 ຕົວອັກສອນ"],
  },
  account: {
    type: String,
    required: [true, "ກະລຸນາເພີ່ມ Email ຫຼື ເບີໂທ ຂອງທ່ານ "],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "ກະລຸນາເພີ່ມລະຫັດຜ່ານຂອງທ່ານ"],
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },
  role: {
    type: String,
    default: 'user' // admin 
  },
  type: {
    type: String,
    default: 'register' // login
  },
  rf_token: { type: String, select: false }
}, {
  timestamps: true
})

export default mongoose.model<IUser>('user', userSchema)