import React from 'react'
import style from "../HomeSections/style.module.css"

function Hero() {
    return (
        <div style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/invest/images/home_slider_1.jpg)', height: '80vh', backgroundSize: 'cover' }}>
            <div style={{ display: 'flex', textAlign: 'center', color: 'white'}}>
                <div style={{backgroundColor:' rgba(0,0,0,0.5343312324929971)',padding:'5%' ,margin:'10% auto'}}>
                    <h1 style={{ fontSize: '60px', fontWeight: '500' }}>A new World is coming </h1>
                    <p style={{ padding: '2% 0%' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam <br /> illo rem earum recusandae, vel doloribus praesentium maiores? Quaerat, doloribus.</p>
                    <button className={style.herobtn}>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Hero