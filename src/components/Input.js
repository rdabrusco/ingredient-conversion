import { capitalize } from "../utils/capitalize"
// import { submitOnEnter } from "../utils/submitOnEnter"

export function Input({name, type}){

    return(
        <div className="form-control  max-w-xs">
            <label className="label">
            <span className="label-text">{capitalize(name)}:{type === 'text' && '(space between amount and unit)'}</span>
            </label>
            <input type={type} id={name} placeholder="Type here" className="input input-bordered  max-w-xs" />
        </div>
    )
}