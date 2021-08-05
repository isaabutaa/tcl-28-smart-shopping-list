import { firestore } from '../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useHistory } from 'react-router';
import SingleItem from './SingleItem';

const ItemsList = () => {
  const token = localStorage.getItem('token');
  const [snapshot, loading, error] = useCollection(
    firestore.collection('items').where('token', '==', token),
  );
  const history = useHistory();

  const removeToken = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  const addItem = () => {
    history.push('/add');
  };

  return (
    <div>
      {loading && <>Loading</>}
      {error && <>Error</>}
      <h1>Collection:</h1>
      {snapshot && (
        <>
          {!snapshot.docs.length ? (
            <>
              <h2>Your shopping list is currently empty.</h2>
              <button onClick={addItem}>Add Item</button>
            </>
          ) : (
            <>
              {snapshot.docs.map((doc, index) => (
                <SingleItem key={index} {...doc.data()} id={doc.id} />
              ))}
            </>
          )}
        </>
      )}
      <button onClick={removeToken}>clear token</button>
    </div>
  );
};

export default ItemsList;