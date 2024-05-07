import { useContext } from "react"
import { Color } from "../contexts/Colors"

export default function Cotact(){
    const {color} = useContext(Color)
    return(
        <div>
            <h1 style={{color:color}}>Contact Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex labore repudiandae, vitae accusantium iusto.</p>
        </div>
    )
}