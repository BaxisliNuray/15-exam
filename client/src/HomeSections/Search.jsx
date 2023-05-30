import { TextField } from '@mui/material'
import React from 'react'

function Search({storage,setInvest}) {
    const handleSubmit=(e)=>{
        const filtered=storage.current.filter(x=>x.title.tolowerCase().includes(e.target.value.tolowerCase().trim()))
        setInvest(filtered)
    }
    return (
        <div style={{paddingTop:'5% '}}>
            <TextField id="outlined-basic" onSubmit={handleSubmit} label="SEARCH.." variant="outlined" />

        </div>
    )
}

export default Search