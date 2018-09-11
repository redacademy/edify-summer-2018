import Realm from 'realm';

const userSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'string',
    token: 'string',
  },
};

const realm = new Realm({ schema: [userSchema] });

export const addUser = (id, token) => {
  realm.write(() => {
    realm.create('User', { id, token });
  });
};

export const getUser = () => {
  const user = realm.objects('User');
  return user;
};

export const removeUser = id => {
  realm.write(() => {
    const userToRemove = realm.objects('User').filtered('id==$0', id);
    realm.delete(userToRemove);
  });
};

export default realm;
