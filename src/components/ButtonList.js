import CalcButton from './CalcButton';

const ButtonList = ({ clickableElem, updateDisplay }) => {

    // Create buttons by mapping through array and passing
    // props to CalcButton component which returns a JSX element
    return (
        clickableElem.map((elem, i) => {
            return (
                <CalcButton 
                    key={i}
                    id={clickableElem[i].id}
                    value={clickableElem[i].value}
                    updateDisplay={updateDisplay}
                />
            );
        })
    );
}

export default ButtonList;