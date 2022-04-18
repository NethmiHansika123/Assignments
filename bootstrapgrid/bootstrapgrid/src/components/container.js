//import "./assets/css/bootstrap/bootstrap-grid.css";
import '../assets/css/bootstrap/bootstrap-grid.css';
import styled from "styled-components";
const Wrapper = styled.div`

margin: 30px;

.my-container{
  border: 1px solid green;
}
.my-row{
  border: 3px solid red;
  height: 300px;
}
.my-col{
  border: 3px dotted blue;
}
  
`;



function Container (){
    

    return (
      <Wrapper>
            <div className="container my-container">    
              <div className="row my-row">
                    <div className="col-lg-4 col-md-6 my-col">
                        Row 1 Col 1
                    </div>
                    <div className="col-lg-8 col-md-6 my-col">
                      Row 1 Col 2
                      
                    </div>

              </div>
              <div className="row justify-content-start my-row">
                    <div className="col-4 my-col">
                      Row 2 Col 1
                      
                    </div>

             
                    <div className="col-4 my-col">
                      Row 2 Col 2
                      
                    </div>
                    </div> 
                    <div className="row justify-content-center my-row">
                    <div className="col-4 my-col">
                      Row 2 Col 1
                      
                    </div>

             
                    <div className="col-4 my-col">
                      Row 2 Col 2
                      
                    </div>
                    </div> 
                    <div className="row justify-content-end my-row">
                    <div className="col-4 my-col">
                      Row 2 Col 1
                      
                    </div>

             
                    <div className="col-4 my-col">
                      Row 2 Col 2
                      
                    </div>
                    </div>   
                    <div className="row justify-content-around my-row">
                    <div className="col-4 order-12 offset-md-2 my-col">
                      Row 2 Col 1
                      
                    </div>

             
                    <div className="col-4 align-self-start order-2 my-col">
                      Row 2 Col 2
                      
                    </div>
                    </div> 
                    <div className="row justify-content-between align-items-center my-row">
                    <div className="col-4 my-col">
                      Row 2 Col 1
                      
                    </div>

             
                    <div className="col-4 my-col">
                      Row 2 Col 2
                      
                    </div>
                    </div>          
               
            </div>
            </Wrapper> 
      
  );
    }

export default Container;