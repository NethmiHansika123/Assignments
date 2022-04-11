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
  
    
}

.box1{
    background-color: #3498db;
   // order: 2;
  // font-size: 25px;
  //flex: 1;
  flex-grow: 1;
}
.box2{
    background-color: #9b59b6;
}
.box3{
    background-color: #f1c40f;
    //flex: 2;
    //order: 3;
    //font-size: 50px;
}
.box4{
    background-color: #bdc3c7;
}
.container{
    display: flex;
    //justify-content: space-between; /*check center,space-between,space-around*/
    border: 10px solid mistyrose;
   // flex-direction: column;/*In here check row,row-reverse,column,column-reverse of the flex-direction*/
    //align-items: center;/*flex-start,center,baseline*/
    height: 100vh;
    flex-wrap: wrap;
    align-content: flex-start;/*flex-end,center,space-between,space-around*/
    

}


`;



function FlexOrder (){
    

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

export default FlexOrder;