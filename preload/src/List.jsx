const LIST_STYLES = {
   display: 'grid',
   gridTemplateColumns: '50px 1fr',
   margin: '10px'
}

const LIST_COLUMN_STYLE = {
   border: '1px solid #CCC'
};
export default function List({list = []}) {
   return (
      <div style={LIST_STYLES}>
         {list.map(({key, title}) => {
            return <div style={{display: 'contents'}} key={key}>
               <div style={LIST_COLUMN_STYLE}>{key}</div>
               <div style={LIST_COLUMN_STYLE}>{title}</div>
            </div>
         })}
      </div>
   );
}
