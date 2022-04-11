import '../../assets/css/bootstrap/bootstrap-grid.css';
import styled from "styled-components";
const Wrapper = styled.div`

-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;

.box{
    color:white;
    font-size: 100px;
    text-align: center;
    text-shadow: 4px 4px 0 rgba(0,0,0,0.1);
    padding: 10px;
    width: 300px;
    margin:10px;
}

.box1{
    background-color: #3498db;
}
.box2{
    background-color: #9b59b6;
}
.box3{
    background-color: #f1c40f;
}
.box4{
    background-color: #bdc3c7;
}
.container{
    display: flex;
    border: 10px solid goldenrod;
    min-height:100vh;
    flex-direction:column; /*In here check row,row-reverse,column,column-reverse of the flex-direction*/
    flex-wrap: wrap; /*In here check wrap and nowrap both of the column and row*/
}


`;



function FlexContainer (){
    

    return (
      <Wrapper>
            <div className="container"> 
            <div className='box box1'>1</div> 
            <div className='box box2'>2</div> 
            <div className='box box3'>3</div> 
            <div className='box box4'>4</div>   
              
            </div>
            </Wrapper> 
      
  );
    }

export default FlexContainer;