
const CharacterLists = ({items}) => {
  console.log(items);
  return (
    // <div className="container">
    //   <div className="row">
    //       { 
    //         items.map( item => {
    //           return <div key={item.char_id}>
    //             <img src={item.img} style={{height: "300px", width: "200px", padding: "10px"}} alt="" />
    //           </div>
    //         })
    //       }
    //   </div>
    // </div>
<div className="container-fluid">

<div className="row">
    { 
      items.map( item => {
        return <div className="flip-card"> 
          <div key={item.char_id} className="flip-card-inner">
            <img className="flip-card-front" src={item.img} style={{height: "100%", width: "100%", padding: "10px"}} alt="" />
            <div className="flip-card-back">
              <h1>{item.name}</h1> 
          </div>
</div>
</div>

      })
    }
  </div>
  </div>
  );
}
 
export default CharacterLists;