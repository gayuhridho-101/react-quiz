import { cssWrapper } from './style';

const Comp2 = ({lastInput}) => {
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {lastInput}</div>
    </>
  )
}

export default Comp2;