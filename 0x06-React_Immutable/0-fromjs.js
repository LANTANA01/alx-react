import { fromJS } from 'immutable';
// function accepts obj and converts it into an immutable Map

export default function getImmutableObject(object) {
  return fromJS(object);
}
