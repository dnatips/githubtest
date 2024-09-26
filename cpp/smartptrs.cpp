#include <iostream>
#include <memory>
#include <string>

using namespace std;

void UniquePtrDemo()
{
    cout << "UniquePtrDemo" << endl;
    unique_ptr<string> sp1(new string("Hello world!"));
    cout << sp1->length() << endl;
    cout << sp1.get() << endl;

    unique_ptr<string> sp2 = move(sp1);
    cout << sp2->length() << endl;
    cout << sp1.get() << endl;
    cout << sp2.get() << endl;
}

void SharedPtrDemo()
{
    cout << "SharedPtrDemo" << endl;
    shared_ptr<string> sp1(new string("What's up!"));
    cout << sp1->length() << endl;
    cout << sp1.get() << endl;
    cout << sp1.use_count() << endl;

    shared_ptr<string> sp2(sp1);
    cout << sp2->length() << endl;
    cout << sp1.get() << endl;
    cout << sp2.get() << endl;
    cout << sp1.use_count() << endl;
    cout << sp2.use_count() << endl;

    sp1.reset();
    cout << sp1.get() << endl;
    cout << sp2.get() << endl;
    cout << sp1.use_count() << endl;
    cout << sp2.use_count() << endl;
}

void WeakPtrDemo()
{
    cout << "WeakPtrDemo" << endl;
    shared_ptr<string> sp1(new string("How you doing?"));
    cout << sp1->length() << endl;
    cout << sp1.get() << endl;
    cout << sp1.use_count() << endl;

    weak_ptr<string> sp2 = sp1;
    if(!sp2.expired())
    {
        shared_ptr<string> sp3 = sp2.lock();
        cout << sp3->length() << endl;
    }
    else
    {
        cout << "Weak reference has expired." << endl;
    }
    cout << sp1.get() << endl;
    //cout << sp2.get() << endl;
    cout << sp1.use_count() << endl;
    //cout << sp2.use_count() << endl;
}

int main()
{
    UniquePtrDemo();
    SharedPtrDemo();
    WeakPtrDemo();
    return 0;
}

