import {LoaderContext, LoaderStore} from './LoaderContext';
import {default as loadData} from './DataLoader';
import {PAGES_CONFIGS} from './pagesConfig';
import Widget from './Widget';
import React from 'react';


export default function Panel({widgetName}) {
   const store = new LoaderStore();
   const pages = Object.values(PAGES_CONFIGS);
   loadData(pages).then((data) => {
      store.setState(data);
   });
   return (
      <LoaderContext.Provider value={store}>
         <Widget widgetKey={widgetName} widgetName={widgetName}/>
      </LoaderContext.Provider>
   );
}
