import { Button } from '@mui/material'
import React, { useState } from 'react'

function Sort({ invest, setInvest }) {
    const [sort, setSort] = useState()
    const handleClick = () => {
        let sortDatas
        if (sort) {
            sortDatas = invest.sort((a, b) => a.price - b.price)
        }
        else {
            sortDatas = invest.sort((a, b) => b.price - a.price)
        }
        setInvest(sortDatas)
        setSort([...sort])
    }

    return (

        <>
            <Button onClick={handleClick}>SORT</Button>
        </>)
}

export default Sort