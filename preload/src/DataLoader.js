const KEY_SEPARATOR = '$$';

function getDataLoaders(pages) {
   const result = [];
   pages.forEach((pageCfg) => {
      pageCfg.dataLoaders.forEach((loaderCfg) => {
         result.push({
            ...loaderCfg,
            key: getLoaderKey(loaderCfg.key, pageCfg.key)
         });
      });
   });
   return result;
}

function getTemplatesLoadPromises(pages) {
   return pages.map((pageCfg) => {
      return Promise.resolve();
   });
}

export function getLoaderKey(loaderKey, pageKey) {
   return loaderKey + KEY_SEPARATOR + pageKey;
}

export default function loadData(pages) {
   const dataLoaders = getDataLoaders(pages);
   const resultPromises = dataLoaders.map(({module, params}) => {
      return module(params);
   });
   resultPromises.push(...getTemplatesLoadPromises(pages));

   return Promise.all(resultPromises).then((promisesResults) => {
      const result = {};
      promisesResults.forEach((promiseResult, index) => {
         if (index < dataLoaders.length) {
            const {key} = dataLoaders[index];
            result[key] = promiseResult;
         }
      });
      return result;
   });
}
