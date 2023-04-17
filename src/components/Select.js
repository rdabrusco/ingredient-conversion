
export default function Select({name, options}) {
    const choices = options.map(option => {
        return (<option key={option} value={option}>{option}</option>)
    })
    return(
        <select name={name} id={name}>
            {choices}
        </select>
    )
}