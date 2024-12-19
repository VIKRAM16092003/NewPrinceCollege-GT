#include <bits/stdc++.h>
using namespace std;

// void printvec(vector<int>&arr) {
//     for(auto it : arr) {
//         cout << it << " ";
//     }
//     cout << "\n";
// }

int main() {
	// vector<int> vec{1, 2, 3, 4, 5}; 
    // for(auto it = vec.begin(); it != vec.end(); it++) {
    //     cout << *(it) << " ";
    // }
    // cout << "\n";
    // for(auto it : vec) {
    //     cout << it << " ";
    // }
    // cout << "\n";
    // vec.insert(vec.begin() + 2, 5, 9);
    // printvec(vec);
    // cout << "\n";
    // vec.erase(vec.begin());
    // printvec(vec);
    // cout << "\n";
    // vec.erase(vec.begin(), vec.begin() + 5);
    // printvec(vec);
    // vector<int>vec2(vec.begin(), vec.end());
    // printvec(vec2);
    // vector<int> vec2{7, 8, 9};
    // vec2.swap(vec);
    // printvec(vec);
    // printvec(vec2);


    // {}
    // {5}
    // {5,6}
    // {5,6,7}
    // {9,5,6,7}
    // {8,9,5,6,7}
    // {8,9,5,6}
    // {9,5,6}

    // list<int> li;
    // li.push_back(5);
    // li.push_back(6);
    // li.push_back(7);
    // li.push_front(9);
    // li.push_front(8);
    // li.pop_back();
    // li.pop_front();
    // int size = li.size();
    // for(auto it : li) {
    //     cout << it << " ";
    // }
    // all remaining functions are same as vector

    // 4) deque ---> double ended deque
    //  5
    //  5 6
    //  5 6 7
    //  9 5 6 7
    //  8 9 5 6 7
    //  deque<int> dq; 
    //  dq.push_back(5);
    //  dq.push_back(6);
    //  dq.push_back(7);
    //  dq.push_front(9);
    //  dq.push_front(8);
    //  dq.pop_back();
    //  dq.pop_front();
    //  for(auto it : dq) {
    //      cout << it << " ";
    //  }
     //all remaining functions are same as vector
     // 5) stack --> last in first out
    //  stack<int> st;
    //  st.push(5);
    //  st.push(6);
    //  st.push(7);
    // st.top();

     // 6) queue --> first in first out 
    //  queue<int> q;
    //  q.push(5);
   
//     stack<int> st;  
//     st.push(5); // (5)
//     st.push(6); // (5, 6)
//     st.push(7); // (5, 6, 7)
//     st.push(8); // 
//     st.push(9); 
//     int check = st.empty();
//     // cout << st.top(); // (7)
//     // st.pop();
//    // cout << st.top(); // (6)
//     while(!st.empty()) {
//         cout << st.top() << " "; // (7)
//         st.pop();
//     }
    // queue<int> q;  
    // q.push(5); // (5)
    // q.push(6); // (5, 6)
    // q.push(7); // (5, 6, 7)
    // q.push(8); // (5, 6, 7, 8)
    // q.push(9); // (5, 6, 7, 8, 9)
    // int check = q.empty();
    // cout << st.top(); // (7)
    // st.pop();
   // cout << st.top(); // (6)
 
    // 0 ---> false;
    // 1 ---> true;
     
   //         0         
//     while(!q.empty()) {
//         cout << q.front() << " "; // (7)
//         q.pop();
//     }

        
    // 8) Priority-Queue - tree (Binary Tree) ---> is working on the tree implementation

    // heap ---> max heap and min heap o log(n)

    // max heap ---> Priority-Queue
    // min heap ---> Priority-Queue

    // max heap --> decending 
    // min heap --> accending
   
//   priority_queue <int> pq;
//   pq.push(5);
//   pq.push(7);
//   pq.push(2);
//   pq.push(9);
//   pq.push(10);

//   priority_queue <int, vector<int>, greater<int>> pq;
//   pq.push(5);
//   pq.push(7);
//   pq.push(2);
//   pq.push(9);
//   pq.push(10);

  // set 
  
  // set ---> unique, sorted
//   multiset, unordered set 

//    2, 2
//    2, 3, 3, 3, 2
//    3, 2
//    1 2 3 

//    set<int> st; --> assending
//    st.insert(28);
//    st.insert(20);
//    st.insert(40);
//    st.insert(50);
//    {20, 28}
//    find() --> iterato

//    auto it = st.find(40);
//    cout << *(it)

//    20 28 40  

//    auto it = st.find(60);

//    int count = st.count(20);

//    set<int, greater<int>> st;
//    st.insert(28);
//    st.insert(20);
//    st.insert(40);
//    st.insert(50);

//    50 40 28 20 

//    o (log n)

    // multiset ---> sorted    o (log n)

    // unordered set  ---> unique unsorted o(1)

   // example program

    // set<int> st;
    //   st.insert(2);
    //   st.insert(4);
    //   st.insert(1);
    //   st.insert(3);
    //   st.insert(2);
    //   for(auto it : st) {
    //       cout << it << " ";
    //   }
    //   set<int, greater<int>> st;
    //   st.insert(2);
    //   st.insert(4);
    //   st.insert(1);
    //   st.insert(3);
    //   st.insert(2);
    //   for(auto it : st) {
    //       cout << it << " ";
    //   }

    //   set<int> st;
    //   st.insert(2);
    //   st.insert(4);
    //   st.insert(1);
    //   st.insert(3);
    //   st.insert(2);
    //  // st.erase(4);
    //   for(auto it : st) {
    //       cout << it << " ";
    //   }
    //   cout << endl;
    //   auto it = st.find(4);
    //   if(it == st.end()) {
    //       cout << "The elem we are looking for is not there";
    //   } else {
    //       cout << *(it);
    //   }
    //   cout << endl;
    //   cout << st.count(2);


    // multiset

    // multiset<int> st;
    //   st.insert(2);
    //   st.insert(4);
    //   st.insert(1);
    //   st.insert(3);
    //   st.insert(3);
    //   st.insert(3);
    //   st.insert(3);
    //   st.insert(2);
    //  // st.erase(4);
    //   for(auto it : st) {
    //       cout << it << " ";
    //   }
    //   cout << endl;
    //   auto it = st.find(4);
    //   if(it == st.end()) {
    //       cout << "The elem we are looking for is not there";
    //   } else {
    //       cout << *(it);
    //   }
    //   cout << endl;
    //   cout << st.count(3);
   

   // unodered set

    // unordered_set<int> st;
    //   st.insert(2);
    //   st.insert(4);
    //   st.insert(1);
    //   st.insert(3);
    //   st.insert(3);
    //   st.insert(3);
    //   st.insert(3);
    //   st.insert(2);
    //  // st.erase(4);
    //   for(auto it : st) {
    //       cout << it << " ";
    //   }
    //   cout << endl;
    //   auto it = st.find(4);
    //   if(it == st.end()) {
    //       cout << "The elem we are looking for is not there";
    //   } else {
    //       cout << *(it);
    //   }
    //   cout << endl;
    //   cout << st.count(3);

    // Map ---> sorted, unique
    // multimap ---> sorted
    // unordered_map --> unique
   
   // map --> combination of key and value pairs
  
    //   key           value
    // 21CSE123 ---> vignesh 

    // map<key, value> mp;

    // map<string, string> mp;
    // mp.insert({"21CSE123", "vignesh"})
    // mp[1] = 2;
    // mp[2] = 3;
    // mp[3] = 5;

    // 1 -> 2
    // 2 -> 3
    // 3 -> 5

    // for(auto it : mp) {

    // }

    // cout << mp(["21CSE123"]);

    // auto it = mp.find("21CSE123");
    
   //  Algorithms

   // sort

//    searching 
//    lower_bound
//    upper_bound

   // next_permutation --> it is possible to arrange the one stuff

//    n number will have n number of factorial 
//    n -> n! => 3*2*1 => 6
//    1 2 3

//    123
//    321
//    132
//    312
//    213
//    231

//    next_permutation(vec.begin(), vec.end());

//   max element 

//   1 2 3 4 5 6 7 8 9

//   9

//   int max = *max_element(ec.begin(), vec.end())
//   int max = *min_element(ec.begin(), vec.end())

//   __builtin_popcount(num) --> it return how many matching set of binary represtation

//   algorithms code 

//   vector<int> vec{5, 4 , 1, 2, 3};
    
//     sort(vec.begin(), vec.end());
//     printvec(vec);
    
//     vector<int> vec{5, 4 , 1, 2, 3};
    
//     sort(vec.begin(), vec.end() - 1);
//     printvec(vec);
    
//     vector<int> vec{5, 4 , 1, 2, 3};
    
//     reverse(vec.begin(), vec.end());
//     printvec(vec);
    
//     vector<int> vec{1, 3, 2};
//     next_permutation(vec.begin(), vec.end());
//     printvec(vec);
    
//     vector<int> vec{1, 3, 2, 344, 5544, 654533};
//     int maxs = *max_element(vec.begin(), vec.end());
//     cout << maxs;
    
//     vector<int> vec{1, 3, 2, 344, 5544, 654533};
//     int mins = *min_element(vec.begin(), vec.end());
//     cout << mins;
    
//     int num = 3;
    
//     cout << __builtin_popcount(num); 



//      int size; 
//      cin >>size;
//      int arr[size];
    
//      for(int i = 0; i < size; i++) {  // getting the array elements
//          cin >> arr[i];
//      }
         
//          int minidx = 0;
//          for(int i = 0; i<=size-2; i++) {

//             minidx = i;  // assume first element as minimum

//             for(int z = i + 1; z <= size-1; z++) {

//                 if(arr[minidx] > arr[z]) {
//                     minidx = z;
//                 }

//             } if(minidx != i) {

//                 swap(arr[minidx], arr[i]);
//             } 
//          }

//     for(int i = 0; i < size; i++) {
//         cout << arr[i] << " ";
//     }

// }
// Online C++ compiler to run C++ program online

    int size;
    cin >> size;
    int arr[size];
    for(int i=0;i<size;i++)
    {
        cin >> arr[i];
    }
    for(int i=0;i<size-1;i++)
    {
        int minind=i;
        for(int j=i+1;j<size;j++)
        {
            if(arr[minind]<arr[j])
            {
                minind=j;
            }
            
        }
        if(minind!=i)
        {
            swap(arr[minind],arr[i]);
        }
    }
    for(int i=0;i<size;i++)
    {
        cout << arr[i] << " ";
    }
    return 0;
}






