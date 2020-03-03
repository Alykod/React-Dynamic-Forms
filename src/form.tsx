import React, { useState, useMemo } from 'react';
import LabelInput from './labelInput';

type Values = {
    id: string,
    data?: any,
    inputType?: string,
    min?: number,
    max?: number,
}

type Props = {
    values: Values[]
}

const Form = (props: Props) => {

    const [state, setState] = useState<any>(props.values);

    const handleProps = (value: any, location: number) => {
        const updatedArray = state;
        updatedArray[location] = { ...state[location], data: value }
        setState(updatedArray)
    }

    const createLabels = () => {
        return state.map((obj: any, index: number) => {
            return <LabelInput changedValue={handleProps} values={obj} key={obj.id} arrayInd={index} />
        })
    }

    return (
        <form id="svgFormsContainer">
            {createLabels()}
        </form>

    )
}


export default Form


