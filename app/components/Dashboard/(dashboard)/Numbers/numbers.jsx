'use client';

import {useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { value: 1000 },
  { value: 70500 },
  { value: 30000 },
  { value: 99000 },
];

export default function RevenueCard({ title, value}) {

    
  return (
    <div className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-lg">
      <h2 className="text-sm uppercase tracking-wide text-black">{title}</h2>
      <div className="text-3xl font-bold mt-1">{ value }</div>
      {value > 0 ?(
        <div className="text-green-600 text-sm mt-1">Monitore seus dados em tempo real</div>
      ) : (
        <div className="text-red-400 text-sm mt-1">Monitore seus dados em tempo real</div>
      )}

      <div className="mt-6 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone"
              dataKey="value"
              stroke="#000000"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
