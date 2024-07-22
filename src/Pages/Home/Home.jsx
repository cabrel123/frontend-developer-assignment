import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function Home() {
  return (
    <>
      <Card sx={{ minWidth: 275, maxWidth: 392 }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 25,
              textAlign: "left",
              fontWeight: 600,
              paddingBottom: 12,
            }}
            variant="h1"
            component="div"
          >
            Senior Frontend Developer Assignment
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <Typography sx={{ fontWeight: 600 }} variant="body2">
            Bluewindow Ltd.
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default Home;
