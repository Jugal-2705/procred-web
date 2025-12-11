import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Upload, 
  Award, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  FileText,
  Trophy,
  Bookmark,
  Plus
} from "lucide-react";

export function StudentDashboard() {
  // Mock data for the dashboard
  const achievements = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024-08-15",
      status: "verified",
      category: "Technical",
      creditsEarned: 25
    },
    {
      id: 2,
      title: "Hackathon Winner - CodeFest 2024",
      issuer: "TechUniversity",
      date: "2024-07-20",
      status: "verified",
      category: "Competition",
      creditsEarned: 50
    },
    {
      id: 3,
      title: "Data Science Specialization",
      issuer: "Coursera",
      date: "2024-06-10",
      status: "pending",
      category: "Technical",
      creditsEarned: 40
    },
    {
      id: 4,
      title: "Leadership Workshop Certificate",
      issuer: "University Leadership Center",
      date: "2024-05-15",
      status: "rejected",
      category: "Soft Skills",
      creditsEarned: 0,
      rejectionReason: "Certificate format not recognized"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Python", level: 75, category: "Programming" },
    { name: "Data Analysis", level: 70, category: "Analytics" },
    { name: "Leadership", level: 65, category: "Soft Skills" },
    { name: "Project Management", level: 60, category: "Management" }
  ];

  const totalCredits = achievements.filter(a => a.status === 'verified').reduce((sum, a) => sum + a.creditsEarned, 0);
  const creditScore = Math.min(Math.round((totalCredits / 500) * 100), 100); // Out of 500 max credits

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'rejected': return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-br from-slate-800 via-blue-800 to-emerald-800 rounded-2xl p-8 text-white shadow-2xl border border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">Welcome back, Alex! 👋</h1>
              <p className="text-slate-200 text-lg">Track your achievements and build your professional profile</p>
            </div>
            <Button className="bg-white text-slate-900 hover:bg-slate-50 font-semibold px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-200 hover-lift professional-focus">
              <Plus className="h-4 w-4 mr-2" />
              Add Achievement
            </Button>
          </div>
        </div>

        {/* Credit Score & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-2 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="bg-blue-100 p-2 rounded-xl border border-blue-200">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                Credit Score
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">{creditScore}/100</div>
                <p className="text-slate-600 font-medium">Based on {totalCredits} verified credits</p>
              </div>
              <Progress value={creditScore} className="h-4 bg-slate-100" />
              <div className="flex justify-between text-sm text-slate-500 font-medium">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift group">
            <CardContent className="p-8 text-center space-y-4">
              <div className="bg-emerald-100 p-3 rounded-2xl w-fit mx-auto group-hover:bg-emerald-200 transition-colors duration-300 border border-emerald-200">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{achievements.filter(a => a.status === 'verified').length}</div>
              <p className="text-slate-600 font-medium">Verified Achievements</p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift group">
            <CardContent className="p-8 text-center space-y-4">
              <div className="bg-amber-100 p-3 rounded-2xl w-fit mx-auto group-hover:bg-amber-200 transition-colors duration-300 border border-amber-200">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{achievements.filter(a => a.status === 'pending').length}</div>
              <p className="text-slate-600 font-medium">Pending Review</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="achievements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold">Your Achievements 🏆</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload New Certificate
              </Button>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Award className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                            <p className="text-gray-600">{achievement.issuer} • {achievement.date}</p>
                            {achievement.status === 'rejected' && achievement.rejectionReason && (
                              <p className="text-red-600 text-sm mt-1">Reason: {achievement.rejectionReason}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {achievement.category}
                        </Badge>
                        <Badge className={getStatusColor(achievement.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(achievement.status)}
                            {achievement.status}
                          </span>
                        </Badge>
                        {achievement.status === 'verified' && (
                          <div className="text-right">
                            <div className="font-semibold text-green-600">+{achievement.creditsEarned}</div>
                            <div className="text-xs text-gray-600">credits</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <h2 className="text-xl font-semibold">Skill Assessment 📊</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <p className="text-sm text-gray-600">{skill.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-600">{skill.level}%</div>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-xl font-semibold">Profile Information 👤</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-gray-900">Alex Johnson</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">University</label>
                    <p className="text-gray-900">Stanford University</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Major</label>
                    <p className="text-gray-900">Computer Science</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Graduation Year</label>
                    <p className="text-gray-900">2025</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium">E-commerce Platform</h4>
                      <p className="text-sm text-gray-600">Full-stack web application using React and Node.js</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium">Data Visualization Tool</h4>
                      <p className="text-sm text-gray-600">Interactive dashboard for analyzing student performance</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium">Mobile App Prototype</h4>
                      <p className="text-sm text-gray-600">React Native app for campus event management</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}