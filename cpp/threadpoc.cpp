#include <iostream>
#include <thread>
#include <vector>

using namespace std;

void wasteCPUCycles(int count)
{
    // cout << "Size " << size << endl; 
    // Following code wastes CPU cycles to keep thread running a little longer.
    const int vectorSize = 1024;
    vector<int> list(vectorSize);
    for(int extraLoopIndex = 0; extraLoopIndex < count; ++extraLoopIndex)
    {
        for(int index = 0; index < vectorSize; ++index)
        {
            list[index] = index * index;
        }
    }
}

void threadFunction(int count)
{
    wasteCPUCycles(count);
}

class ThreadImpl
{
    public:
    void operator()(int count)
    {
        wasteCPUCycles(count);
    }

    void MemberFunction(int count)
    {
        wasteCPUCycles(count);
    }

    static void StaticFunction(int count)
    {
        wasteCPUCycles(count);
    }
};

int main()
{
    const int count = 256 * 1024;
    thread threadUsingFunctionPointer(threadFunction, count);
    thread threadUsingThreadImpl(ThreadImpl(), count*2);
    auto lambdaExpression = [](int count) { wasteCPUCycles(count); };
    thread threadUsingLambdaExpression(lambdaExpression, count * 3);
    ThreadImpl threadImpl; 
    thread threadUsingMemberFunction(&ThreadImpl::MemberFunction, &threadImpl, count*4);
    thread threadUsingStaticFunction(&ThreadImpl::StaticFunction, count*5);

    threadUsingFunctionPointer.join();
    cout << "threadUsingFunctionPointer exited." << endl;
    threadUsingThreadImpl.join();
    cout << "threadUsingThreadImpl exited." << endl;
    threadUsingLambdaExpression.join();
    cout << "threadUsingLambdaExpression exited." << endl;
    threadUsingMemberFunction.join();
    cout << "threadUsingMemberFunction exited." << endl;
    threadUsingStaticFunction.join();
    cout << "threadUsingStaticFunction exited." << endl;

    return 0;
}