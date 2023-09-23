import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Qualifications",
      headerName: "Qualifications",
      // type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Specializations",
      headerName: "Specializations",
      flex: 1,
    },
    {
      field: "Experience",
      headerName: "Experience",
      flex: 1,
    },
    // {
    //   field: "AwardsAndRecognition",
    //   headerName: "AwardsAndRecognition",
    //   flex: 1,
    // },
    {
      field: "RatingsAndReviews",
      headerName: "RatingsAndReviews",
      flex: 1,
    },
    {
      field: "LinkedIn",
      headerName: "ContactInformation",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Educator Locator"
        subtitle="Bridging the Knowledge Gap"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
