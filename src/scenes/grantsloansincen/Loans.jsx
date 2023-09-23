import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { feedbackData } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {loansArray} from "../../data/mockData";
const Loans= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "loanType",
      headerName: "loan Type",
      // flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "interestRate",
      headerName: "Interest Rate",
      type: "number",
      headerAlign: "center",
      align: "center",
    //   flex: 1,
    },
   
    {
      field: "loanAmount",
      headerName: "Loan Amount",
    //   flex: 1,
      
    },
    {
      field: "loanTerm",
      headerName: "Loan Term",
      // flex: 1,
    },
    {
        field: "eligibilityCriteria",
        headerName: "Eligibility Criteria",
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
      <Header title="Loans" subtitle="Empowering Financial Goals" />
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
        <DataGrid rows={loansArray} columns={columns} />
      </Box>
    </Box>
  );
};

export default Loans;
