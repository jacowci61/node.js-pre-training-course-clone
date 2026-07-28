/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
    if (source === null || source === undefined){
    throw new TypeError('Input is null/undefined.')
  }

  const dynamicArray: R[] = []; 
  let i = 0;
  for (const element of source) {
      dynamicArray.push(mapper(element, i));
      i += 1;
  }
  return dynamicArray
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
      if (source === null || source === undefined){
    throw new TypeError('Input is null/undefined.')
  }
  
  const dynamicArray: T[] = []; 
  let i = 0;

  for (const element of source) {
      if (predicate(element, i)){
        dynamicArray.push(element);
      }
      i += 1;
  }
  return dynamicArray
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
    if (source === null || source === undefined){
    throw new TypeError('Input is null/undefined.')
  }

  let i = 0;
  let acc: R = initial;

  for (const element of source) {
      acc = reducer(acc, element, i)
      i += 1;
  }

  return acc;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
    if (source === null || source === undefined){
    throw new TypeError('Input is null/undefined.')
  }

  const dynamicArrayTrue: T[] = []; 
  const dynamicArrayFalse: T[] = []; 

  for (const element of source) {
      if (predicate(element)){
        dynamicArrayTrue.push(element);
      }
      else{
        dynamicArrayFalse.push(element)
      }
  }

  const result: [T[], T[]] = [dynamicArrayTrue, dynamicArrayFalse];

  return result
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
      if (source === null || source === undefined){
    throw new TypeError('Input is null/undefined.')
  }


  const result: Partial<Record<K, T[]>> = {};

  for (const element of source){
    const key = keySelector(element)
    
    if (!(key in result)) {
      result[key] = [];
    }
    result[key]!.push(element);
  }
  return result as Record<K, T[]>;
}
