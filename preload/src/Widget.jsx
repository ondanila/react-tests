import React, {useContext, useState} from 'react';
import {LoaderContext} from './LoaderContext';
import {getLoaderKey} from './DataLoader'
import {getTemplateSync, PAGES_CONFIGS} from './pagesConfig';


function getLoadersData(storeData, dataLoaders, pageKey) {
   const result = {};
   dataLoaders.forEach(({key}) => {
      const storeKey = getLoaderKey(key, pageKey);
      result[key] = storeData[storeKey];
   });
   return result;
}

function updateDataCallback(setData, loaders, pageKey, newState) {
   setData(getLoadersData(newState, loaders, pageKey))
}

export default function Widget({widgetName, widgetKey}) {
   const store = useContext(LoaderContext);
   const widgetConfig = PAGES_CONFIGS[widgetName + '.' + widgetKey];
   const dataLoaders = widgetConfig.dataLoaders;
   const [data = getLoadersData(store.getState(), dataLoaders, widgetKey), setData] = useState();
   const Module = getTemplateSync(widgetConfig.templateName);
   store.subscribe(updateDataCallback.bind(null, setData, dataLoaders, widgetKey))
   /*const Module = lazy(() => {
      return Promise.all([

      ]);
   });*/
   return (
      <Module {...data}/>
   );
};
