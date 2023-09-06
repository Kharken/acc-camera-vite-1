enum enumTextKeysTestOne {
  'North' = 0,
  'South' = 1,
  'West' = 2,
  'East' = 3,
}

enum enumTextKeysTestTwo {
  'Null' = 2,
  'Undefined' = 'Undefined',
  'NaN' = '42'
}

enum enumTextKeysTestThree {
  'Javascript',
  'Typescript',
  'React',
}

const enumTextKeysResultOne = ['North', 'South', 'West', 'East'];
const enumTextKeysResultTwo = ['Null', 'Undefined', 'NaN'];
const enumTextKeysResultThree = ['Javascript', 'Typescript', 'React'];

export {enumTextKeysResultOne, enumTextKeysResultTwo, enumTextKeysResultThree, enumTextKeysTestThree, enumTextKeysTestOne, enumTextKeysTestTwo};
