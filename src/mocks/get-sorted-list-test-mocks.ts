
type mockListType = {
  date: string;
  user: string;
  age: number;
}

const mockTestSortedList: mockListType[] = [
  {
    'date': '2023-05-12T14:32:45.123Z',
    'user': 'Emily Wilson',
    'age': 34
  },
  {
    'date': '2022-11-30T08:15:22.456Z',
    'user': 'David Brown',
    'age': 42
  },
  {
    'date': '2021-07-18T19:05:37.789Z',
    'user': 'Sarah Davis',
    'age': 28
  },
  {
    'date': '2020-03-05T23:45:11.234Z',
    'user': 'Michael Taylor',
    'age': 55
  },
  {
    'date': '2023-01-15T10:00:00.000Z',
    'user': 'Alice Miller',
    'age': 61
  }
];

const sortedByDateList: mockListType[] = [
  {
    date: '2020-03-05T23:45:11.234Z',
    user: 'Michael Taylor',
    age: 55
  },
  {
    date: '2021-07-18T19:05:37.789Z',
    user: 'Sarah Davis',
    age: 28
  },
  {
    date: '2022-11-30T08:15:22.456Z',
    user: 'David Brown',
    age: 42
  },
  {
    date: '2023-01-15T10:00:00.000Z',
    user: 'Alice Miller',
    age: 61
  },
  {
    date: '2023-05-12T14:32:45.123Z',
    user: 'Emily Wilson',
    age: 34
  }
];

const sortedByUserList = [
  {
    date: '2023-01-15T10:00:00.000Z',
    user: 'Alice Miller',
    age: 61
  },
  {
    date: '2022-11-30T08:15:22.456Z',
    user: 'David Brown',
    age: 42
  },
  {
    date: '2023-05-12T14:32:45.123Z',
    user: 'Emily Wilson',
    age: 34
  },
  {
    date: '2020-03-05T23:45:11.234Z',
    user: 'Michael Taylor',
    age: 55
  },
  {
    date: '2021-07-18T19:05:37.789Z',
    user: 'Sarah Davis',
    age: 28
  }
];

const sortedByAgeList = [
  {
    date: '2021-07-18T19:05:37.789Z',
    user: 'Sarah Davis',
    age: 28
  },
  {
    date: '2023-05-12T14:32:45.123Z',
    user: 'Emily Wilson',
    age: 34
  },
  {
    date: '2022-11-30T08:15:22.456Z',
    user: 'David Brown',
    age: 42
  },
  {
    date: '2020-03-05T23:45:11.234Z',
    user: 'Michael Taylor',
    age: 55
  },
  {
    date: '2023-01-15T10:00:00.000Z',
    user: 'Alice Miller',
    age: 61
  }
];

export {sortedByDateList, sortedByUserList, sortedByAgeList, mockTestSortedList};
