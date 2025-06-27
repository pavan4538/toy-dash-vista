
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Users, Package, Globe, Star } from 'lucide-react';
import MarketTrendsChart from '../components/MarketTrendsChart';
import ConsumerInsightsChart from '../components/ConsumerInsightsChart';
import ProductionAnalysisChart from '../components/ProductionAnalysisChart';
import GeographicDistributionChart from '../components/GeographicDistributionChart';
import CompetitiveAnalysisChart from '../components/CompetitiveAnalysisChart';

const Index = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const kpiData = [
    { 
      title: "Total Market Size", 
      value: "$109.2B", 
      change: "+7.2%", 
      trend: "up", 
      icon: Globe,
      description: "Global toy market value"
    },
    { 
      title: "Active Manufacturers", 
      value: "2,847", 
      change: "+12.5%", 
      trend: "up", 
      icon: Package,
      description: "Registered toy manufacturers"
    },
    { 
      title: "Consumer Satisfaction", 
      value: "4.6/5", 
      change: "+0.3", 
      trend: "up", 
      icon: Star,
      description: "Average product rating"
    },
    { 
      title: "Market Growth", 
      value: "8.4%", 
      change: "+1.2%", 
      trend: "up", 
      icon: TrendingUp,
      description: "Year-over-year growth"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Package className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              🎁 ToyCraft Tales
            </h1>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Tableau's Vision Into Toy Manufacturer Data - Uncovering market trends, production patterns, and consumer preferences through interactive visualizations
            </p>
            <Badge variant="secondary" className="text-purple-600 bg-white/90 hover:bg-white">
              Powered by Advanced Analytics
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <kpi.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant={kpi.trend === 'up' ? 'default' : 'destructive'} className="text-xs">
                    {kpi.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  <p className="text-sm font-medium text-gray-700">{kpi.title}</p>
                  <p className="text-xs text-gray-500">{kpi.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="market-trends" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="market-trends" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Market Trends
            </TabsTrigger>
            <TabsTrigger value="consumer-insights" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Consumer Insights
            </TabsTrigger>
            <TabsTrigger value="production-analysis" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Production Analysis
            </TabsTrigger>
            <TabsTrigger value="geographic" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Geographic Distribution
            </TabsTrigger>
            <TabsTrigger value="competitive" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Competitive Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market-trends" className="space-y-6">
            <MarketTrendsChart />
          </TabsContent>

          <TabsContent value="consumer-insights" className="space-y-6">
            <ConsumerInsightsChart />
          </TabsContent>

          <TabsContent value="production-analysis" className="space-y-6">
            <ProductionAnalysisChart />
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <GeographicDistributionChart />
          </TabsContent>

          <TabsContent value="competitive" className="space-y-6">
            <CompetitiveAnalysisChart />
          </TabsContent>
        </Tabs>

        {/* Insights Summary */}
        <Card className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Key Strategic Insights</CardTitle>
            <CardDescription className="text-purple-100">
              Data-driven recommendations for toy manufacturers
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Market Opportunities</h3>
              <p className="text-sm text-purple-100">
                Educational toys show 15% growth, while eco-friendly materials drive 23% premium pricing
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Consumer Preferences</h3>
              <p className="text-sm text-purple-100">
                STEM toys dominate age 6-12 segment, with interactive features driving 89% satisfaction
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Production Efficiency</h3>
              <p className="text-sm text-purple-100">
                Automated production lines reduce costs by 31% while maintaining quality standards
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
