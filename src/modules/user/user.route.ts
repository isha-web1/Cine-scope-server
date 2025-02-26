//  /create-admin, superAdmin,admin post
// /:userid- admin, superadmin put
// /:userid-  get
// /me - user own data. put
//
import express from 'express';
import { userControllers } from './user.controllers';
import validateRequest from '../../middleware/validateRequest';
import { UserValidations } from './user.validation';
// import { USER_Role } from './user.constance';

const router = express.Router();

router.post("/create-admin",validateRequest(UserValidations.createAdminValidations),userControllers.createAdmin);

router.put('/:userId',validateRequest(UserValidations.updateUserValidations),userControllers.createAdmin)
    
    
    
    
  




export const UserRoutes = router;