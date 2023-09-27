import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Line } from 'recharts';

import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
  const cards = useLoaderData()

  const [donation, setDonation] = useState([]);
  const [localData, setLocalData] = useState(0);
  useEffect(() => {
    const detailsItems = JSON.parse(localStorage.getItem('details'));
    setDonation(detailsItems);
    const localDataLength = detailsItems ? detailsItems.length : 0;
    const totalDataLength = cards.length;
    const remainingPercentage = (localDataLength / totalDataLength) * 100;
    setLocalData(remainingPercentage);
  }, [cards]);

  const data = [
    { name: 'Local Data', value: localData },
    { name: 'Remaining Data', value: 100 - localData },
  ];



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
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className='text-center container w-[95%] mx-auto'>

       <ResponsiveContainer width="95%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={115}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex mx-auto  gap-5 justify-center text-sm font-semibold'>
        <div className='flex justify-center items-center gap-2'>
          <p>Your Donation</p>
          <progress className="progress progress-error w-20" value={localData} max="100"></progress>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <p>Total Donation</p>
          <progress className="progress progress-success w-20" value={100 - localData} max="100"></progress>
        </div>
      </div>

    </div>
  );
};

export default Statistics;