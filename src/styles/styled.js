import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Button = styled.button`
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  text-align: center;
  border: 0;
  width: 7rem;
  margin-left: 2rem;
  &:hover{
    background: #00bd68;
    box-shadow: -1px 1px 35px 0px #00bd68;
    -webkit-box-shadow: -1px 1px 35px 0px #00bd68;
    -moz-box-shadow: -1px 1px 35px 0px #00bd68;
  }
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: -1px 1px 35px 0px #51f0a8;
    -webkit-box-shadow: -1px 1px 35px 0px #51f0a8;
    -moz-box-shadow: -1px 1px 35px 0px #51f0a8;
`

export const Input = styled.input`
    width: 60%;
    height: 3rem;
    background-color: #51f0a8;
    color: #060727;
    border: none;
    border-radius: 0.7rem;
    outline: none;
    padding: 1rem;
    &:focus{
        background-color: #8bf7c5;
        box-shadow: -1px 1px 35px 0px #a4f7d2;
        -webkit-box-shadow: -1px 1px 35px 0px #a4f7d2;
        -moz-box-shadow: -1px 1px 35px 0px #a4f7d2;
    }
    color: #060727;
    font-size: 2rem;
    box-shadow: -1px 1px 35px 0px #51f0a8;
    -webkit-box-shadow: -1px 1px 35px 0px #51f0a8;
    -moz-box-shadow: -1px 1px 35px 0px #51f0a8;
    
`


export const Container = styled(motion.div)`
    background-color: #011804;
    width: 50rem;
    border-radius: 0.7rem;
    height: 40vh;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    box-shadow: -1px 1px 35px 0px #51f0a8;
    -webkit-box-shadow: -1px 1px 35px 0px #51f0a8;
    -moz-box-shadow: -1px 1px 35px 0px #51f0a8;
`

export const Listed = styled(motion.div)`
    background-color: #011804;
    border-radius: 0.7rem;
    margin-top: 2rem;
    padding: 2rem;
    box-shadow: -1px 1px 35px 0px #51f0a8;
    -webkit-box-shadow: -1px 1px 35px 0px #51f0a8;
    -moz-box-shadow: -1px 1px 35px 0px #51f0a8;
`
export const StyledList = styled.li`
    color: #060727;
    list-style: none;
    font-size: 3rem;
    
`
export const StyledListCont = styled.div`
    border-radius: 0.7rem;
    padding-left: 1rem;
    background-color: #8bf7c5;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-top: 1rem;
    box-shadow: -1px 1px 25px 0px #51f0a8;
    -webkit-box-shadow: -1px 1px 25px 0px #51f0a8;
    -moz-box-shadow: -1px 1px 25px 0px #51f0a8;
`
export const ListItemCont = styled.div`
    overflow: hidden;
    width: 30.8rem;
`
export const DeleteButton = styled.button`
  background: #005b43;
  border-radius: 6px;
  border: none;
  width: 4rem;
  height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  font-size: 1.4rem;
  margin-left: 10rem;
  font-weight: bold;
&:hover,
&:active {
  background: #011e16;
  color: #e50800;
  box-shadow: -4px 4px 27px 0px #e50800;
    -webkit-box-shadow: -4px 4px 27px 0px #e50800;
    -moz-box-shadow: -4px 4px 27px 0px #e50800;
}

&:active {
    opacity: .5;
}
`