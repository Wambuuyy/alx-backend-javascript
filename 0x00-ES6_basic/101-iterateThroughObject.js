import reportWithIterator from './100-createIteratorObject';

export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}

