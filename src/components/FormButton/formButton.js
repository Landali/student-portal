import React from "react";

const FormButton = props => {

    /**
    * * For each new id or className used you need to create a new CSS style needed.
    * *Props:
        *@param buttonId sets input id to apply css for button. 
        *@param buttonClass sets boostrap button class.
        *@param buttonType sets button type and apply event functionality applied to form.
        *@param buttonText sets text to display for button.
        *@param enableClick enables onClick event on button. 
        *@param buttonClick sets a function to the button when it is clicked.
        *@param buttonEnable enables and disabled button if all requirement are valid.
    * *Case:
    * @param enableClick if true the first case will be trigger enabling an onClick event on button.
    * if false second case will be trigger desabling the onClick event on button.
    * * Local variables 
    * @params disabledButtonClass if buttonEnable props is false it will set a disabled property in the button className. 
    * If true it will set the prop without the disabled property.
   */

    let {
        buttonId,
        buttonClass,
        buttonType,
        buttonText,
        enableClick,
        buttonClick,
        buttonEnable
    } = props

    let disabledButtonClass = `${buttonClass} disabled`

    switch (enableClick) {
        case true:
            return (
                <button
                    id={buttonId}
                    className={buttonEnable ? buttonClass : disabledButtonClass}
                    type={buttonType}
                    onClick={buttonClick}
                >{buttonText}
                </button>
            )
        case false:
            return (
                <button
                    id={buttonId}
                    className={buttonEnable ? buttonClass : disabledButtonClass}
                    type={buttonType}
                >{buttonText}
                </button>
            )
        default:
            return (
                <button
                    id={buttonId}
                    className={buttonEnable ? buttonClass : disabledButtonClass}
                    type={buttonType}
                >{buttonText}
                </button>
            )
    }

};

export default FormButton;
