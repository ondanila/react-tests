import List from './List';
import PopupTemplate from './PopupTemplate';

const SYNC_TEMPLATES_MAP = {
   './List': List,
   './PopupTemplate': PopupTemplate
};

function returnParamsAsync(params, delay = 300) {
   return new Promise((resolve) => {
      setTimeout(function () {
         resolve(params.result);
      }, delay)
   });
}

const AUTO_LIST_LOADER = {
   key: 'list',
   module: returnParamsAsync,
   params: {
      result: [{key: 1, title: 'Audi'}, {key: 2, title: 'BMW'}]
   }
};
const NAMES_LIST_LOADER = {
   key: 'list',
   module: returnParamsAsync,
   params: {
      result: [{key: 3, title: 'Dron'}, {key: 4, title: 'Polina'}]
   }
};

// Имитация синхронного реквайра, т.к. при предзагрузке модули будут загружены
export function getTemplateSync(templateName) {
   return SYNC_TEMPLATES_MAP[templateName];
}

export const PAGES_CONFIGS = {
   'panelTemplate.panelTemplate': {
      key: 'panelTemplate',
      widgetKey: 'panelTemplate',
      templateName: './PopupTemplate',
      dataLoaders: [
         {
            key: 'record',
            module: returnParamsAsync,
            params: {
               result: {
                  key: 'someKey',
                  title: 'Some title',
                  text: 'Some long long text'
               }
            }
         }
      ]
   },
   'list.autoList': {
      key: 'autoList',
      widgetKey: 'list',
      templateName: './List',
      dataLoaders: [
         AUTO_LIST_LOADER
      ]
   },
   'list.namesList': {
      key: 'namesList',
      widgetKey: 'list',
      templateName: './List',
      dataLoaders: [
         NAMES_LIST_LOADER
      ]
   }
};
