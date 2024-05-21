import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Fade } from "react-awesome-reveal";
import {
  BgMask,
  BlueButton,
  ContentContainer,
  HeroMainContainer,
  HeroMainText,
  HeroMiniText,
  NavySection,
  NavyStatContainer,
  OrangeButton,
  HomeMainContainer,
  NavyTextContainer,
  WhiteText,
  NavyStatGridContainer,
  NavyStatItem,
  NavyNumber,
  NavyText,
  SeamlessMainContainer,
  SeamlessGridItem,
  SeamlessMainText,
  UnparalleledMainContainer,
  UnparalleledGridItem,
  UnparalleledContentContainer,
  OrangeText,
  UnparalleledMainText,
  UnparalleledSubText,
} from "@/StyledComponents/HomeHero";
import { Grid, Box, Button, styled, Typography } from "@mui/material";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  const Type = styled(TypeAnimation)({});
  const ImageHere = styled("img")({
    width: "100%",
    borderRadius: "5%",
    boxShadow: "0px 4px 40.6px 0px #0000001A",
  });
  const router = useRouter();
  const navigate = () => {
    router.push(`https://api.muiaafeeds.com/auth0/login`);
  };

  return (
    <>
      <Head>
        <title>MUIAA</title>
        <meta name="description" content="HOME | MUIRURI & ASSOCIATES LTD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logomini.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Navbar />
      <HomeMainContainer>
        <HeroMainContainer>
          <BgMask>
            <ContentContainer>
              {/* <Fade direction="down"> */}
              <HeroMainText
                sx={{
                  letterSpacing: { md: "-2px", xs: "-1px" },
                  fontSize: { xs: "28px", md: "60px" },
                  lineHeight: { xs: "38px", md: "60px" },
                  width: { xs: "90%", sm: "70%", md: "70%" },
                  // Adjust values as needed
                }}
              >
                Advance cross-border cattle feed distribution enterprise.
              </HeroMainText>
              {/* </Fade> */}
              <br />
              <br />
              <Fade direction="up">
                <HeroMiniText
                  sx={{
                    fontSize: { xs: "18px", md: "24px" },
                    lineHeight: { xs: "24px", md: "36px" },
                    width: { xs: "90%", sm: "70%", md: "70%" },
                  }}
                >
                  Revolutionizing the cattle feed industry between Kenya and
                  Zanzibar. Leveraging the power of the XDC blockchain, our
                  platform ensures a transparent, efficient, and cost-effective
                  supply chain process.
                </HeroMiniText>
                <br />
                <br />
                <Grid
                  container
                  sx={{
                    width: "auto",
                    maxWidth: { xs: "300px", md: "500px" },
                    margin: { md: "0", xs: "auto" },
                  }}
                >
                  <Grid item md={6} xs={12}>
                    <BlueButton
                      sx={{
                        width: { md: "90%", xs: "100%" },
                        mb: { xs: "15px", sm: "30px" },
                      }}
                      onClick={() => navigate()}
                    >
                      Make an Order
                    </BlueButton>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <OrangeButton
                      sx={{
                        width: { md: "90%", xs: "100%" },
                        mb: { xs: "40px", sm: "30px" },
                      }}
                    >
                      Get in touch
                    </OrangeButton>
                  </Grid>
                </Grid>
              </Fade>
            </ContentContainer>
          </BgMask>
        </HeroMainContainer>

        {/* <NavySection
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            minHeight: { md: "400px", xs: "200px" },
            alignItems: "center",
          }}
        >
          <br />
          <br />
          <NavyTextContainer
            sx={{
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              minHeight: { md: "600px", xs: "200px" },
              display: "flex",
            }}
          >
            <WhiteText
              sx={{
                fontSize: { md: "60px", xs: "35px" },
                minWidth: { md: "160%", xs: "100%" },
                margin: "auto",
                marginLeft: { md: "-30%", xs: "0" },
                pt: { xs: "100px", md: "0" },
                pb: { xs: "100px", md: "0" },
              }}
            >
              Uniting Kenya and Zanzibar through innovative technology
            </WhiteText>
          </NavyTextContainer>
        </NavySection> */}
      </HomeMainContainer>
      <NavyStatContainer sx={{ marginTop: { xs: "-50px" } }}>
        <NavyStatGridContainer container>
          <NavyStatItem md={4} xs={12}>
            <NavyNumber>
              <CountUp end={50} duration={10} /> +
            </NavyNumber>
            <NavyText>Dairy Farmers</NavyText>
          </NavyStatItem>
          <NavyStatItem md={4} xs={12}>
            <NavyNumber>
              <CountUp end={266} duration={10} />
            </NavyNumber>
            <NavyText>Smart Contracts</NavyText>
          </NavyStatItem>
          <NavyStatItem md={4} xs={12}>
            <NavyNumber>
              <CountUp end={45} duration={10} />
            </NavyNumber>
            <NavyText sx={{ pb: { xs: "30px", md: "0px" } }}>
              Export/Import Transactions
            </NavyText>
          </NavyStatItem>
        </NavyStatGridContainer>
      </NavyStatContainer>
      <SeamlessMainContainer container>
        <SeamlessGridItem item md={12} xs={12}>
          <SeamlessMainText
            sx={{
              width: { md: "60%", xs: "100%" },
              fontSize: { xs: "28px", md: "40px", xl: "48px" },
              letterSpacing: { md: "-3px", xs: "-1px" },
              textAlign: "center",
              margin: "auto",
              pt: "70px",
              lineHeight: { xs: "35px", md: "60px" },
              fontWeight: "500",
            }}
          >
            We offer farmers and distributors a decentralized platform
          </SeamlessMainText>
          <Typography
            sx={{
              width: { md: "60%", xs: "100%" },
              fontSize: { md: "24px", xl: "28px" },
              textAlign: "center",
              margin: "auto",
              color: "#1A1A1A",
              lineHeight: { xs: "30px", md: "44px" },
              fontWeight: "300",
              pt: "20px",
            }}
          >
            for feed ordering, real-time traceability, and smart contract
            automation by seamlessly integrating blockchain technology,
          </Typography>
          <br />
          <UnparalleledMainContainer container>
            <UnparalleledGridItem item md={6}>
              <Fade direction="left">
                <UnparalleledContentContainer>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <UnparalleledMainText
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          margin: { xs: "auto", md: "0" },
                        }}
                      >
                        Unparalleled access to high-quality feed products
                      </UnparalleledMainText>
                      <br />
                      <UnparalleledSubText>
                        Leveraging the security and transparency of blockchain
                        for every step from supplier sourcing to end-user
                        delivery.
                      </UnparalleledSubText>
                      <br />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <img src="assets/dairy.svg" />
                    </Grid>
                  </Grid>
                </UnparalleledContentContainer>
              </Fade>
            </UnparalleledGridItem>
            <UnparalleledGridItem item md={6}>
              <Fade direction="right">
                <UnparalleledContentContainer>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <UnparalleledMainText
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          margin: { xs: "auto", md: "0" },
                        }}
                      >
                        Reliable supply chain
                      </UnparalleledMainText>
                      <br />
                      <UnparalleledSubText>
                        providing feeds to agricultural farmers in Kenya and
                        Zanzibar.
                      </UnparalleledSubText>
                      <br />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <img src="assets/process.svg" />
                    </Grid>
                  </Grid>
                </UnparalleledContentContainer>
              </Fade>
            </UnparalleledGridItem>
            <UnparalleledGridItem item md={6}>
              <Fade direction="left">
                <UnparalleledContentContainer>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <UnparalleledMainText
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          margin: { xs: "auto", md: "0" },
                        }}
                      >
                        Promoting partnerships within the dairy farming
                      </UnparalleledMainText>
                      <br />
                      <UnparalleledSubText>
                        Enhanced Transparency and Trust to farmers in Kenya and
                        Zanzibar.
                      </UnparalleledSubText>
                      <br />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <img src="assets/cowanimation.svg" />
                    </Grid>
                  </Grid>
                </UnparalleledContentContainer>
              </Fade>
            </UnparalleledGridItem>
            <UnparalleledGridItem item md={6}>
              <Fade direction="right">
                <UnparalleledContentContainer>
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <UnparalleledMainText
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          margin: { xs: "auto", md: "0" },
                        }}
                      >
                        Unparalleled access to high- quality feed products
                      </UnparalleledMainText>
                      <br />
                      <UnparalleledSubText>
                        Leveraging the security and transparency of blockchain
                        for every step from supplier sourcing to end-user
                        delivery.
                      </UnparalleledSubText>
                      <br />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <img src="assets/processing.svg" />
                    </Grid>
                  </Grid>
                </UnparalleledContentContainer>
              </Fade>
            </UnparalleledGridItem>
          </UnparalleledMainContainer>
        </SeamlessGridItem>
      </SeamlessMainContainer>
      <br />
      <br />
      <br />

      <Grid
        container
        sx={{
          width: "100%",
          padding: "6%",
          margin: "auto",
          background: "#F5F6F7",
        }}
      >
        <Grid md={5} xs={12}>
          <SeamlessMainText
            sx={{
              color: "#191919",
              fontWeight: "400",
              fontSize: { xs: "28px", md: "40px", xl: "48px" },
              letterSpacing: { md: "-3px", xs: "-1px" },
              textAlign: "left",
              marginBottom: "50px",
              width: { xs: "100%", md: "80%" },
            }}
          >
            Transforming farming fueled by digital solutions
          </SeamlessMainText>

          <UnparalleledSubText
            sx={{
              fontSize: { md: "22px", xl: "28px" },
              lineHeight: { md: "22px", xl: "39px" },
              color: "#1A1A1A",
              fontWeight: "400",
              paragraphSpacing: "20px",
            }}
          >
            Hence, a blockchain-based platform that
            <span style={{ color: "#0F3EA4", fontWeight: "400" }}>
              connects dairy farmers, feed suppliers, distributors, and
              regulatory
            </span>
            authorities can address these challenges.
            <br />
            <br />
            We guarantee transparency, traceability and quality assurance
            throughout the feed supply chain.
          </UnparalleledSubText>
          <br />
          <br />
          <br />
        </Grid>
        <Grid md={7} xs={12}>
          <Grid container>
            <Grid
              md={6}
              xs={12}
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              <Fade direction="left">
                <img src="./assets/notes.svg" />
                <br />
                <SeamlessMainText
                  sx={{
                    color: "#191919",
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: "400",
                    width: "100%",
                  }}
                >
                  Smart Contracts
                </SeamlessMainText>
                <UnparalleledSubText
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24.64px",
                    width: "90%",
                    color: "#444444",
                  }}
                >
                  Our platform leverages smart contracts to automate and enforce
                  agreements between stakeholders, such as contracts between
                  farmers and suppliers, payment terms, and quality standards.
                </UnparalleledSubText>
              </Fade>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid
              md={6}
              xs={12}
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              <Fade direction="right">
                <img src="./assets/search.svg" />
                <br />
                <SeamlessMainText
                  sx={{
                    color: "#191919",
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: "400",
                    width: "90%",
                  }}
                >
                  Tokenization
                </SeamlessMainText>
                <UnparalleledSubText
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24.64px",
                    width: "90%",
                    color: "#444444",
                  }}
                >
                  Introducing our utility token specific to the platform which
                  serves a variety of purposes.From facilitating transactions to
                  offering incentives and rewards, our token creates an
                  ecosystem of participation.
                </UnparalleledSubText>
              </Fade>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid
              md={6}
              xs={12}
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              <Fade direction="left">
                <img src="./assets/quality.svg" />
                <br />
                <SeamlessMainText
                  sx={{
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: "400",
                    width: "90%",
                  }}
                >
                  Traceability
                </SeamlessMainText>
                <UnparalleledSubText
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24.64px",
                    width: "90%",
                    color: "#444444",
                  }}
                >
                  Each batch of feed is recorded on the blockchain, this
                  provides you with real-time tracking capabilities, allowing
                  you to trace its origin, transportation, and quality testing
                  results.
                </UnparalleledSubText>
              </Fade>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid
              md={6}
              xs={12}
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              <Fade direction="right">
                <img src="./assets/tokenization.svg" />
                <br />
                <SeamlessMainText
                  sx={{
                    color: "#191919",
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: "400",
                    width: "90%",
                  }}
                >
                  Quality Assurance
                </SeamlessMainText>
                <UnparalleledSubText
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24.64px",
                    width: "90%",
                    color: "#444444",
                  }}
                >
                  We store feed quality data, including nutritional content and
                  safety tests, immutably on the blockchain. This not only
                  ensures the highest standards but also builds trust among all
                  stakeholders involved in the process.
                </UnparalleledSubText>
              </Fade>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: { xs: "100%", md: "90%" },
          margin: "auto",
          borderRadius: "20px",
          overflow: "hidden",
          mb: { md: "50px", xs: "0" },
        }}
      >
        <Grid item md={4} xs={0}>
          <Box
            sx={{
              width: "100%",
              height: { md: "650px" },
              background: "url(./assets/asset22.svg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src="./assets/asset22.svg" style={{ width: "100%" }} /> */}
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            background: "#F5F6F7",
            padding: { md: "50px", xs: "20px" },
          }}
        >
          <SeamlessMainText
            sx={{
              color: "#191919",
              fontWeight: "400",
              fontSize: { xs: "30px", md: "26px", lg: "35px", xl: "48px" },

              lineHeight: { md: "33px", xl: "60px" },
              width: "100%",
              textAlign: "center",
            }}
          >
            Spearheading a transformative era
          </SeamlessMainText>
          <br />
          <br />
          <UnparalleledSubText
            sx={{
              fontSize: { md: "20px", xs: "16px" },
              lineHeight: { md: "22px", lg: "35px", xl: "40.5px" },
              color: "#1A1A1A",
              textAlign: "center",
            }}
          >
            in cross-border cattle feed distribution, uniting Kenya and Zanzibar
            through innovative technology and sustainable practices. Powered by
            the XDC blockchain, we are committed to delivering transparency,
            efficiency, and traceability in every facet of the supply chain
          </UnparalleledSubText>
        </Grid>
        <Grid item md={4} xs={0}>
          <Box
            sx={{
              width: "100%",
              height: { md: "650px", xs: "auto" },
              background: "url(./assets/asset24.svg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src="./assets/asset24.svg" style={{ width: "100%" }} /> */}
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <SeamlessMainText
          sx={{
            color: "#191919",
            fontWeight: "400",
            fontSize: { xs: "28px", md: "40px", xl: "48px" },
            textAlign: "center",
            width: "100%",
            lineHeight: { xs: "35px", md: "60px" },
            margin: "auto",
          }}
        >
          Add Interoperability To Your Work
        </SeamlessMainText>
        <UnparalleledSubText
          sx={{
            fontSize: { md: "24px", xl: "28px" },
            lineHeight: { xs: "35px", md: "44px" },
            color: "#1A1A1A",
            textAlign: "center",
            width: { xs: "96%", md: "100%" },
            maxWidth: "900px",
            margin: "auto",
            fontWeight: "300",
          }}
        >
          We utilize the XDC blockchain, to facilitate connections between dairy
          farmers and feed suppliers/distributors
        </UnparalleledSubText>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ width: "100%", maxWidth: "1400px", margin: "auto" }}>
        <Grid
          container
          sx={{
            height: { md: "622px", xs: "100%" },
            background: "#003565",
            borderRadius: "20px",
            paddingBottom: { xs: "20px", md: "0px" },
          }}
        >
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ width: "80%", height: "50%", margin: "auto" }}>
              <Button
                sx={{
                  background: "#fff",
                  width: "100%",
                  fontWeight: "bold",
                  color: "#000",
                  padding: "10px",
                  paddingRight: "40%",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  ":hover": {
                    background: "#ccc",
                  },
                }}
              >
                Order
              </Button>
              <br />
              <br />
              <Button
                sx={{
                  width: "100%",
                  color: "#FFFFFF",
                  padding: "10px",
                  paddingRight: "40%",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                }}
              >
                Trade
              </Button>
              <br />
              <br />
              <Button
                sx={{
                  width: "100%",
                  color: "#FFFFFF",
                  padding: "10px",
                  paddingRight: "13%",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                }}
              >
                Automate with XDC
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Fade direction="up">
              <ImageHere
                src="assets/snapshot.svg"
                sx={{
                  marginTop: { md: "-60px", xs: "80px" },
                }}
              />
            </Fade>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                width: "80%",
                height: { md: "40%", xs: "auto" },
                margin: "auto",
                color: "#ece0e0",
                "*": { lineHeight: "38px" },
              }}
            >
              <ul>
                <li>
                  <UnparalleledSubText
                    sx={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      width: "100%",
                      color: "#ece0e0",
                      textAlign: "left",
                    }}
                  >
                    Browse available feed products
                  </UnparalleledSubText>
                </li>
                <li>
                  <UnparalleledSubText
                    sx={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      width: "100%",
                      color: "#ece0e0",
                      textAlign: "left",
                    }}
                  >
                    View detailed quality assurance and traceability details of
                    each feed.
                  </UnparalleledSubText>
                </li>
                <li>
                  <UnparalleledSubText
                    sx={{
                      fontSize: "18px",
                      lineHeight: "22px",
                      width: "100%",
                      color: "#ece0e0",
                      textAlign: "left",
                    }}
                  >
                    Place an order for the desired feed quantity.
                  </UnparalleledSubText>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          //marginTop: { xs: "100px", md: "10px" },
        }}
      >
        <SeamlessMainText
          sx={{
            color: "#191919",
            fontWeight: "400",
            fontSize: { xs: "28px", md: "40px", xl: "48px" },
            letterSpacing: "-3",
            textAlign: "center",
            lineHeight: "60px",
            width: "100%",
            maxWidth: "700px",
            margin: "auto",
            marginTop: { md: "100PX", xs: "0" },
            marginBottom: "25px",
          }}
        >
          Powered by blockchain
        </SeamlessMainText>
        <br />
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "1350px",
            margin: "auto",
            img: { width: "50px", height: "50px", marginBottom: "10px" },
          }}
        >
          <Grid item md={4} xs={12}>
            <Fade direction="left">
              <Fade direction="down">
                <Box
                  sx={{
                    width: { xs: "90%", md: "95%" },
                    margin: "auto",
                    borderRadius: "15px",
                    background: "#F0F0F0",
                    minHeight: "290px",
                    mb: "20px",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <img src="./assets/api.svg" />
                  </Box>
                  <UnparalleledMainText
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      textAlign: "left",
                      fontWeight: "500",
                      lineHeight: "29.05px",
                    }}
                  >
                    XDC APIs integrations.
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{
                      fontSize: "16px",
                      width: "100%",
                      color: "#444444",
                      textAlign: "left",
                      fontWeight: "400",
                      lineHeight: "22.5px",
                    }}
                  >
                    Automate and enforce agreements between stakeholders, such
                    as contracts between farmers and suppliers, payment terms,
                    and quality standards.
                  </UnparalleledSubText>
                </Box>
              </Fade>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12}>
            <Fade direction="down">
              <Box
                sx={{
                  width: { xs: "90%", md: "95%" },
                  margin: "auto",
                  borderRadius: "15px",
                  background: "#F0F0F0",
                  minHeight: "290px",
                  mb: "20px",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <img src="./assets/token.svg" />
                </Box>
                <UnparalleledMainText
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    textAlign: "left",
                    fontWeight: "500",
                    lineHeight: "29.05px",
                  }}
                >
                  Token Creation: MUIAA Feed Tokens (MFT)
                </UnparalleledMainText>
                <br />
                <UnparalleledSubText
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    width: "100%",
                    color: "#444444",
                    textAlign: "left",
                  }}
                >
                  The MFT ERC20 token will serve multiple utilities within the
                  platform, including payments, incentives, and platform
                  governance.
                </UnparalleledSubText>
              </Box>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12}>
            <Fade direction="right">
              <Fade direction="down">
                <Box
                  sx={{
                    width: { xs: "90%", md: "95%" },
                    margin: "auto",
                    borderRadius: "15px",
                    background: "#F0F0F0",
                    minHeight: "290px",
                    mb: "20px",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <img src="./assets/orderlist.svg" />
                  </Box>
                  <UnparalleledMainText
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      textAlign: "left",
                      fontWeight: "500",
                      lineHeight: "29.05px",
                    }}
                  >
                    Order Records Management on the Blockchain(Transaction
                    Hashes)
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22.5px",
                      width: "100%",
                      color: "#444444",
                      textAlign: "left",
                    }}
                  >
                    To maintain a decentralised, tamper-proof record of all
                    orders placed on the platform.
                  </UnparalleledSubText>
                </Box>
              </Fade>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12}>
            <Fade direction="left">
              <Fade direction="up">
                <Box
                  sx={{
                    width: { xs: "90%", md: "95%" },
                    margin: "auto",
                    borderRadius: "15px",
                    background: "#F0F0F0",
                    minHeight: "290px",
                    mb: "20px",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <img src="./assets/map.svg" />
                  </Box>
                  <UnparalleledMainText
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      textAlign: "left",
                      fontWeight: "500",
                      lineHeight: "29.05px",
                    }}
                  >
                    Real-time Feed Tracking via Blockchain
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22.5px",
                      width: "100%",
                      color: "#444444",
                      textAlign: "left",
                    }}
                  >
                    Automate and enforce agreements between stakeholders, such
                    as contracts between farmers and suppliers, payment terms,
                    and quality standards.
                  </UnparalleledSubText>
                </Box>
              </Fade>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12}>
            <Fade direction="up">
              <Box
                sx={{
                  width: { xs: "90%", md: "95%" },
                  margin: "auto",
                  borderRadius: "15px",
                  background: "#F0F0F0",
                  minHeight: "290px",
                  mb: "20px",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <img src="./assets/contract.svg" />
                </Box>
                <UnparalleledMainText
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    textAlign: "left",
                    fontWeight: "500",
                    lineHeight: "29.05px",
                  }}
                >
                  Real-time Feed Tracking via Blockchain
                </UnparalleledMainText>
                <br />
                <UnparalleledSubText
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "22.5px",
                    width: "100%",
                    color: "#444444",
                    textAlign: "left",
                  }}
                >
                  To automate agreements between stakeholders like contracts
                  between farmers and suppliers, payment terms, and quality
                  standards.
                </UnparalleledSubText>
              </Box>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12}>
            <Fade direction="right">
              <Fade direction="up">
                <Box
                  sx={{
                    width: { xs: "90%", md: "95%" },
                    margin: "auto",
                    borderRadius: "15px",
                    background: "#F0F0F0",
                    minHeight: "290px",
                    mb: "20px",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <img src="./assets/distribution.svg" />
                  </Box>
                  <UnparalleledMainText
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      textAlign: "left",
                      fontWeight: "500",
                      lineHeight: "29.05px",
                    }}
                  >
                    Incentive Distribution through MFT Tokens(Royalties)
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22.5px",
                      width: "100%",
                      color: "#444444",
                      textAlign: "left",
                    }}
                  >
                    To reward users and stakeholders for their participation,
                    loyalty, and contributions to the platform.
                  </UnparalleledSubText>
                </Box>
              </Fade>
            </Fade>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <SeamlessMainText
          sx={{
            color: "#191919",
            fontWeight: "400",
            lineHeight: "60px",
            fontSize: { xs: "28px", md: "40px", xl: "48px" },
            letterSpacing: "-2px",
            textAlign: "center",
            width: "100%",
            maxWidth: "700px",
            margin: "auto",
            marginBottom: "20px",
          }}
        >
          Get Started
        </SeamlessMainText>
        <UnparalleledSubText
          sx={{
            fontSize: { md: "24px", xl: "28px" },
            fontWeight: "300",
            lineHeight: { xs: "30px", md: "44px" },
            color: "#1A1A1A",
            textAlign: "center",
            width: { md: "100%" },
            maxWidth: "1200px",
            margin: "auto",
            marginBottom: "20px",
          }}
        >
          Hundreds of farmers and investors are already going cross-border with
          MUIAA Feeds. What are you waiting for?
        </UnparalleledSubText>
        <br />
        <BlueButton sx={{ maxWidth: "250px" }}>Explore App</BlueButton>
        <br />
        <br />
        <br />
        <br />
      </Box>
      <Footer />
    </>
  );
}
