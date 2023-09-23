import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { feedbackData } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {grantsArray} from "../../data/mockData";
const Grants = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "grantTitle",
      headerName: "Grant Title",
      // flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "eligibilityCriteria",
      headerName: "Eligibility Criteria",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "applicationDeadline",
      headerName: "Application Deadline",
      flex: 1,
    },
    {
      field: "fundingAmount",
      headerName: "Funding Amount",
      // flex: 1,
    },
    {
      field: "grantDuration",
      headerName: "Grant Duration",
      flex: 1,
    },
    {
      field: "applicationLink",
      headerName: "Application Link",
      flex: 1,
    },
   
  ];

  return (
    <Box m="20px">
      <Header title="Grants" subtitle="Empowering Change Through Financial Support" />
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
        <DataGrid rows={grantsArray} columns={columns} />
      </Box>
    </Box>
  );
};

export default Grants ;
