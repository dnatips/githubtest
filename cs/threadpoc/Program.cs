namespace threadpoc;

using System;
using System.Threading;

class FakeComputing
{
    public static void WasteCPUCycles(int count)
    {
        // Following code wastes CPU cycles to keep thread running a little longer.
        int vectorSize = 1024;
        int[] list = new int[vectorSize];
        for(int extraLoopIndex = 0; extraLoopIndex < count; ++extraLoopIndex)
        {
            for(int index = 0; index < vectorSize; ++index)
            {
                list[index] = index * index;
            }
        }
    }
}

class ThreadImpl
{
    public static void StaticFunction(Object? count)
    {
        if (count == null) return;
        FakeComputing.WasteCPUCycles((int)count);
    }

    public void MemberFunction(Object? count)
    {
        if (count == null) return;
        FakeComputing.WasteCPUCycles((int)count);
    }
}

class Program
{
    static void Main(string[] args)
    {
        int count = 128 * 1024;
        int stage = 0;
        Thread threadUsingStaticFunction = new Thread (new ParameterizedThreadStart(ThreadImpl.StaticFunction));
        threadUsingStaticFunction.Start(count * ++stage);

        ThreadImpl threadImpl = new ThreadImpl();
        Thread threadUsingMemberFunction = new Thread (new ParameterizedThreadStart(threadImpl.MemberFunction));
        threadUsingMemberFunction.Start(count * ++stage);

        Thread threadUsingLambda = new Thread((Object? count) => { 
            if (count == null) return;
            FakeComputing.WasteCPUCycles((int)count);
        });
        threadUsingLambda.Start(count * ++stage);

        threadUsingStaticFunction.Join();
        Console.WriteLine("threadUsingStaticFunction exited.");

        threadUsingMemberFunction.Join();
        Console.WriteLine("threadUsingMemberFunction exited.");

        threadUsingLambda.Join();
        Console.WriteLine("threadUsingLambda exited.");
    }
}
