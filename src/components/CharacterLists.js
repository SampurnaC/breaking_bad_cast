import Spinner from "./Spinner";

const CharacterLists = ({items, isLoading}) => {
  console.log(items);
  return isLoading ? (<Spinner />) :(

    <div className="container-fluid">

      <div className="row">
        { 
          items.map( item => {
            return <div className="flip-card"> 
              <div key={item.char_id} className="flip-card-inner">
                <img className="flip-card-front" src={item.img} style={{height: "100%", width: "100%", padding: "10px"}} alt="" />
                <div className="flip-card-back">
                  <h1>{item.name}</h1>
                  <hr />
                  <p>Nickname: {item.nickname}</p>
                  <p>Status: {item.status}</p>
                  <p>Birthday: {item.birthday}</p>
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