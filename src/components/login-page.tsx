import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Lock, 
  User, 
  GraduationCap, 
  Building2, 
  Shield,
  Eye,
  EyeOff,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

interface LoginPageProps {
  onLogin: (userType: 'student' | 'recruiter') => void;
  onPageChange: (page: string) => void;
}

export function LoginPage({ onLogin, onPageChange }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    organization: ''
  });

  const handleLogin = (userType: 'student' | 'recruiter') => {
    // Simulate login
    onLogin(userType);
    if (userType === 'student') {
      onPageChange('student-dashboard');
    } else {
      onPageChange('recruiter-dashboard');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const demoCredentials = {
    student: { email: 'alex.johnson@stanford.edu', password: 'demo123' },
    recruiter: { email: 'sarah.recruiter@techcorp.com', password: 'demo123' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Info */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <Badge className="bg-blue-100 text-blue-800">
              🔐 Secure Login
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Welcome to <span className="gradient-text">ProCred™</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Join thousands of students and recruiters who trust ProCred for verified achievements and seamless hiring. ✨
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 lg:justify-start justify-center">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-gray-700">100% Secure & Verified</span>
            </div>
            <div className="flex items-center gap-3 lg:justify-start justify-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-gray-700">Trusted by 500+ Institutions</span>
            </div>
            <div className="flex items-center gap-3 lg:justify-start justify-center">
              <div className="bg-purple-100 p-2 rounded-full">
                <Building2 className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-gray-700">Used by 1000+ Companies</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            onClick={() => onPageChange('home')} 
            className="text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            ← Back to Home
          </Button>
        </div>

        {/* Right Side - Login Form */}
        <Card className="border border-slate-200 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300">
          <CardHeader className="text-center space-y-6 pb-8">
            <CardTitle className="text-3xl font-bold text-slate-900">
              {isSignUp ? 'Create Your Account 🚀' : 'Sign In to ProCred™ 👋'}
            </CardTitle>
            <p className="text-slate-600 text-lg leading-relaxed">
              {isSignUp 
                ? 'Join ProCred™ and start building your verified profile today'
                : 'Choose your account type to access your dashboard'
              }
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Tabs defaultValue="student" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="recruiter" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Recruiter
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4">
                <div className="space-y-4">
                  {isSignUp && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder={isSignUp ? "student@university.edu" : demoCredentials.student.email}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder={isSignUp ? "Create a secure password" : demoCredentials.student.password}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {isSignUp && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={() => handleLogin('student')}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  {isSignUp ? 'Create Student Account' : 'Sign In as Student'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                {!isSignUp && (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Demo: Use <span className="font-mono bg-gray-100 px-1 rounded">demo123</span> as password
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="recruiter" className="space-y-4">
                <div className="space-y-4">
                  {isSignUp && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Company/Organization</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Enter your company name"
                            value={formData.organization}
                            onChange={(e) => handleInputChange('organization', e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Work Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder={isSignUp ? "recruiter@company.com" : demoCredentials.recruiter.email}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder={isSignUp ? "Create a secure password" : demoCredentials.recruiter.password}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {isSignUp && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={() => handleLogin('recruiter')}
                  className="w-full bg-green-600 hover:bg-green-700 h-12"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  {isSignUp ? 'Create Recruiter Account' : 'Sign In as Recruiter'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                {!isSignUp && (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Demo: Use <span className="font-mono bg-gray-100 px-1 rounded">demo123</span> as password
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {!isSignUp && (
              <div className="text-center">
                <Button variant="link" className="text-blue-600">
                  Forgot your password? 🔑
                </Button>
              </div>
            )}

            <Separator />

            <div className="text-center space-y-4">
              <p className="text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full"
              >
                {isSignUp ? 'Sign In Instead' : 'Create New Account'} ✨
              </Button>
            </div>

            {isSignUp && (
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}