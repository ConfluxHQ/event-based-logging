# Event-based logging

Event-based logging helps to clarify operability of software systems. This repo has examples and principles.

> Copyright © 2018-2021 [Conflux](https://confluxdigital.net/) - Licenced under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) ![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/3.0/88x31.png)

## Definition

> Event-based logging uses compile-time `enum`-based event definitions when logging to make runtime diagnosis and team-member onboarding clearer and easier. 

## Principles

Event-based logging is designed to be a simple, expressive approach to exploring failure modes and real-world operational behaviour for all kinds of software.

1. Have a single, definitive list of application events in code
2. Use exactly one of these event codes in the log message when logging
3. Use an `enum` type or equivalent for compile-time checking of uniqueness and searchability
4. Get code-completion from the IDE or REPL when choosing an event to log
5. Simple SHIFT-select or double-click on an event name to copy/paste into a log search tool - no manual selection of multiple words for copy/paste
6. Avoid the need for a single cross-team events library by scoping events to specific services.

## Examples

A key aim is to "lean on the compiler" for compile-time verification of the Event types when logging. This in turn means we get code-completion when choosing an Event type during logging:

```JavaScript

// Nodejs example for event-based logging

const Events = Object.freeze({
    UndefinedError : 'UndefinedError',
    FailedToConnectToDatabase : 'FailedToConnectToDatabase',
    UnexpectedTokenInParseStream : 'UnexpectedTokenInParseStream',
  });
  
  // console.log(Events.Fai --> auto-complete 

```

![Screenshot of event-based logging showing code completion when choosing an event type during logging](examples/event-based-logging--nodejs-enum-crop.png)

### Service-scoped events

It is very useful to be able to search for similar events across multiple services, especially in large, distributed systems with multiple teams and services. Searching for `*FailedToConnect*` in a log search tool to find all service connection failures is a powerful observability technique.

However, avoid the temptation to create a single, cross-team library containing all possible events; this introduces coupling between services that introduce blocking dependencies between teams. Instead, use service-scoped (or team-scoped) event names. For example, the Payments team may have this set of events defined:

```JavaScript

// PaymentsService events

const Events = Object.freeze({
    PaymentsUndefinedError : 'PaymentsUndefinedError',
    PaymentsFailedToConnectToDatabase : 'PaymentsFailedToConnectToDatabase',
    PaymentsUnexpectedTokenInParseStream : 'PaymentsUnexpectedTokenInParseStream',
  });

  // console.log(Events.PaymentsFai --> auto-complete

```

The License team may have this set of events defined:

```JavaScript

// LicenseService events

const Events = Object.freeze({
    LicenseUndefinedError : 'LicenseUndefinedError',
    LicenseFailedToConnectToDatabase : 'LicenseFailedToConnectToDatabase',
    LicenseUnexpectedTokenInParseStream : 'LicenseUnexpectedTokenInParseStream',
  });

  // console.log(Events.LicenseFai --> auto-complete

```

We can still search for `*UnexpectedToken*` events across services when necessary, but without the need for a shared library dependency.

## More detailed examples:

* C#: [CSharp-example.cs](examples/cs/EventBasedLoggingExample/CSharp-example.cs)
* NodeJS: [NodeJS-example.js](examples/js/NodeJS-example.js)
