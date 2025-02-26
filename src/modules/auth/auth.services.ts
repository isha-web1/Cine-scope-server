import { USER_Role } from "../user/user.constance";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

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
  
    
  
   
  
    
    };


  export const AuthServices = {
    register,
    login
  };