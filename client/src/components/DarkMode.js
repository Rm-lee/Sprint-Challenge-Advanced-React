import { useState } from 'react'

export function useDarkMode(initialValue) {
 const [value, setValue] = useState(initialValue)

const customSetter = changed => {
 setValue(changed)

 }
 return [value, customSetter]
}