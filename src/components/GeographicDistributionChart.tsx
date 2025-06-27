
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const GeographicDistributionChart = () => {
  const regionalData = [
    { region: 'North America', manufacturers: 485, marketShare: 28.5, growth: 5.2 },
    { region: 'Europe', manufacturers: 392, marketShare: 23.1, growth: 4.8 },
    { region: 'Asia Pacific', manufacturers: 1247, marketShare: 35.2, growth: 12.3 },
    { region: 'Latin America', manufacturers: 156, marketShare: 8.7, growth: 8.9 },
    { region: 'Middle East & Africa', manufacturers: 78, marketShare: 4.5, growth: 15.6 }
  ];

  const countryData = [
    { name: 'China', value: 35.2, color: '#8B5CF6' },
    { name: 'United States', value: 18.7, color: '#EC4899' },
    { name: 'Germany', value: 8.9, color: '#3B82F6' },
    { name: 'Japan', value: 7.4, color: '#10B981' },
    { name: 'United Kingdom', value: 6.2, color: '#F59E0B' },
    { name: 'Others', value: 23.6, color: '#6B7280' }
  ];

  const exportData = [
    { year: '2019', china: 42.1, usa: 18.3, germany: 12.4, japan: 8.9, others: 18.3 },
    { year: '2020', china: 43.8, usa: 17.9, germany: 11.8, japan: 8.7, others: 17.8 },
    { year: '2021', china: 45.2, usa: 17.1, germany: 11.2, japan: 8.4, others: 18.1 },
    { year: '2022', china: 46.8, usa: 16.8, germany: 10.9, japan: 8.1, others: 17.4 },
    { year: '2023', china: 48.1, usa: 16.2, germany: 10.4, japan: 7.8, others: 17.5 },
    { year: '2024', china: 49.3, usa: 15.9, germany: 10.1, japan: 7.6, others: 17.1 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Regional Distribution
            </CardTitle>
            <CardDescription>
              Manufacturers count and market share by region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} stroke="#6B7280" fontSize={10} />
                <YAxis yAxisId="left" stroke="#6B7280" />
                <YAxis yAxisId="right" orientation="right" stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="manufacturers" name="Manufacturers" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="marketShare" name="Market Share %" fill="#EC4899" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Top Manufacturing Countries
            </CardTitle>
            <CardDescription>
              Global market share distribution by country
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={countryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Export Trends by Country
          </CardTitle>
          <CardDescription>
            6-year trend showing export market share evolution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={exportData}>
              <defs>
                <linearGradient id="colorChina" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorUSA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EC4899" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorGermany" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorJapan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
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
              <Area type="monotone" dataKey="china" name="China" stackId="1" stroke="#8B5CF6" fill="url(#colorChina)" />
              <Area type="monotone" dataKey="usa" name="USA" stackId="1" stroke="#EC4899" fill="url(#colorUSA)" />
              <Area type="monotone" dataKey="germany" name="Germany" stackId="1" stroke="#3B82F6" fill="url(#colorGermany)" />
              <Area type="monotone" dataKey="japan" name="Japan" stackId="1" stroke="#10B981" fill="url(#colorJapan)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeographicDistributionChart;
