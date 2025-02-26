import { model, Schema } from "mongoose";
import { USER_Role, USER_STATUS } from "./user.constance";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: Object.keys(USER_Role),
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: 0,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: Object.keys(USER_STATUS),
      default: USER_STATUS.ACTIVE,
    },
    passwordChangedAt: {
      type: Date,
    },
  });


  export const User = model<TUser>("User", userSchema);