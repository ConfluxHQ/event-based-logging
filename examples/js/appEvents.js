const Events = Object.freeze({
    UndefinedError : 'UndefinedError',

    // Database events
    DatabaseConnectionSuccess : 'DatabaseConnectionSuccess',
    DatabaseConnectionFailure : 'DatabaseConnectionFailure',
    DatabaseConnectionTimeout : 'DatabaseConnectionTimeout',

    // Parsing events
    ParseStreamUnexpectedToken : 'ParseStreamUnexpectedToken',
    ParseStreamMissingData : 'ParseStreamMissingData',
    ParseStreamSuccess : 'ParseStreamSuccess',
    
    // TOken validation events
    TokenValidationSucceeded : 'TokenValidationSucceeded',
    TokenValidationFailedInvalidParams : 'TokenValidationFailedInvalidParams',
    TokenValidationFailedInvalidDigest : 'TokenValidationFailedInvalidDigest',
    TokenValidationFailedIncorrectSHA : 'TokenValidationFailedIncorrectSHA',

    // Application lifecycle events
    AppStarted : 'AppStarted',
    AppShutdownRequested : 'AppShutdownRequested',

    // Test event
    NoOp : 'NoOp'
  });


export default {
    Events
}