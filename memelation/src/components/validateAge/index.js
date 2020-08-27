import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ValiadteAge(){

    const validateClick = () => {
        if(age >= 18) return 
        else his.goBack()
    }
    const his = useHistory()
    const [age,setAge] = useState(0)
    return(
        <div>
            <h1>Validate page</h1>
            <div>
                <label>Qual sua idade?</label>
                <input type='number' value={age}
                onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <Link to='/adultMeme' onClick={validateClick}></Link>
            </div>
        </div>
    )
}