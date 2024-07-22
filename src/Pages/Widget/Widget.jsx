import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BG from "../../assets/bg.png";
import Container from "@mui/material/Container";

function Widget() {
  return (
    <>
      <Container maxWidth="md">
        <Card variant="outlined" orientation="horizontal">
          <CardContent sx={{ paddingBottom: "16px !important" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <img
                  src={BG}
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
                        className="cardTotle"
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
      </Container>
    </>
  );
}
export default Widget;
