import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Search, 
  Filter, 
  Download, 
  Users, 
  CheckCircle, 
  Star,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Eye
} from "lucide-react";
import { useState } from "react";

export function RecruiterDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedInstitute, setSelectedInstitute] = useState("");

  // Mock candidate data
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      university: "Stanford University",
      major: "Computer Science",
      graduationYear: "2025",
      creditScore: 85,
      location: "San Francisco, CA",
      skills: ["React", "Python", "Machine Learning", "Leadership"],
      achievements: 8,
      verified: true,
      avatar: "AJ",
      topSkills: ["JavaScript (85%)", "React (80%)", "Python (75%)"],
      recentAchievements: ["Hackathon Winner", "React Certification", "Leadership Workshop"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      university: "MIT",
      major: "Data Science",
      graduationYear: "2024",
      creditScore: 92,
      location: "Boston, MA",
      skills: ["Python", "TensorFlow", "Data Analysis", "Research"],
      achievements: 12,
      verified: true,
      avatar: "SC",
      topSkills: ["Python (95%)", "Data Analysis (90%)", "Machine Learning (88%)"],
      recentAchievements: ["Research Publication", "Data Science Certification", "Conference Speaker"]
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      university: "UC Berkeley",
      major: "Software Engineering",
      graduationYear: "2025",
      creditScore: 78,
      location: "Berkeley, CA",
      skills: ["Java", "Spring Boot", "Docker", "DevOps"],
      achievements: 6,
      verified: true,
      avatar: "MR",
      topSkills: ["Java (82%)", "Spring Boot (78%)", "Docker (75%)"],
      recentAchievements: ["Open Source Contributor", "Java Certification", "Internship Completion"]
    },
    {
      id: 4,
      name: "Emily Watson",
      university: "Harvard University",
      major: "Business Analytics",
      graduationYear: "2024",
      creditScore: 88,
      location: "Cambridge, MA",
      skills: ["SQL", "Tableau", "Project Management", "Analytics"],
      achievements: 10,
      verified: true,
      avatar: "EW",
      topSkills: ["SQL (90%)", "Tableau (85%)", "Analytics (87%)"],
      recentAchievements: ["Analytics Certification", "Project Lead", "Business Case Competition"]
    }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSkill = !selectedSkill || selectedSkill === 'all' || candidate.skills.includes(selectedSkill);
    const matchesInstitute = !selectedInstitute || selectedInstitute === 'all' || candidate.university === selectedInstitute;
    
    return matchesSearch && matchesSkill && matchesInstitute;
  });

  const allSkills = [...new Set(candidates.flatMap(c => c.skills))];
  const allInstitutes = [...new Set(candidates.map(c => c.university))];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-br from-slate-800 via-blue-800 to-emerald-800 rounded-2xl p-8 text-white shadow-2xl border border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">Recruiter Dashboard 🎯</h1>
              <p className="text-slate-200 text-lg">Find and verify top talent with verified credentials</p>
            </div>
            <Button className="bg-white text-slate-900 hover:bg-slate-50 font-semibold px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-200 hover-lift professional-focus">
              <Download className="h-4 w-4 mr-2" />
              Export Reports
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-2">
              <Users className="h-8 w-8 text-blue-600 mx-auto" />
              <div className="text-2xl font-bold text-gray-900">{candidates.length}</div>
              <p className="text-gray-600">Total Candidates</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-2">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto" />
              <div className="text-2xl font-bold text-gray-900">{candidates.filter(c => c.verified).length}</div>
              <p className="text-gray-600">Verified Profiles</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-2">
              <Star className="h-8 w-8 text-yellow-600 mx-auto" />
              <div className="text-2xl font-bold text-gray-900">{Math.round(candidates.reduce((sum, c) => sum + c.creditScore, 0) / candidates.length)}</div>
              <p className="text-gray-600">Avg Credit Score</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-2">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto" />
              <div className="text-2xl font-bold text-gray-900">24</div>
              <p className="text-gray-600">Active Searches</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-600" />
              Candidate Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by name or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  {allSkills.map(skill => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by institute" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Institutes</SelectItem>
                  {allInstitutes.map(institute => (
                    <SelectItem key={institute} value={institute}>{institute}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Candidate Results */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Search Results ({filteredCandidates.length} candidates) 👥
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Sorted by Credit Score</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCandidates.map((candidate) => (
              <Card key={candidate.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {candidate.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                            {candidate.name}
                            {candidate.verified && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </h3>
                          <p className="text-gray-600">{candidate.major}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{candidate.creditScore}</div>
                          <div className="text-xs text-gray-600">Credit Score</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{candidate.university}, {candidate.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Graduating {candidate.graduationYear}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>{candidate.achievements} verified achievements</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Top Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.topSkills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Recent Achievements:</h4>
                    <div className="space-y-1">
                      {candidate.recentAchievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Eye className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Verification Tool */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Quick Verification Tool 🔍
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Instantly verify any candidate's achievements by entering their ProCred ID or certificate number.
            </p>
            <div className="flex gap-4">
              <Input placeholder="Enter ProCred ID or Certificate Number..." className="flex-1" />
              <Button className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Verify Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}