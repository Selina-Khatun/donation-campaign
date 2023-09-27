import React, { PureComponent, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Line } from 'recharts';
import useGetCards from '../../hook/useGetCards';
import { useLoaderData, useParams } from 'react-router-dom';

const Statistics = () => {
  // const { id } = useParams()
  // console.log(id)
  const cards = useLoaderData()    
  console.log(cards.length)
     

    
      const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
    return (
        <div>
            this is Statistics
            <PieChart width={800} height={800}>
      <Pie
        // data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {/* {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          
        ))} */}
        <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }}></Line>
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </Pie>
    </PieChart>
    {/* <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart> */}

        </div>
    );
};

export default Statistics;