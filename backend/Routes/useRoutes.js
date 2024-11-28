import express from 'express';
const router =  express.Router();
import { authUser, registerUser,logoutUser,GetUserProfile,updateUserProfile } from '../controllers/useControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
     .route('/profile')
     .get(protect, GetUserProfile)
     .put(protect, updateUserProfile);
 
export default router;