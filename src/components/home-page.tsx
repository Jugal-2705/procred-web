import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Award, Shield, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Verified Achievements",
      description: "All certificates and achievements are verified through our secure API system"
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Centralized Portfolio",
      description: "Keep all your academic and non-academic achievements in one place"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Trusted by Recruiters",
      description: "Industry-leading verification system trusted by top companies"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Quick Access",
      description: "Instant access to verified student profiles and achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="gradient-text">Verified Skills.</span><br />
                  <span className="text-emerald-600">Trusted Credits.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  ProCred centralizes and verifies student academic and non-academic achievements, 
                  making it easier for students to showcase their skills and for recruiters to find verified talent. 🎯
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onPageChange('login')} 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-3 h-12 font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover-lift professional-focus"
                >
                  Get Started 🚀
                </Button>
                <Button 
                  onClick={() => onPageChange('features')} 
                  variant="outline" 
                  className="text-lg px-8 py-3 h-12 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover-lift professional-focus"
                >
                  View Demo 👀
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 p-1.5 rounded-full border border-emerald-200">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">100% Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-full border border-blue-200">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="font-medium">Secure & Trusted</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NTgwMTIzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students celebrating graduation"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose ProCred? 🤔
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform how you showcase achievements and verify credentials with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover-lift group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-slate-100 transition-colors duration-300 border border-slate-200">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your Career Journey? ✨
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students and recruiters who trust ProCred™ for verified achievements and seamless hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => onPageChange('login')} 
                className="bg-white text-slate-900 hover:bg-slate-50 text-lg px-10 py-4 h-14 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover-lift professional-focus"
              >
                Start Your Journey 🎓
              </Button>
              <Button 
                onClick={() => onPageChange('contact')} 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-4 h-14 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift professional-focus"
              >
                Contact Us 📞
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}