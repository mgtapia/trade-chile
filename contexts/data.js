import { useMemo, useState } from 'react';
import { useStore, useUser, addDocument, deleteDocument, updateDocument } from 'contexts';
import { useContext, createContext } from 'react';
import { FORM } from 'consts';

const Data = createContext();

const useData = () => useContext(Data);

const withData = (Component) => {

  function HOC() {
    const { user } = useUser();
    const { gsap, history, width, ...store } = useStore();
    const [refresh, forceRefresh] = useState();

    const { collection } = Component.defaultProps;

    const { data, error } = store.database[collection] || { data: [] };
    const dark = store.darkMode.isDark;
    const id = history.query?.id || 0;

    const doc = useMemo(() => (      
      data.find((doc) => doc.id === id) || {}
    ), [data.length, id, refresh]);

    function create() {
      addDocument(collection, Object.assign({
        name: FORM.new, updatedAt: Date.now()
      }));
    }

    function update(data, ref = id) {
      if (ref) updateDocument(collection, ref, data);
      setTimeout(() => forceRefresh(Date.now()), 500);
    }

    function remove(id) {
      deleteDocument(collection, id);
      history.push(`/${collection}`);
    }

    function push(id) {
      history.push(`/${collection}/doc?id=${id}`);
    }

    const args = {
      create,
      dark,
      data,
      doc,
      error,
      gsap,
      id,
      push,
      remove,
      update,
      user,
      width
    };

    return (
      <Data.Provider value={data}>
        <Component {...args} />
      </Data.Provider>
    )
  }

  return HOC;
}

export {
	useData,
  withData
};