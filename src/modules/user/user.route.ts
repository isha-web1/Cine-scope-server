//  /create-admin, superAdmin,admin post
// /:userid- admin, superadmin put
// /:userid-  get
// /me - user own data. put
//
import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

router.post('/create-admin', userControllers.createAdmin)




export const UserRoutes = router;