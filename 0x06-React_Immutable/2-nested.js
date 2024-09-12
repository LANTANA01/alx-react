import { fromJS } from 'immutable';
//  edit it to return the value of the object at the defined path

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
