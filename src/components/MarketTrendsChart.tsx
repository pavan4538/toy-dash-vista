
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MarketTrendsChart = () => {
  const marketGrowthData = [
    { year: '2019', totalMarket: 95.2, educational: 15.8, electronic: 25.4, traditional: 32.1, outdoor: 21.9 },
    { year: '2020', totalMarket: 98.7, educational: 18.2, electronic: 28.1, traditional: 30.8, outdoor: 21.6 },
    { year: '2021', totalMarket: 102.1, educational: 21.5, electronic: 31.2, traditional: 29.4, outdoor: 20.0 },
    { year: '2022', totalMarket: 105.8, educational: 24.8, electronic: 33.7, traditional: 28.1, outdoor: 19.2 },
    { year: '2023', totalMarket: 107.3, educational: 27.1, electronic: 35.2, traditional: 26.8, outdoor: 18.2 },
    { year: '2024', totalMarket: 109.2, educational: 29.8, electronic: 37.1, traditional: 25.4, outdoor: 16.9 }
  ];

  const seasonalData = [
    { month: 'Jan', sales: 82, production: 85 },
    { month: 'Feb', sales: 78, production: 88 },
    { month: 'Mar', sales: 85, production: 92 },
    { month: 'Apr', sales: 88, production: 90 },
    { month: 'May', sales: 92, production: 95 },
    { month: 'Jun', sales: 95, production: 98 },
    { month: 'Jul', sales: 98, production: 100 },
    { month: 'Aug', sales: 96, production: 102 },
    { month: 'Sep', sales: 102, production: 105 },
    { month: 'Oct', sales: 115, production: 110 },
    { month: 'Nov', sales: 135, production: 125 },
    { month: 'Dec', sales: 145, production: 115 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Market Growth by Category
          </CardTitle>
          <CardDescription>
            Billion USD - 6-year trend analysis showing category performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={marketGrowthData}>
              <defs>
                <linearGradient id="colorEducational" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorElectronic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EC4899" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="year" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="educational" name="Educational" stackId="1" stroke="#8B5CF6" fill="url(#colorEducational)" />
              <Area type="monotone" dataKey="electronic" name="Electronic" stackId="1" stroke="#EC4899" fill="url(#colorElectronic)" />
              <Area type="monotone" dataKey="traditional" name="Traditional" stackId="1" stroke="#3B82F6" fill="url(#colorTraditional)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Seasonal Sales vs Production
          </CardTitle>
          <CardDescription>
            Monthly comparison showing demand patterns and production alignment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                name="Sales Index" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="production" 
                name="Production Index" 
                stroke="#EC4899" 
                strokeWidth={3}
                dot={{ fill: '#EC4899', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#EC4899', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketTrendsChart;
