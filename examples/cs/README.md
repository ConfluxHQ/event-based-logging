# Event-based logging example: C#

The program uses a simple C# console app with `CSharp-example.cs` containing the `main()` method. The Event definitions are in `ApplicationEvents.cs`.

# Program output

The program uses console output instead of logging to simplfy testing.

```
AppStarted
---
Events:
	UndefinedError
	DatabaseConnectionSuccess
	DatabaseConnectionFailure
	DatabaseConnectionTimeout
	ParseStreamUnexpectedToken
	ParseStreamMissingData
	ParseStreamSuccess
	TokenValidationSucceeded
	TokenValidationFailedInvalidParams
	TokenValidationFailedInvalidDigest
	TokenValidationFailedIncorrectSHA
	AppStarted
	AppShutdownRequested
	NoOp
---
AppShutdownRequested

```
