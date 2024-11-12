namespace asyncawait;

using System;
using System.IO;
using System.Threading;

class Program
{
    static async Task Main(string[] args)
    {
        Console.CancelKeyPress += delegate { 
            Console.WriteLine();
            Console.WriteLine("User cancelled the copy operation!!");
        };
        var filePath = "test.txt";
        var fileInfo = new FileInfo(filePath);
        Console.WriteLine("Size of {0} is {1}.", filePath, fileInfo.Length);
        CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        Task<string> fileReadTask = File.ReadAllTextAsync(filePath, cancellationTokenSource.Token);
        Console.WriteLine("Reading file async way...");
        bool keepRunning = true;
        while(keepRunning)
        {
            var taskStatus = fileReadTask.Status;
            switch(taskStatus)
            {
                case TaskStatus.RanToCompletion:
                {
                    try
                    {
                        string text = await fileReadTask;
                        Console.WriteLine();
                        Console.WriteLine(text.Length);
                        keepRunning = false;
                    }
                    catch(Exception exception)
                    {
                        Console.WriteLine();
                        Console.WriteLine(exception.Message);
                        Console.WriteLine(exception.StackTrace);
                    }
                    break;
                }
                case TaskStatus.Canceled:
                case TaskStatus.Faulted:
                {
                    Console.WriteLine();
                    Console.WriteLine("Task failed or canceled.");
                    keepRunning = false;
                    break;
                }
                case TaskStatus.Created:
                case TaskStatus.WaitingForActivation:
                case TaskStatus.WaitingToRun:
                case TaskStatus.Running:
                {
                    Console.Write(".");
                    Thread.Sleep(500);
                    break;
                }
                default:
                {
                    Console.WriteLine();
                    Console.WriteLine(string.Format("Unexpected task Status - {0}.", taskStatus));
                    keepRunning = false;
                    break;
                }
            }
        }
    }
}
