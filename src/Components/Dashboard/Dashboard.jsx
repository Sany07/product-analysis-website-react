import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis,Tooltip,Bar, BarChart, PieChart, Pie, Area, CartesianGrid, AreaChart } from 'recharts';

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return(
    <>
        { data && 
            <>
            <Row  className="justify-content-md-center my-5">
                <Col md={6}>        
                <h5 className='text-center fw-bold text-primary'>Month Wise Sell</h5>
                        <LineChart width={400} height={300} data={data}>
                            {/* <Line dataKey={''}></Line> */}
                            <Line dataKey={'sell'}></Line>
                            <XAxis dataKey="month"></XAxis>
                            <Tooltip />
                            <YAxis></YAxis>
                        </LineChart>
                    
        
                    <p className='text-center'>Sell</p>
                </Col>
                <Col md={6}>
                    <h5 className='text-center fw-bold text-primary'>investment VS Revenue</h5>
                    <AreaChart width={400} height={300} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                <p className='text-center'>Sell</p>
                </Col>   
            </Row>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                <h5 className='text-center fw-bold text-primary'>investment VS Revenue</h5>
                <BarChart className='ms-2' width={400} height={300} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis></YAxis>
                </BarChart>
                </Col>   
                <Col md={6}>
                    <h5 className='text-center fw-bold text-primary'>investment VS Revenue</h5>
                    <PieChart width={400} height={300}>
                    <Pie data={data} dataKey="investment" nameKey="Investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="Revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                </Col> 
            </Row>
            </>   
        }
    </>
    );
};

export default Dashboard;
