import React from "react";

const FormInput = props => {

    /**
     * * For each new id or className used you need to create a new CSS style needed.
     * *Props:
         *@param inputRequired validates on submit that the input has a value, if not it will display a tooltips asking for username
         *@param inputValue allow the input to display the real and updated username value saved.
         *@param inputContainerId sets the input control container id need to apply css. NOTE: CSS NEEDS TO BE CREATED FOR ANY NEW ID
         *@param inputContainerClass sets bootstrap input control container class.
         *@param inputType sets input type, depending on type a format can be applied. Ex: if type=password, input value will be display with: **** .
         *@param inputId sets input id to apply inner css for input. 
         *@param inputClass sets boostrap input class to apply form control functionality.
         *@param inputPlaceholder sets a place holder to the input.
         *@param onChangeInput Does a function action when a change is detected on input.
         *@param inputRequired Enables required option in input. If Enable and input value is empty then it will display a tooltip asking user for the value.
         *@param inputAutoFocus  Enables autofucos option in input. Only enable this option for 1 input.
         *@param inputText sets text to display for input.
     * *Case:
     * @param inputRequired if true the first case will be trigger enabling the required option on inputs.
     * if false second case will be trigger desabling the required option on inputs.
     * @param inputAutoFocus inside each case with be an if validation for enabling the autofocus for each inputs if the value is true.
    */

    let {
        inputContainerId,
        inputContainerClass,
        inputValue,
        inputType,
        inputId,
        inputClass,
        inputPlaceholder,
        onChangeInput,
        inputRequired,
        inputAutoFocus,
        inputText } = props

    switch (inputRequired) {
        case true:
            if (inputAutoFocus) {
                return (
                    <div id={inputContainerId} className={inputContainerClass} data-tip=''>
                        <input
                            value={inputValue}
                            type={inputType}
                            id={inputId}
                            className={inputClass}
                            placeholder={inputPlaceholder}
                            onChange={onChangeInput}
                            required autoFocus />
                        <label
                            htmlFor={inputId}>{inputText}</label>
                    </div>
                );
            }
            return (
                <div id={inputContainerId} className={inputContainerClass} data-tip=''>
                    <input
                        value={inputValue}
                        type={inputType}
                        id={inputId}
                        className={inputClass}
                        placeholder={inputPlaceholder}
                        onChange={onChangeInput}
                        required />
                    <label
                        htmlFor={inputId}>{inputText}</label>
                </div>
            );

        case false:
            if (inputAutoFocus) {
                return (
                    <div id={inputContainerId} className={inputContainerClass} data-tip=''>
                        <input
                            value={inputValue}
                            type={inputType}
                            id={inputId}
                            className={inputClass}
                            placeholder={inputPlaceholder}
                            onChange={onChangeInput}
                            autoFocus />
                        <label
                            htmlFor={inputId}>{inputText}</label>
                    </div>
                );
            }
            return (
                <div id={inputContainerId} className={inputContainerClass} data-tip=''>
                    <input
                        value={inputValue}
                        type={inputType}
                        id={inputId}
                        className={inputClass}
                        placeholder={inputPlaceholder}
                        onChange={onChangeInput}
                    />
                    <label
                        htmlFor={inputId}>{inputText}</label>
                </div>
            );

        default:
            return (
                <div id={inputContainerId} className={inputContainerClass} data-tip=''>
                    <input
                        value={inputValue}
                        type={inputType}
                        id={inputId}
                        className={inputClass}
                        placeholder={inputPlaceholder}
                        onChange={onChangeInput}
                        required />
                    <label
                        htmlFor={inputId}>{inputText}</label>
                </div>
            );
    }
};

export default FormInput;
