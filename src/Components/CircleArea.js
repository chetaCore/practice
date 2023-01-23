import React, {useState} from 'react'
import { Input, Card, Space, Image} from 'antd'

import logo from './circle.png'

function CalculateCircleArea ({circleradius})
{
    let radius = (Math.PI * Math.pow(circleradius,2)).toFixed(2)
        if (isNaN(radius)) return "Ошибка ввода"
    return "Ваша площадь = " + radius
} 
   

export default function App(){
        const [circleradius, setCircleRadius] = useState('0')
        return(
            <div className="App">
                <header className="App-header">
                    <Space direction ="vertical" size = "small" style ={{display: 'flex'}} align = "start">
                        <Card title = "площадь круга" size = "small" bordered = {false} style = {{width: 300, alignItems: 'center'}}>
                            <Space direction ="vertical" size ={[1, 12]} >  
                                    <Image
                                        width={200}
                                        src= {logo}
                                    />
                                    <div style = {textStyle}>Введите радиус</div>
                                <Input 
                                    placeholder='радиус'
                                    size = "large"
                                    maxLength = {4}
                                    onChange = {(e) => setCircleRadius(e.target.value)}
                                    style ={{width: '40%', fontSize: 20}}
                                />
                                <div style = {textStyle}><CalculateCircleArea circleradius = {circleradius}/></div>
                            </Space>
                        </Card>
                    </Space> 
                </header>
            </div>
        )
}

const textStyle = {
    fontSize: 30,
}
