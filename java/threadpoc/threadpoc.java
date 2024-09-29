import java.io.*;

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

class ThreadImpl extends Thread // OR implements Runnable
{
    private int count;
    public ThreadImpl(int count)
    {
        this.count = count;
    }
    public void run()
    {
        FakeComputing.WasteCPUCycles(count);
    }
}

class ThreadPoc
{
    public static void main(String[] args) throws Exception
    {
        int count = 1024 * 1024 * 128;
        int stage = 0;

        ThreadImpl threadUsingMemberFunction = new ThreadImpl(count * ++stage);
        threadUsingMemberFunction.start();

        int currentCount = count * ++stage;
        Runnable threadImplUsingLambda = () -> {
            FakeComputing.WasteCPUCycles(currentCount);
        };
        Thread threadUsingLambda = new Thread(threadImplUsingLambda);
        threadUsingLambda.start();

        threadUsingMemberFunction.join();
        System.out.println("threadUsingMemberFunction exited.");
        threadUsingLambda.join();
        System.out.println("threadUsingLambda exited.");
    }
}