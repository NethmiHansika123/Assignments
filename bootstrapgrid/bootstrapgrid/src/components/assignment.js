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
  max-width: 100%;
  
}
.my-col{
  border: 3px dotted blue;
}
  
`;



function Assignment (){
    

    return (
     <Wrapper>
            <div class="container">
     
    <div class="row my-row">
        <div class="col-lg col-md-4 my-col">col 1</div>
        <div class="col-lg col-md-4 my-col">col 2</div>
        <div class="w-50 hidden-md-up"></div>
        <div class="col-lg col-md-4 my-col">col 3</div>
        <div class="col-lg col-md-4 my-col">col 4</div>
    </div>
</div>
        
    </Wrapper>
  );
    }

export default Assignment;