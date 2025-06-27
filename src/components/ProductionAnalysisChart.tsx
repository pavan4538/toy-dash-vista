
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ComposedChart, Area } from 'recharts';

const ProductionAnalysisChart = () => {
  const productionEfficiencyData = [
    { facility: 'China - Guangzhou', efficiency: 95, capacity: 12000, cost: 2.8 },
    { facility: 'Vietnam - Ho Chi Minh', efficiency: 92, capacity: 8500, cost: 2.2 },
    { facility: 'Mexico - Tijuana', efficiency: 88, capacity: 6200, cost: 3.1 },
    { facility: 'USA - Ohio', efficiency: 91, capacity: 4800, cost: 4.2 },
    { facility: 'Germany - Munich', efficiency: 94, capacity: 3600, cost: 5.1 },
    { facility: 'India - Chennai', efficiency: 87, capacity: 7200, cost: 1.9 }
  ];

  const qualityMetricsData = [
    { month: 'Jan', defectRate: 2.1, returnRate: 1.8, satisfaction: 4.5 },
    { month: 'Feb', defectRate: 1.9, returnRate: 1.6, satisfaction: 4.6 },
    { month: 'Mar', defectRate: 1.7, returnRate: 1.4, satisfaction: 4.7 },
    { month: 'Apr', defectRate: 1.8, returnRate: 1.5, satisfaction: 4.6 },
    { month: 'May', defectRate: 1.6, returnRate: 1.3, satisfaction: 4.8 },
    { month: 'Jun', defectRate: 1.4, returnRate: 1.2, satisfaction: 4.8 },
    { month: 'Jul', defectRate: 1.3, returnRate: 1.1, satisfaction: 4.9 },
    { month: 'Aug', defectRate: 1.5, returnRate: 1.3, satisfaction: 4.7 },
    { month: 'Sep', defectRate: 1.2, returnRate: 1.0, satisfaction: 4.9 },
    { month: 'Oct', defectRate: 1.1, returnRate: 0.9, satisfaction: 5.0 },
    { month: 'Nov', defectRate: 1.3, returnRate: 1.1, satisfaction: 4.8 },
    { month: 'Dec', defectRate: 1.4, returnRate: 1.2, satisfaction: 4.7 }
  ];

  const materialCostData = [
    { material: 'Plastic ABS', cost: 1.85, volume: 45, trend: 'up' },
    { material: 'Electronic Components', cost: 3.20, volume: 25, trend: 'down' },
    { material: 'Fabric & Textiles', cost: 2.10, volume: 18, trend: 'stable' },
    { material: 'Metal Parts', cost: 4.50, volume: 12, trend: 'up' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Production Facility Performance
            </CardTitle>
            <CardDescription>
              Efficiency vs Capacity analysis across global facilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={productionEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="facility" angle={-45} textAnchor="end" height={100} stroke="#6B7280" fontSize={10} />
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
                <Bar yAxisId="left" dataKey="efficiency" name="Efficiency %" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="capacity" name="Capacity (units/day)" stroke="#EC4899" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Quality Metrics Trend
            </CardTitle>
            <CardDescription>
              Defect rates, returns, and customer satisfaction over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={qualityMetricsData}>
                <defs>
                  <linearGradient id="colorSatisfaction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
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
                <Area yAxisId="right" type="monotone" dataKey="satisfaction" name="Satisfaction" fill="url(#colorSatisfaction)" stroke="#10B981" />
                <Bar yAxisId="left" dataKey="defectRate" name="Defect Rate %" fill="#EF4444" radius={[2, 2, 0, 0]} />
                <Line yAxisId="left" type="monotone" dataKey="returnRate" name="Return Rate %" stroke="#F59E0B" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Material Cost Analysis
          </CardTitle>
          <CardDescription>
            Raw material costs and volume usage across production
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={materialCostData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="material" stroke="#6B7280" />
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
              <Bar yAxisId="left" dataKey="cost" name="Cost per Unit ($)" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="volume" name="Volume Usage %" fill="#EC4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductionAnalysisChart;
