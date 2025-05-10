import {describe, expect} from 'vitest';
import {getEnumTextKeys} from './get-enum-text-keys.ts';
import {enumTextKeysResultOne, enumTextKeysResultTwo, enumTextKeysResultThree, enumTextKeysTestThree, enumTextKeysTestOne, enumTextKeysTestTwo} from '../../mocks/get-enum-text-keys-test-mocks.ts';

describe('function: getEnumTextKeys', () => {
  it('should return an array of \' Not-a-number\' keys from every enum', () => {
    const enumTextKeysTestResultOne = JSON.stringify(getEnumTextKeys(enumTextKeysTestOne));
    const enumTextKeysTestResultTwo = JSON.stringify(getEnumTextKeys(enumTextKeysTestTwo));
    const enumTextKeysTestResultThree = JSON.stringify(getEnumTextKeys(enumTextKeysTestThree));

    const correctEnumTextKeysTestResultOne = JSON.stringify(enumTextKeysResultOne);
    const correctEnumTextKeysTestResultTwo = JSON.stringify(enumTextKeysResultTwo);
    const correctEnumTextKeysTestResultThree = JSON.stringify(enumTextKeysResultThree);

    expect(correctEnumTextKeysTestResultOne).toBe(enumTextKeysTestResultOne);
    expect(correctEnumTextKeysTestResultTwo).toBe(enumTextKeysTestResultTwo);
    expect(correctEnumTextKeysTestResultThree).toBe(enumTextKeysTestResultThree);
  });
});
