export const errorMessage = {
  internalServerError: 'Internal Server Error',
  internalServerErrorWentWrong: 'Internal Server Error,something went wrong',
  alreadyHaveAccount: 'Looks like you already have an account.',
  inCorrectPassword:
    'Either your email address or password is incorrect.  Please try again.',
  userNotFound:
    'We Couldn’t Find Your Email Address. Please contact us at hello@revolt.tv',
  linkExpired: 'Link expired',
  notFound: (data: string) => `${data} not found`,
  alreadyHaveinList: 'already have in mylist',
  mylistNotFound: 'mylist not found',
  alreadyHaveinDownload: 'already have in download',
  downloadNotFound: 'download not found',
  alereadyHaveAccount:
    'Looks like you already have an account. Please Sign In.',
  alreadyVerify: 'Your Email Has Already Been Verified',
};
