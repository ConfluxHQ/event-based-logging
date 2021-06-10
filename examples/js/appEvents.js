const Events = Object.freeze({
    UndefinedError : 'UndefinedError',
    DatabaseConnectionSuccess : 'DatabaseConnectionSuccess',
    DatabaseConnectionFailure : 'DatabaseConnectionFailure',
    DatabaseConnectionTimeout : 'DatabaseConnectionTimeout',
    ParseStreamUnexpectedToken : 'ParseStreamUnexpectedToken',
    ParseStreamMissingData : 'ParseStreamMissingData',
    ParseStreamSuccess : 'ParseStreamSuccess',
    TokenValidationSucceeded : 'TokenValidationSucceeded',
    TokenValidationFailedInvalidParams : 'TokenValidationFailedInvalidParams',
    TokenValidationFailedInvalidDigest : 'okenValidationFailedInvalidDigest',
    TokenValidationFailedIncorrectSHA : 'TokenValidationFailedIncorrectSHA',
    AppStarted : 'AppStarted',
    AppShutdownRequested : 'AppShutdownRequested',
    NoOp : 'NoOp'
  });


export default {
    Events
}