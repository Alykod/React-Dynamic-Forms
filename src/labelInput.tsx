import React, {useState, useEffect} from 'react';


const Input = (props: any) => {
    const [value, setValue] = useState(props.values.data || "")
    const [focus, setFocus] = useState(false);
    const [valid, setValid] = useState(true);
    const inputType =  props.values.inputType || "text";
    const label =  props.values.label || "";
    const [className, setClassName] = useState(props.className || "iconTriangle")
    const id = props.values.id || "";

    useEffect(() => {
        if(props.values.min || props.values.max) {
            let valid;
            let trimValue = value.trim();
            if(props.values.min && props.values.max) {
               valid = trimValue.length >= props.values.min && trimValue.length <= props.values.max ?  true : false;
            } else if(props.values.min) {
               valid =  trimValue.length >= props.values.min ? true :  false;
            } else {
               valid =  props.values.max && trimValue.length <= props.values.max  ? true :  false;
            }
           setValid(valid)
            
        } 
    }, [value, props.values.min, props.values.max])

    useEffect(()=> {
        if(value !== "") {
            getClassName();
        } else {
            setClassName("IconTriangle Focus")
        }
    }, [value])

    const getClassName = () => {
        let className = "iconTriangle";
        if(focus) {
            className += " Focus";
        }
        if(valid) {
            className += " Valid"
        }if(value && !valid) {
            className += " Invalid"
        }

        setClassName(className)
    }

    const handleBlur = () => {
        // setFocus(false)
        if((value !== props.values.data) || (value !== "" && !props.values.data)) {
            props.changedValue(value, id, props.arrayInd)
        }
    }

    const handleValue = (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
        //@ts-ignore
        setValue(e.target.value)
    }

    const handleFocus = () => {
        setFocus(true)
    }
    

return (
    <label> 
    {/* <p>Test</p> */}
    <input value={value} id={id} onChange={handleValue} autoComplete="off" onKeyDown={handleValue} onBlur={handleBlur} type={inputType} onFocus={handleFocus} placeholder={label} />
    <svg viewBox="0 0 20 20" className={className} >
      <path d="M0 0 L10 10 L0 20" fill="none" stroke="black"></path>
  </svg>
  </label>
)
}


export default React.memo(Input);