import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledSidebarContainer = styled(Box)(
  ({ showIconsOnly }: { showIconsOnly: boolean }) => ({
    minWidth: `${!showIconsOnly ? "280px" : ""}`,
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 0px 5px #4444447a",
    transition: "width 0.3s ease",
    background: "#fff",
  })
);

export const StyledSidebarChildContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "19px",
  paddingTop: "50px",
  position: "relative",
});

export const StyledSidebarItemWrapper = styled(Box)(
  ({ isActive }: { isActive: boolean }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "11px",
    padding: "5px 50px 5px 50px",
    transition: "width 0.3s ease",
    overflowY: "auto",
    color: `${isActive ? "#14263E" : "#444444"}`,
    fontWeight: `${isActive ? "700" : "normal"}`,
    ":hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    svg: {
      path: {
        stroke: `${isActive ? "#E8AD4B" : ""}`,
        fill: `${isActive ? "#E8AD4B" : ""}`,
      },
    },
  })
);

export const StyledArrowToggleStyle = styled(Box)({
  cursor: "pointer",
  position: "absolute",
  right: "-15px",
  top: "50%",
  transform: "translateY(-50%)",
});