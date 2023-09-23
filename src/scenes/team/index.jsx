import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { feedbackData } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Date",
      headerName: "Date",
      // flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "feedback_type",
      headerName: "Feedback type",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "feedback_content",
      headerName: "Feedback content",
      flex: 1,
    },
    {
      field: "Rating",
      headerName: "Rating /5",
      // flex: 1,
    },
    {
      field: "Strengths",
      headerName: "Strengths",
      flex: 1,
    },
    {
      field: "Action Items",
      headerName: "Action Items",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Growth Assessment" subtitle="Cultivating Success Through Mentorship" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={feedbackData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
