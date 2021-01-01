using System;

namespace EventBasedLoggingExample
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

        // etc.

        NoOp = int.MaxValue
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Show all the current Event IDs
            //
            //

            var enumNames = Enum.GetNames(typeof(Event));

            Console.WriteLine("Events:");
            foreach (var name in enumNames)
            {
                Console.WriteLine(name);
            }
        }
    }
}