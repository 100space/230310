import { useState } from "react"

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => {
        const { value } = e.target
        setValue(value)
    }
    return {
        value,
        onChange,
    }
}
