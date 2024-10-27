namespace asyncawait;

using System;
using System.IO;
using System.Threading;

enum OperationStatus
{
    None,
    NotStarted,
    InProgress,
    Cancelled,
    Completed
}

class Program
{
    static async Task Main(string[] args)
    {
        OperationStatus operationStatus = OperationStatus.NotStarted;
        Console.CancelKeyPress += delegate { 
            operationStatus = OperationStatus.Cancelled;
            Console.WriteLine();
            Console.WriteLine("User cancelled the copy operation!!");
        };
        var filePath = "test.txt";
        var fileInfo = new FileInfo(filePath);
        Console.WriteLine("Size of {0} is {1}.", filePath, fileInfo.Length);
        CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        operationStatus = OperationStatus.InProgress;
        Task<string> fileReadTask = File.ReadAllTextAsync(filePath, cancellationTokenSource.Token);
        Console.WriteLine("Reading file async way...");
        while(operationStatus == OperationStatus.InProgress)
        {
            if(fileReadTask.IsCompletedSuccessfully)
            {
                operationStatus = OperationStatus.Completed;
            }
            else
            {
                Console.Write(".");
                Thread.Sleep(500);
            }
        }

        if(operationStatus == OperationStatus.Completed)
        {
            string text = await fileReadTask;
            Console.WriteLine();
            Console.WriteLine(text.Length);
        }
    }
}
