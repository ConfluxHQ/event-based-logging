using System;

namespace ApplicationEvents
{

    enum Event
    {
        UndefinedError = 0,

        // Database events
        DatabaseConnectionSuccess = 10000,
        DatabaseConnectionFailure = 10001,
        DatabaseConnectionTimeout = 10002,

        // Stream parsing events
        ParseStreamUnexpectedToken = 20014,
        ParseStreamMissingData = 20015,
        ParseStreamSuccess = 20016,

        // Token validation events
        TokenValidationSucceeded = 30033,
        TokenValidationFailedInvalidParams = 30034,
        TokenValidationFailedInvalidDigest = 30035,
        TokenValidationFailedIncorrectSHA = 30036,

        // Application lifecycle events
        AppStarted = 40047,
        AppShutdownRequested = 40048,

        // etc.

        NoOp = int.MaxValue
    }


}