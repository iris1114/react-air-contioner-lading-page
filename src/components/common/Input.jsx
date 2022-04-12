import styled from "styled-components";

const StyledInput = styled.div`
 input, textarea{
     width: 100%;
     padding:21px 30px;
     color: #686a6f;
     background-color: var(--input-bg);
     border: 1px solid var(--line-gray);
     border-radius: 4px;
     margin-top: 10px;
     font-family: var(--font);
     

     &:focus{
        outline: none;
        border: 1px solid var(--base-color);  
     }

 }  
`

const Input = ({ type ,name, placeholder, id, rows, cols}) => {
    return (
      <StyledInput>
          {
             type === "textarea" ? (
                 <textarea name={name} placeholder={placeholder} id={id} cols={cols} rows={rows}></textarea>
             ) : (
                <input type={type} name={name} placeholder={placeholder} id={id}/>
             )
          }
      </StyledInput>
    );
  };
  
  export default Input;
  