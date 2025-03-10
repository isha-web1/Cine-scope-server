import config from "../../config";
import { USER_Role } from "../user/user.constance";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { isPasswordMatched } from "./auth.utils";
import jwt from "jsonwebtoken";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const register = async (payload: TUser): Promise<any> => {
    //user existence check
    const user = await User.findOne({ email: payload.email });
  
    if (user) {
      throw new Error("User already exists");
    }
  
    //set user role
    payload.role = USER_Role.USER;
  
    //create user
    const newUser = await User.create(payload);
  
    return newUser;
  };



  const login = async (payload: TLoginUser) => {
    const user = await User.findOne({ email: payload.email }).select("+password");
  
    if (!user) {
      throw new Error("User not found");
    }
  
    if (user.status === "BLOCKED") {
      throw new Error("User is blocked");
    }
  
    const passwordMatch = await isPasswordMatched(
        payload.password,
        user.password
      );
  
      if (!passwordMatch) {
        throw new Error("Password not matched");
      }

      const jwtPayload = {
        email: user.email,
        role: user.role,
      };
      
      const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
        expiresIn: config.jwt_access_expires_in,
      });
  
    
    };


  export const AuthServices = {
    register,
    login
  };