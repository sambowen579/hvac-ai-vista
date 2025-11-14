import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import FileUpload from "@/components/FileUpload";
import { FileText, Clock } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [notes, setNotes] = useState("");

  const handleGenerate = () => {
    if (!selectedFile) {
      toast.error("Please upload a file first");
      return;
    }
    toast.success("Report generation started! This may take a few moments.");
  };

  // Mock recent reports data
  const recentReports = [
    { id: 1, date: "2024-01-15", system: "Unit A-101", type: "R-410A" },
    { id: 2, date: "2024-01-14", system: "Unit B-203", type: "R-22" },
    { id: 3, date: "2024-01-12", system: "Unit C-305", type: "R-134a" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Generate EPA-compliant refrigerant reports instantly
          </p>
        </div>

        {/* Main Generate Report Card */}
        <Card className="p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Generate Refrigerant Report</h2>
          
          <div className="space-y-6">
            <div>
              <Label className="text-base mb-3 block">Upload Job Documentation</Label>
              <FileUpload onFileSelect={setSelectedFile} />
            </div>

            <div>
              <Label htmlFor="notes" className="text-base mb-3 block">
                Additional Technician Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                placeholder="Add any additional details about the service, equipment conditions, or special notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>

            <Button 
              onClick={handleGenerate}
              size="lg" 
              className="w-full sm:w-auto px-8"
            >
              Generate Report
            </Button>
          </div>
        </Card>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-6 w-6" />
            Recent Activity
          </h2>
          <div className="grid gap-3">
            {recentReports.map((report) => (
              <Card 
                key={report.id} 
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{report.system}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.date} • {report.type}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
