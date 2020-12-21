import CalcButton from './CalcButton';

const ButtonList = ({ clickableElem }) => {

    // Create buttons by mapping through array and passing
    // props to CalcButton component which returns a JSX element
    return (
        clickableElem.map((elem, i) => {
            return (
                <CalcButton 
                    id={clickableElem[i].id}
                    value={clickableElem[i].value}
                />
            );
        })
    );
}

export default ButtonList;