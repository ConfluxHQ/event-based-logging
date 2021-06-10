# Event-based logging example: Node.js

The program uses a simple Node app with `NodeJS-example.cs`. The Event definitions are in `appEvents.js`.

# Program output

The program uses console output instead of logging to simplfy testing.

The program also outputs the list of Events to the HTTP response stream.

```
Server running at http://127.0.0.1:3000/
2021-06-10T21:05:53.836Z - DatabaseConnectionSuccess
---
Events:
	UndefinedError: UndefinedError
	DatabaseConnectionSuccess: DatabaseConnectionSuccess
	DatabaseConnectionFailure: DatabaseConnectionFailure
	DatabaseConnectionTimeout: DatabaseConnectionTimeout
	ParseStreamUnexpectedToken: ParseStreamUnexpectedToken
	ParseStreamMissingData: ParseStreamMissingData
	ParseStreamSuccess: ParseStreamSuccess
	TokenValidationSucceeded: TokenValidationSucceeded
	TokenValidationFailedInvalidParams: TokenValidationFailedInvalidParams
	TokenValidationFailedInvalidDigest: okenValidationFailedInvalidDigest
	TokenValidationFailedIncorrectSHA: TokenValidationFailedIncorrectSHA
	AppStarted: AppStarted
	AppShutdownRequested: AppShutdownRequested
	NoOp: NoOp
---
```