import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  LayoutDashboard, 
  Shield, 
  Search, 
  BarChart3, 
  Upload, 
  Download,
  CheckCircle,
  Star
} from "lucide-react";

interface FeaturesPageProps {
  onPageChange: (page: string) => void;
}

export function FeaturesPage({ onPageChange }: FeaturesPageProps) {
  const features = [
    {
      icon: <LayoutDashboard className="h-8 w-8 text-blue-600" />,
      title: "Centralized Achievement Dashboard",
      description: "A unified platform to view, manage, and showcase all your academic and non-academic achievements in one place.",
      benefits: ["Real-time sync", "Mobile responsive", "Export capabilities", "Custom categories"],
      color: "blue"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "API-based Certificate Verification",
      description: "Advanced verification system that authenticates certificates and achievements through secure API integrations.",
      benefits: ["Blockchain verification", "Institution partnerships", "Real-time validation", "Fraud prevention"],
      color: "green"
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "Recruiter Quick Verification Tool",
      description: "Streamlined verification process for recruiters to instantly validate candidate achievements and credentials.",
      benefits: ["Instant verification", "Bulk processing", "Advanced filters", "Company integrations"],
      color: "purple"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Holistic Scoring System",
      description: "Comprehensive evaluation system that provides a complete picture of student capabilities beyond traditional grades.",
      benefits: ["Multi-dimensional scoring", "Skill mapping", "Progress tracking", "Industry benchmarks"],
      color: "orange"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Easy Upload System",
      description: "Drag-and-drop interface for uploading certificates, projects, and achievements"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export & Share",
      description: "Generate professional reports and portfolios for job applications"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Real-time Status",
      description: "Track verification status of all your uploaded achievements"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Achievement Analytics",
      description: "Detailed insights into your skill development and achievement trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-white/20 text-white border-white/30">
              ✨ Platform Features
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Powerful Features for Modern Education 🚀
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how ProCred revolutionizes credential verification and student evaluation 
              with cutting-edge technology and intuitive design.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Core Features 💎
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for comprehensive credential management and verification
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${feature.color}-100`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Additional Features 🔧
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More tools to enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted by Leading Institutions 🏛️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ProCred integrates with top universities, certification bodies, and companies 
              to provide comprehensive verification services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Universities", "Certification Bodies", "Tech Companies", "Government Agencies", "Online Platforms"].map((partner, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {partner}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Experience These Features? 🎯
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join ProCred today and discover how our platform can transform your credential management experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('login')} 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 h-12"
              >
                Get Started Now 🚀
              </Button>
              <Button 
                onClick={() => onPageChange('contact')} 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 h-12"
              >
                Learn More 📚
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}