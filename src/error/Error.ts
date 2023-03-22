/**
 * Explizit referenzierte Fehler
 */
export const UnknownErrorCode = "-1";
export const BadRequestMissingParameterCode = "40001";
export const BadRequestBadParameterCode = "40002";
export const TokenUndefinedErrorCode = "40101";
export const TokenExpiredErrorCode = "40102";
// name is coming from jsonwebtoken library
export const JsonWebTokenError = "40103";
export const UnknownClientOrBadIpCode = "40104";
export const BadTimeForRequestTryLaterCode = "42501"
export const CastleConfigErrorCode = "66601";
export const DevErrorCode = "77701";
export const SqlDataErrorCode = "88801";

export const ErrorCodes = {
  [UnknownErrorCode]: {
    name: "UnknownError",
    description: "Used, if a new or unknwon error name was used.",
    apiStatus: 500,
  },
  [BadRequestMissingParameterCode]: {
    name: "BadRequestMissingParameter",
    description: "One or more needed parameters are undefined.",
    apiStatus: 400,
  },
  [BadRequestBadParameterCode]: {
    name: "BadRequestBadParameter",
    description: "One or more parameters are not correct.",
    apiStatus: 400,
  },
  [TokenUndefinedErrorCode]: {
    name: "TokenUndefinedError",
    description: "Token not specified in request.",
    apiStatus: 401,
  },
  [TokenExpiredErrorCode]: {
    name: "TokenExpiredError",
    description: "Token is too old.",
    apiStatus: 401,
  },
  [JsonWebTokenError]: {
    name: "JsonWebTokenError",
    description: "Token could not be verified.",
    apiStatus: 401,
  },
  [UnknownClientOrBadIpCode]: {
    name: "UnknownClientOrBadIpError",
    description: "Client is unknown or running on not authorized ip.",
    apiStatus: 401,
  },
  [BadTimeForRequestTryLaterCode]: {
    name: "BadTimeForRequestTryLaterError",
    description: "Service cannot be used now. Try later.",
    apiStatus: 425,
  },
  [CastleConfigErrorCode]: {
    name: "CastleConfigError",
    description: "Bad configuration of the castle system.",
    apiStatus: 500,
  },
  [DevErrorCode]: {
    name: "DevError",
    description: "This should not happen. Needs a software update.",
    apiStatus: 500,
  },
  [SqlDataErrorCode]: {
    name: "SqlDataError",
    description:
      "Used for bad data. Original error comes from DB Server. Check error no in error message.",
    apiStatus: 500,
  },
};

export type ErrorCode = keyof typeof ErrorCodes;

const newNameToCodeMap: Record<string, ErrorCode> = {};

Object.keys(ErrorCodes).forEach((code: ErrorCode) => {
  const { name } = ErrorCodes[code];
  newNameToCodeMap[name] = code;
});

export const NameToCodeMap = newNameToCodeMap;

export const getErrorCode = (name: string): ErrorCode =>
  NameToCodeMap[name] || "-1";

export const getApiStatus = (code: ErrorCode) => ErrorCodes[code].apiStatus;

export const getSqlErrorCode = (errno: number) => `sql-${errno}`;
