import {describe, expect} from 'vitest';
import {getSortedList} from './get-sorted-list.ts';
import {sortedByDateList, sortedByUserList, sortedByAgeList, mockTestSortedList} from '../mocks/get-sorted-list-test-mocks.ts';
import dayjs from 'dayjs';

describe('Fucnction: getSortedList', () => {
  it('should return sorted by growth every prop array', () => {
    const sortedByDateTestListResult = JSON.stringify(getSortedList(mockTestSortedList, (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()));
    const sortedByUserTestListResult = JSON.stringify(getSortedList(mockTestSortedList, (a, b) => a.user.localeCompare(b.user)));
    const sortedByAgeTestListResult = JSON.stringify(getSortedList(mockTestSortedList, (a, b) => a.age - b.age));

    const correctSortedByDateListResult = JSON.stringify(sortedByDateList);
    const correctSortedByUserListResult = JSON.stringify(sortedByUserList);
    const correctSortedByAgeListResult = JSON.stringify(sortedByAgeList);

    expect(correctSortedByDateListResult).toBe(sortedByDateTestListResult);
    expect(correctSortedByUserListResult).toBe(sortedByUserTestListResult);
    expect(correctSortedByAgeListResult).toBe(sortedByAgeTestListResult);
  });
});
