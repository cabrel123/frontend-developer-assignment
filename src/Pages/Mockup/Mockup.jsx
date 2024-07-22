import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";

function Mockup() {
  return (
    <>
      <Container maxWidth="md" sx={{ background: "#fff" }}>
        <Box sx={{ padding: 5 }}>
          <Typography
            sx={{
              fontSize: 20,
              textAlign: "left",
              fontWeight: 600,
              color: "#939393",
            }}
            variant="h1"
          >
            Best Casinos 2024
          </Typography>
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{ border: "8px solid rgb(245 245 245)" }}
          >
            <CardContent sx={{ paddingBottom: "16px !important" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <img
                    src={IMG2}
                    loading="lazy"
                    alt=""
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography
                          className="cardTitle"
                          sx={{
                            fontSize: "clamp(1rem, 2.5vw, 1rem)",
                            textDecoration: "underline",
                            paddingTop: "8px",
                          }}
                        >
                          Grosvenor Casinos
                        </Typography>
                        <Rating
                          name="read-only"
                          sx={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)" }}
                          value="5"
                          readOnly
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "clamp(0.5rem, 2.5vw, 1.1rem)",
                          }}
                        >
                          Bonus
                        </Typography>
                        <Typography
                          sx={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
                        >
                          BET $10
                        </Typography>
                        <Typography
                          sx={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
                        >
                          GET $400
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      width: "100%",
                      background: "#009129",
                      fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                      textTransform: "capitalize",
                    }}
                  >
                    Bet now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{ border: "8px solid rgb(245 245 245)" }}
          >
            <CardContent sx={{ paddingBottom: "16px !important" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <img
                    src={IMG3}
                    loading="lazy"
                    alt=""
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography
                          className="cardTitle"
                          sx={{
                            fontSize: "clamp(1rem, 2.5vw, 1rem)",
                            textDecoration: "underline",
                            paddingTop: "8px",
                          }}
                        >
                          Happy Spins
                        </Typography>
                        <Rating
                          name="read-only"
                          sx={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)" }}
                          value="5"
                          readOnly
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "clamp(0.5rem, 2.5vw, 1.1rem)",
                          }}
                        >
                          Bonus
                        </Typography>
                        <Typography
                          sx={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
                        >
                          BET $10
                        </Typography>
                        <Typography
                          sx={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
                        >
                          GET $400
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      width: "100%",
                      background: "#009129",
                      fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                      textTransform: "capitalize",
                    }}
                  >
                    Bet now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{ border: "8px solid rgb(245 245 245)" }}
          >
            <CardContent sx={{ paddingBottom: "16px !important" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <img
                    src={IMG1}
                    loading="lazy"
                    alt=""
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography
                          className="cardTitle"
                          sx={{
                            fontSize: "clamp(1rem, 2.5vw, 1rem)",
                            textDecoration: "underline",
                            paddingTop: "8px",
                          }}
                        >
                          Halper
                        </Typography>
                        <Rating
                          name="read-only"
                          sx={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)" }}
                          value="5"
                          readOnly
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "clamp(0.5rem, 2.5vw, 1.1rem)",
                          }}
                        >
                          Bonus
                        </Typography>
                        <Typography
                          sx={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
                        >
                          BET $10
                        </Typography>
                        <Typography
                          sx={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
                        >
                          GET $400
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      width: "100%",
                      background: "#009129",
                      fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                      textTransform: "capitalize",
                    }}
                  >
                    Bet now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
export default Mockup;
