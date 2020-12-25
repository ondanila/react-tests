import Widget from './Widget';

const POPUP_STYLE = {
   border: '4px solid #999',
   width: '400px',
   height: '400px',
   position: 'absolute',
   top: '0',
   right: '0',
   background: 'white'
}

export default function PopupTemplate({record = {}}) {
   return (
      <div style={POPUP_STYLE}>
         <div>{record.title}</div><div/>
         <div>{record.text}</div><div/>
         <Widget widgetKey="autoList" widgetName="list"/>
         <Widget widgetKey="namesList" widgetName="list"/>
      </div>
   );
}
