#include <iostream>
#include <string>

using namespace std;

int main()
{
	cout << "What's up, dude!" << endl;
	string input;
	//cin >> input;
	getline(std::cin, input);
	return 0;
}
