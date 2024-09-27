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
        int count = 1028 * 1024;
        int stage = 10;

        ThreadImpl threadUsingMemberFunction = new ThreadImpl(count * ++stage);
        threadUsingMemberFunction.start();
        threadUsingMemberFunction.join();
        System.out.println("threadUsingMemberFunction exited.");
    }
}