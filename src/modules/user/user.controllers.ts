import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./user.services";

const createAdmin = catchAsync(async (req, res) => {
    const result = await UserServices.createAdminIntoDB(req.body);
  
    res.status(200).json({
      success: true,
      message: "Admin is created successfully!",
      data: result,
    });
  });


  export const userControllers = {
    createAdmin,
    
  };