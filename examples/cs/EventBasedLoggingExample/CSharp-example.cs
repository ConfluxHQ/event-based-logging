// Event-based logging example in C# DotNet Core 5.0
// 
// Usage: `dotnet run` from the project folder in vscode

using System;
using ApplicationEvents;

namespace EventBasedLoggingExample
{

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Event.AppStarted);
            Console.WriteLine("---");

            // Show all the current Event IDs
            //
            //

            var enumNames = Enum.GetNames(typeof(Event));

            Console.WriteLine("Events:");
            foreach (var name in enumNames)
            {
                Console.WriteLine("\t" + name);
            }

            Console.WriteLine("---");
            Console.WriteLine(Event.AppShutdownRequested);
        }
    }
}