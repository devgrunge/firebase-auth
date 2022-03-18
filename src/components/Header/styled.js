import styled from 'styled-components';

export const AreaHeader = styled.div`
heigth: 60px;
background: linear-gradient(45deg, #FE5D26, #370D44);



.container{
  display: flex;
  fontsize: 32px;
  
}

.logo{
dispay: flex;
text-decoration: none;
justify-content: center;
align-items:center;
color: #fff;

&:hover{
  color: #F5BB00
}
}

nav{

  ul{
  display: flex;
  justify-content: flex-end;
    }
  li{
      list-style: none;
      margin: 0 10px 10px 10px;
  }
  a{
      text-decoration: none;
      color: #fff;

      &:hover{
        color: #F5BB00
      }
  }
};


`;