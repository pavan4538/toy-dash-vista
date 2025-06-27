
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const ConsumerInsightsChart = () => {
  const ageGroupData = [
    { name: '0-2 years', value: 18, color: '#8B5CF6' },
    { name: '3-5 years', value: 25, color: '#EC4899' },
    { name: '6-8 years', value: 22, color: '#3B82F6' },
    { name: '9-12 years', value: 20, color: '#10B981' },
    { name: '13+ years', value: 15, color: '#F59E0B' }
  ];

  const satisfactionData = [
    { category: 'Educational Toys', satisfaction: 4.8, purchases: 89 },
    { category: 'Electronic Games', satisfaction: 4.6, purchases: 76 },
    { category: 'Building Blocks', satisfaction: 4.7, purchases: 82 },
    { category: 'Dolls & Figures', satisfaction: 4.4, purchases: 68 },
    { category: 'Outdoor Toys', satisfaction: 4.5, purchases: 71 },
    { category: 'Arts & Crafts', satisfaction: 4.9, purchases: 85 }
  ];

  const preferenceData = [
    { subject: 'Quality', A: 95, B: 88, fullMark: 100 },
    { subject: 'Price', A: 78, B: 85, fullMark: 100 },
    { subject: 'Safety', A: 98, B: 92, fullMark: 100 },
    { subject: 'Educational Value', A: 89, B: 76, fullMark: 100 },
    { subject: 'Durability', A: 91, B: 84, fullMark: 100 },
    { subject: 'Brand Trust', A: 82, B: 79, fullMark: 100 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Consumer Age Demographics
          </CardTitle>
          <CardDescription>
            Market share distribution by age groups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ageGroupData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {ageGroupData.map((entry, index) => (
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

      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Category Satisfaction vs Purchases
          </CardTitle>
          <CardDescription>
            Customer satisfaction ratings and purchase frequency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={satisfactionData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#6B7280" />
              <YAxis dataKey="category" type="category" width={100} stroke="#6B7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="satisfaction" name="Satisfaction (1-5)" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
              <Bar dataKey="purchases" name="Purchase Index" fill="#EC4899" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Consumer Preference Factors
          </CardTitle>
          <CardDescription>
            Key factors influencing purchase decisions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={preferenceData}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6B7280' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: '#6B7280' }} />
              <Radar name="Premium Segment" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} strokeWidth={2} />
              <Radar name="Mass Market" dataKey="B" stroke="#EC4899" fill="#EC4899" fillOpacity={0.3} strokeWidth={2} />
              <Legend />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerInsightsChart;
