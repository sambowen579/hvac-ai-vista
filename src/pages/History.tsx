import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import { Download } from "lucide-react";
import { toast } from "sonner";

const History = () => {
  // Mock historical data
  const reports = [
    {
      id: 1,
      date: "2024-01-15",
      time: "14:32",
      systemId: "Unit A-101",
      refrigerantType: "R-410A",
      amount: "12.5 lbs",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "10:15",
      systemId: "Unit B-203",
      refrigerantType: "R-22",
      amount: "8.2 lbs",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-01-12",
      time: "16:45",
      systemId: "Unit C-305",
      refrigerantType: "R-134a",
      amount: "15.0 lbs",
      status: "Completed",
    },
    {
      id: 4,
      date: "2024-01-10",
      time: "09:20",
      systemId: "Unit D-407",
      refrigerantType: "R-410A",
      amount: "10.8 lbs",
      status: "Completed",
    },
    {
      id: 5,
      date: "2024-01-08",
      time: "13:50",
      systemId: "Unit E-502",
      refrigerantType: "R-407C",
      amount: "14.3 lbs",
      status: "Completed",
    },
  ];

  const handleDownload = (reportId: number) => {
    toast.success(`Downloading report ${reportId}...`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Report History</h1>
          <p className="text-muted-foreground">
            View and download your past refrigerant compliance reports
          </p>
        </div>

        <Card className="shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>System ID</TableHead>
                  <TableHead>Refrigerant Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{report.date}</TableCell>
                    <TableCell className="text-muted-foreground">{report.time}</TableCell>
                    <TableCell>{report.systemId}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {report.refrigerantType}
                      </span>
                    </TableCell>
                    <TableCell>{report.amount}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                        {report.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(report.id)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {reports.length === 0 && (
          <Card className="p-12 text-center shadow-md">
            <p className="text-muted-foreground">No reports generated yet</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default History;
