import { capitalize } from "../utils/capitalize"

export function Input({name, type}){

    return(
        <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text">{capitalize(name)}:</span>
            </label>
            <input type={type} id={name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    )
}