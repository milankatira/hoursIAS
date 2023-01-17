import express from 'express';
const router = express.Router();
import {
  addUser,
  loginUser,
  forgotPassword,
  resetPassword,
  verifyEmail,
  checkUserWithEmail,
  resendEmailController,
} from './user.controller';
import {
  validateSignup,
  validateSignIn,
  validateEmail,
  validateResetPassword,
} from './user.validator';

router.post('/signup', validateSignup, addUser);
router.post('/signin', validateSignIn, loginUser);
router.post('/forgot-password', validateEmail, forgotPassword);
router.post(
  '/reset-password/:resetPasswordToken',
  validateResetPassword,
  resetPassword,
);
router.get('/verify-email/:token', verifyEmail);

router.post('/check-user-with-email', validateEmail, checkUserWithEmail);

router.post('/resend-email', validateEmail, resendEmailController);

export default router;
