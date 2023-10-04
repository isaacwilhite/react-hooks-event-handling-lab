// Code EyesOnMe Component Here
const EyesOnMe = () => {
    const focused = () => {
        console.log("Good!")
    }
    const notFocused = () => {
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onFocus={focused} onBlur={notFocused}>Eyes on me</button>
    )
}

export default EyesOnMe