import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, LineChart, Line, ComposedChart, Area, Cell } from 'recharts';

const CompetitiveAnalysisChart = () => {
  const topCompaniesData = [
    { company: 'LEGO Group', revenue: 7.28, marketShare: 6.7, employees: 25180, innovation: 9.2 },
    { company: 'Mattel Inc.', revenue: 5.42, marketShare: 5.0, employees: 33000, innovation: 8.1 },
    { company: 'Hasbro Inc.', revenue: 5.86, marketShare: 5.4, employees: 6590, innovation: 8.5 },
    { company: 'Bandai Namco', revenue: 6.21, marketShare: 5.7, employees: 8261, innovation: 7.9 },
    { company: 'Spin Master', revenue: 1.95, marketShare: 1.8, employees: 2500, innovation: 8.8 },
    { company: 'MGA Entertainment', revenue: 2.1, marketShare: 1.9, employees: 2200, innovation: 7.6 }
  ];

  const innovationData = [
    { company: 'LEGO', patents: 1247, rnd: 8.2, marketResponse: 9.1 },
    { company: 'Mattel', patents: 892, rnd: 6.8, marketResponse: 7.9 },
    { company: 'Hasbro', patents: 1056, rnd: 7.4, marketResponse: 8.3 },
    { company: 'Bandai', patents: 734, rnd: 6.1, marketResponse: 7.8 },
    { company: 'Spin Master', patents: 456, rnd: 9.1, marketResponse: 8.9 },
    { company: 'MGA', patents: 321, rnd: 5.2, marketResponse: 7.1 }
  ];

  const competitivePositionData = [
    { name: 'LEGO', marketShare: 6.7, profitability: 23.1, x: 6.7, y: 23.1, z: 7280 },
    { name: 'Mattel', marketShare: 5.0, profitability: 18.4, x: 5.0, y: 18.4, z: 5420 },
    { name: 'Hasbro', marketShare: 5.4, profitability: 19.8, x: 5.4, y: 19.8, z: 5860 },
    { name: 'Bandai', marketShare: 5.7, profitability: 16.2, x: 5.7, y: 16.2, z: 6210 },
    { name: 'Spin Master', marketShare: 1.8, profitability: 21.5, x: 1.8, y: 21.5, z: 1950 },
    { name: 'MGA', marketShare: 1.9, profitability: 15.3, x: 1.9, y: 15.3, z: 2100 }
  ];

  const marketSegmentData = [
    { segment: 'Educational', lego: 35, mattel: 15, hasbro: 20, bandai: 10, others: 20 },
    { segment: 'Action Figures', lego: 5, mattel: 25, hasbro: 40, bandai: 15, others: 15 },
    { segment: 'Building Sets', lego: 60, mattel: 5, hasbro: 10, bandai: 5, others: 20 },
    { segment: 'Electronic Toys', lego: 10, mattel: 30, hasbro: 20, bandai: 25, others: 15 },
    { segment: 'Dolls', lego: 2, mattel: 45, hasbro: 15, bandai: 3, others: 35 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Top Companies Performance
            </CardTitle>
            <CardDescription>
              Revenue and market share of leading toy manufacturers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={topCompaniesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="company" angle={-45} textAnchor="end" height={100} stroke="#6B7280" fontSize={10} />
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
                <Bar yAxisId="left" dataKey="revenue" name="Revenue ($B)" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="marketShare" name="Market Share %" stroke="#EC4899" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Competitive Positioning
            </CardTitle>
            <CardDescription>
              Market share vs profitability bubble chart (bubble size = revenue)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="x" name="Market Share" unit="%" stroke="#6B7280" />
                <YAxis dataKey="y" name="Profitability" unit="%" stroke="#6B7280" />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white/95 p-3 rounded-lg shadow-lg border-0">
                          <p className="font-semibold">{data.name}</p>
                          <p>Market Share: {data.marketShare}%</p>
                          <p>Profitability: {data.profitability}%</p>
                          <p>Revenue: ${data.z}M</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter name="Companies" data={competitivePositionData} fill="#8B5CF6">
                  {competitivePositionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${250 + index * 30}, 70%, 60%)`} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Innovation Metrics
            </CardTitle>
            <CardDescription>
              Patent portfolio, R&D spending, and market response
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={innovationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="company" stroke="#6B7280" />
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
                <Bar yAxisId="left" dataKey="patents" name="Patents" fill="#8B5CF6" radius={[2, 2, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="rnd" name="R&D Spending %" stroke="#EC4899" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="marketResponse" name="Market Response" stroke="#10B981" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Market Segment Competition
            </CardTitle>
            <CardDescription>
              Competitive share across different toy categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketSegmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="segment" stroke="#6B7280" />
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
                <Bar dataKey="lego" name="LEGO" stackId="a" fill="#8B5CF6" />
                <Bar dataKey="mattel" name="Mattel" stackId="a" fill="#EC4899" />
                <Bar dataKey="hasbro" name="Hasbro" stackId="a" fill="#3B82F6" />
                <Bar dataKey="bandai" name="Bandai" stackId="a" fill="#10B981" />
                <Bar dataKey="others" name="Others" stackId="a" fill="#6B7280" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetitiveAnalysisChart;
