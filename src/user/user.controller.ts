import { Request, Response } from 'express';
import {
  addUserService,
  loginServices,
  forgotPasswordService,
  resetPasswordService,
  verifyEmailService,
  checkUserServices,
  sendEmailVarificationService,
} from './user.service';
import { response } from '../../constant/response';

export const addUser = async (req: Request, res: Response) => {

  try {

    const result = await addUserService(req.body);
    return res.status(201).json({
      status: true,
      message: response.signup,
      result,
    });

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const loginUser = async (req: Request, res: Response) => {

  try {

    const { email, password } = req.body;
    const result = await loginServices(email, password);
    return res.status(200).json({
      status: true,
      message: response.login,
      result,
    });

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const resendEmailController = async (req: Request, res: Response) => {

  try {

    const { email } = req.body;
    await sendEmailVarificationService(email);
    return res.status(200).json({
      status: true,
      message: response.ResentEmail,
    });

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const checkUserWithEmail = async (req: Request, res: Response) => {

  try {

    const { email } = req.body;
    await checkUserServices(email);
    return res.status(200).json({
      status: true,
    });

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const forgotPassword = async (req: Request, res: Response) => {

  try {

    await forgotPasswordService(req.body.email);
    return res.status(200).json({
      status: true,
      message: response.forgotPassword,
    });

  } catch (error) {

    console.log(error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const resetPassword = async (req: Request, res: Response) => {

  try {

    const { resetPasswordToken } = req.params;
    const { password } = req.body;
    const result = await resetPasswordService(resetPasswordToken, password);
    return res.status(201).json({
      status: true,
      message: response.resetPassword,
      result,
    });

  } catch (error) {

    console.log(error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const verifyEmail = async (req: Request, res: Response) => {

  try {

    const { token } = req.params;
    const result = await verifyEmailService(token);
    return res.status(201).json({
      status: true,
      message: response.verifyEmail,
      result,
    });

  } catch (error) {

    console.log(error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};
