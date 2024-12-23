// See https://aka.ms/new-console-template for more information
using System;
using System.Threading;
using System.Text;

namespace BarrierDemo
{
    class Program
    {
        static string[] words1 = new string[] { "brown",  "jumps", "the", "fox", "quick"};
        static string[] words2 = new string[] { "dog", "lazy","the","over"};
        static string solution = "the quick brown fox jumps over the lazy dog.";

        static bool success = false;
        static Barrier barrier = new Barrier(2, (b) =>
        {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < words1.Length; i++)
            {
                sb.Append(words1[i]);
                sb.Append(" ");
            }
            for (int i = 0; i < words2.Length; i++)
            {
                sb.Append(words2[i]);

                if(i < words2.Length - 1)
                    sb.Append(" ");
            }
            sb.Append(".");
#if TRACE
            System.Diagnostics.Trace.WriteLine(sb.ToString());
#endif
            Console.CursorLeft = 0;
            Console.Write("Current phase: {0}", barrier.CurrentPhaseNumber);
            if (String.CompareOrdinal(solution, sb.ToString()) == 0)
            {
                success = true;
                Console.WriteLine("\r\nThe solution was found in {0} attempts", barrier.CurrentPhaseNumber);
			    Console.WriteLine("Thread name - {0} : Thread Id - {1}", Thread.CurrentThread.Name, Thread.CurrentThread.ManagedThreadId);
            }
        });

        static void Main(string[] args)
        {

            Thread t1 = new Thread(() => Solve(words1));
			t1.Name = "FirstThread";
            Thread t2 = new Thread(() => Solve(words2));
			t2.Name = "SecondThread";
            t1.Start();
            t2.Start();

            // Keep the console window open.
            Console.ReadLine();
        }

        // Use Knuth-Fisher-Yates shuffle to randomly reorder each array.
        // For simplicity, we require that both wordArrays be solved in the same phase.
        // Success of right or left side only is not stored and does not count.
        static void Solve(string[] wordArray)
        {
			// Console.WriteLine("Thread name - {0} : Thread Id - {1}", Thread.CurrentThread.Name, Thread.CurrentThread.ManagedThreadId);
            while(success == false)
            {
                Random random = new Random();
                for (int i = wordArray.Length - 1; i > 0; i--)
                {
                    int swapIndex = random.Next(i + 1);
                    string temp = wordArray[i];
                    wordArray[i] = wordArray[swapIndex];
                    wordArray[swapIndex] = temp;
                }

                // We need to stop here to examine results
                // of all thread activity. This is done in the post-phase
                // delegate that is defined in the Barrier constructor.
                barrier.SignalAndWait();
            }
        }
    }
}