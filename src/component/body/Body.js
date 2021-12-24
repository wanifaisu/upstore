import React from "react";
import "./style.css";
import { styled } from "@mui/material/styles";
import SideDrawer from "../sideDrawer/SideDrawer";
import DataTable from "../table/table";
import OutlinedCard from "../card/Card";
function Body({ children, style }) {
  const Root = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(6, -3, 0, -1),
    },
    margin: theme.spacing(12, 0, 0, 0),

    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(17, -2, 0, -1),
    },
  }));
  return (
    <Root>
      <SideDrawer />
      <DataTable />
      {/* <OutlinedCard />
      <OutlinedCard /> <OutlinedCard /> <OutlinedCard />  */}

      <main
        style={{
          flexGrow: "1",
          backgroundColor: "#ECF3FF",
          padding: "10px",
        }}
      >
        <div className="chlidren__container">{children}</div>
      </main>
    </Root>
  );
}

export default Body;
