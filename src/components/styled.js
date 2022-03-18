import styled from "styled-components";

export const BtnDefaultIcons = styled.button`
   display: flex;
   align-items: center;
   padding: 10px;
   border-radius: 5px;;
   border: 0px;
   outline: none;
   font-size: 16px;
   font-weigth: bold;
   margin-bottom: 15px;
   transition: 0.4s;
   
   &:hover{
   background-color: #ccc;

   }

   .center{
   text-align: center;
   width: 100%

   }

`;

export const BtnDefault = styled(BtnDefaultIcons)`
background-color: #7D2AE8;
color: #FFF;
display: inline;


&:hover{
background-color: #4E129C;

}

`;