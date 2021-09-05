import styled, { css } from "styled-components";

export const SideBar = styled.div`
position:fixed;
z-index:1;
top:0;
left:0;
height:100%;
width:80px;
border-top-right-radius:25px;
border-bottom-right-radius:25px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background:#363b55;
overflow:hidden;

@media (max-width: 984px) {
    flex-direction: row;
    width:100%;
    height:80px;
    border-bottom-left-radius:25px;
    border-top-right-radius:0px;
  };
`

export const MoonButton = styled.div`
cursor:pointer;
&:hover{
opacity:0.7;
};
margin-bottom:30px;
@media (max-width: 984px) {
  margin-bottom:0;    
  };

`
export const UserPic = styled.img`
height:40px;
width:40px;
border-radius:50%;
margin:20px;
@media (max-width: 984px) {
  margin:20px;
  };
`
export const Divider = styled.div`
position: relative;
width:100%;
border-bottom:1px solid grey;
@media (max-width: 984px) {
  height:80px;
  margin-left:10px;
  width:0px;
  border-left:1px solid grey;
  };
`
export const ErrorMessage = styled.div`
color:red;
margin-top:10px;
`
export const Logos = styled.img`

`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
@media (max-width: 984px) {
 flex-direction:row;
  };
`
export const LogoWrapper = styled.div`

width:100%;
height:80px;
background:#7c5cfb;
display:flex;
align-items:center;
justify-content:center;
@media (max-width: 984px) {
  width:80px;
  height:100%;
}
`
export const InvoiceContainer = styled.div`
position:absolute;
top:0;
width:60%;
height:100%;
left:50%;
transform:translateX(-50%);
background:transparent;
padding:20px;
@media (max-width: 984px) {
  width:98%;
  };
  @media (max-width: 1018px) {
  width:80%;
  };
`
export const TopBar = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
@media (max-width: 984px) {
  margin-top:80px;
  };

`

export const Card = styled.div`
display:${props => props.payStatus === props.payState ? "none" : 'flex'};
justify-content:space-between;

align-items:center;
padding:10px;
border-radius:5px;
margin:8px;
box-shadow:-1px 8px 6px -10px #A0A0A0
;
`
export const CardContainer = styled.div`
`
export const RowWrap = styled.div`
display:flex;
flex-direction:row;

`

export const InvoiceDetailsContainer = styled.div`
  ${RowWrap} {
    align-items: center;
    justify-content:space-between;
    margin-bottom:10px;
  }

`;
export const Delete = styled.div`
background:#ff5c5c;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
color:white;
height: 45px;
width: 100px;
border-radius: 25px;
cursor:pointer;
&:hover{
  background: #f77474;
}
`

export const ColumnWrap = styled.div`
display:flex;
flex-direction:column;
`

export const StatusBox = styled.div`
padding:14px;
border-radius:5px;
font-weight:bold;
font-size:12px;
background:${props => {
    switch (props.status) {
      case 'paid': return '#f1fdf9'
      case 'pending': return '#fdf9ef'
      case 'draft': return '#f2f2f6'
      default: return '#f2f2f6'
    }
  }
  };
  color:${props => {
    switch (props.status) {
      case 'paid': return '#8ad8be'
      case 'pending': return '#d7a459'
      case 'draft': return 'black'
      default: return 'black'
    }
  }

  };
  &:before{
    content:'●';
    color:${props => {
    switch (props.status) {
      case 'paid': return '#8ad8be'
      case 'pending': return '#d7a459'
      case 'draft': return 'black'
      default: return 'black'
    }
  }

  }
  }
`
export const Expand = styled.img`
cursor:pointer;
margin-right:5px;
`

export const Add = styled.div`
background:#7c5cfb;
display:flex;
align-items:center;
justify-content:space-between;
color:white;
height: 45px;
width: 155px;
border-radius: 25px;
cursor:pointer;
&:hover{
  background:#9075fa
}
`
export const Plus = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:33px;
width:33px;
border-radius:50%50%;
background:white;
margin:7px;
`

export const BoldSpan = styled.span`
font-size:18px;
font-weight:bold;
`

export const PlusButtonLabel = styled.span`
margin-right:15px;
font-weight:bold;
font-size:14px;
`

export const Title = styled.div`
font-size:30px;
font-weight:bold;
`

export const CustomToggle = styled.div`
#dropdown-basic{
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  box-shadow: none ;
}
`

export const CardStack = styled.div`
display:flex;
flex-direction:row;

@media (max-width: 984px) {
   flex-direction:column;
  };
`

export const CanvasContainer = styled.div`
 margin-left: 80px;
  overflow-y: auto;
  ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`

export const SubmitButton = styled.div`
background:#50C878;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
color:white;
height: 45px;
width: 100px;
border-radius: 25px;
cursor:pointer;
&:hover{
  background: #77d496
}
`