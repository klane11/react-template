import em from './errorMessages';
import code from './statusCodes';

const errorHandler = (statusCode) => {
  switch (statusCode) {
    case (code.STATUS_GENERIC_ERROR):
      return em.STATUS_GENERIC_ERROR;
    case (code.APPLICATION_UNAUTHORIZED):
      return em.APPLICATION_UNAUTHORIZED;
    case (code.ACCESS_TOKEN_NOT_FOUND):
      return em.ACCESS_TOKEN_NOT_FOUND;
    case (code.EMAIL_NOT_FOUND):
      return em.EMAIL_NOT_FOUND;
    case (code.PASSWORD_DOES_NOT_MATCH):
      return em.PASSWORD_DOES_NOT_MATCH;
    case (code.DUPLICATE_EMAIL):
      return em.DUPLICATE_EMAIL;
    case (code.NOT_FOUND):
      return em.NOT_FOUND;
    case (code.EMAIL_PASSWORD_INCORRECT):
      return em.EMAIL_PASSWORD_INCORRECT;
    case (code.MUST_BE_LOGGED_IN):
      return em.MUST_BE_LOGGED_IN;
    case (code.MISSING_FIELD):
      return em.MISSING_FIELD;
    case (code.DO_NOT_HAVE_PERMISSION):
      return em.DO_NOT_HAVE_PERMISSION;
    default:
      break;
  }
};

export default errorHandler;
