import React from "react";
function Showtodo(props){
    return(
        <div className="container">
            <div className="row">
                <div className="column">
                    <p>{props.task}</p>
                </div>
                <div className="column">
                    <button onClick={()=>{
                        props.onSelect(props.id)
                    }}>del</button>
                    
                </div>
            </div>

        </div>
    )
}
export default Showtodo