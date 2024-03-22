import {
  StyledOrderSearchField,
  StyledOrderSectionContainer,
  StyledOrderSectionNav,
  StyledOrderTable,
  StyledTableCell,
} from "@/styles/overViewPageStyles";
import { OrderSectionPropsType } from "@/types/Itypes";
import {
  InputAdornment,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Search from "../../../public/assets/overview/search";
import ActionArrowDown from "../../../public/assets/overview/actionArrowDown";

const mocOrderList = [
  {
    orderId: "CR89899-23",
    recipient: "John Avalele",
    status: "Delivered",
    destination: "Nyandarua, KE",
    expectedDate: "24 Jan, 2024",
  },
  {
    orderId: "CR89899-23",
    recipient: "John Avalele",
    status: "Pending",
    destination: "Nyandarua, KE",
    expectedDate: "24 Jan, 2024",
  },
  {
    orderId: "CR89899-23",
    recipient: "John Avalele",
    status: "Pending",
    destination: "Nyandarua, KE",
    expectedDate: "24 Jan, 2024",
  },
  {
    orderId: "CR89899-23",
    recipient: "John Avalele",
    status: "Delivered",
    destination: "Nyandarua, KE",
    expectedDate: "24 Jan, 2024",
  },
];

const OrderSection = ({
  title,
  handleOnOrderSelect,
}: OrderSectionPropsType) => {
  const [selectedOrderId, setSelectOrderId] = useState("");

  return (
    <StyledOrderSectionContainer>
      <StyledOrderSectionNav>
        <Typography variant="h2">{title}</Typography>
        <StyledOrderSearchField
          placeholder="Search order by receipt, order id, delivery etc"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </StyledOrderSectionNav>
      <StyledOrderTable>
        <TableHead>
          <TableRow>
            <StyledTableCell component="th">#</StyledTableCell>
            <StyledTableCell component="th">Order Id</StyledTableCell>
            <StyledTableCell component="th">Recipient</StyledTableCell>
            <StyledTableCell component="th">Status</StyledTableCell>
            <StyledTableCell component="th">Destination</StyledTableCell>
            <StyledTableCell component="th">Expected Date</StyledTableCell>
            <StyledTableCell component="th">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mocOrderList.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="td">{index + 1}</TableCell>
                <TableCell component="td">{item.orderId}</TableCell>
                <TableCell component="td">{item.recipient}</TableCell>
                <TableCell component="td">
                  <Typography
                    variant="body1"
                    className={`${item.status.toLocaleLowerCase()}`}
                  >
                    {item.status}
                  </Typography>
                </TableCell>
                <TableCell component="td">{item.destination}</TableCell>
                <TableCell component="td">{item.expectedDate}</TableCell>
                <TableCell component="td">
                  <ActionArrowDown />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledOrderTable>
    </StyledOrderSectionContainer>
  );
};

export default OrderSection;