import { Box, Button, Grid, Typography, styled } from "@mui/material"

export const AboutMainHero = styled(Box)({
  width: "100vw",
  height: "auto",
  backgroundImage:"url('https://giphy.com/embed/7VzgMsB6FLCilwS30v')",
  backgroundColor: "#033D66",
  paddingTop:"8vh",
});
export const AboutHeroContainer = styled(Box)({
  width: "100%",
  maxWidth: "1300px",
  margin: "auto",
  height: "auto",
  textAlign:"left"
});

export const AboutUsText = styled(Typography)({
  color: "#E0D2A4",
  fontFamily: "'Inter'",
});

export const AboutUsText2 = styled(AboutUsText)({
    fontSize: "80px",
    fontWeight: "900",
    paddingTop: "10px",
    letterSpacing: "-3px",
    lineHeight:"96px",
    color:"#fff",
})

export const AboutMiniText = styled(Typography)({
  color: "#fff",
  fontSize: "24px",
  fontWeight: "300",
  fontFamily: "'Inter'",
});
export const AboutMiniHeader = styled(Typography)({
  fontSize: "60px",
  color: "#fff",
  fontWeight: "400",
  margin: "auto",
  fontFamily: "'Inter'",
});
export const AboutDumbGrid = styled(Grid)({
})
export const AboutDumbGridItem = styled(Grid)({
})
export const CowImageContainer = styled(Box)({
  margin: "auto",
  width: "1200px",
  height: "600px",
  maxWidth:"95vw",
  marginTop:"-400px"
});
export const CowsImage = styled('img')({
    width:"100%",
    height:"100%",
})
export const StatsContainer = styled(Grid)({
    width:"100%",
    height:"auto",
    backgroundColor:"#fff",
    padding:"50px 0",
    maxWidth:"1400px",
    minHeight:"400px",
    margin:"auto",
})
export const StatItem = styled(Grid)({

})
export const NumbersContainer = styled(Grid)({
})
export const NumbersItem = styled(Grid)({
    minHeight:"140px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    
});

export const StatNumber = styled(Typography)({
  color: "#003565",
  fontSize: "65px",
  fontWeight: "400",
  lineHeight: "76px",
  letterSpacing: "-3px",
  fontFamily: "'Inter'",
  width: "90%",
  margin: "auto",
});
export const StatText = styled(Typography)({
  fontSize: "24px",
  fontWeight: "300",
  lineHeight: "28px",
  color: "#444444",
  margin: "auto",
  fontFamily: "'Inter'",
});
export const ServiceButton = styled(Button)({
  background: "#033D66",
  color: "#fff",
  padding: "10px 30px",
  borderRadius: "4px",
  textTransform: "none",
  fontWeight:"bold",
});
export const ColHeaderText = styled(Typography)({
  fontSize: "28px",
  color: "#003565",
  width: "90%",
  margin: "auto",
  fontFamily: "'Inter'",
});
export  const ColBodyText = styled(Typography)({
  fontSize: "18px",
  fontWeight: "300",
  color: "#444444",
  lineHeight: "41px",
  width:"90%",
  margin:"auto",
  fontFamily:"'Inter'",
});