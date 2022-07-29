import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  signInWithPopup,
} from "../../Firebase/FirebaseProvider";

const Login = () => {
  const navigate = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        localStorage.setItem("emart-user", JSON.stringify(result.user));
        // console.log(result.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={800}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography
            sx={{ variant: { xs: "p", md: "h2" } }}
            paddingBottom={3}
            textAlign={"center"}
          >
            Sign In / Sign Up{" "}
          </Typography>
          <Box
            display="flex"
            // flexDirection="row"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Box display="flex" flexDirection="column" padding={3}>
              <TextField
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
              />
              <TextField
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
              />
              <TextField
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
              />
              <Typography variant="span" margin="normal">
                Forgot Password?
              </Typography>
              <Button
                margin="normal"
                style={{
                  background: "#d34836",
                  padding: "2px",
                  height: "40px",
                  lineHeight: "40px",
                  color: "#fff",
                }}
              >
                Login
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              padding={3}
            >
              <Button
                style={{
                  background: "#d34836",
                  padding: "2px",
                  margin: "2px",
                  height: "40px",
                  lineHeight: "40px",
                  color: "#fff",
                }}
                onClick={googleSignIn}
              >
                <GoogleIcon />
                <Typography margin={5}>Google</Typography>
              </Button>
              <Button
                style={{
                  background: "#3b5998",
                  padding: "2px",
                  margin: "2px",
                  height: "40px",
                  color: "#fff",
                  lineHeight: "40px",
                }}
              >
                <FacebookIcon />
                <Typography margin={5}>Facebook</Typography>
              </Button>

              <Button
                style={{
                  background: "#484c55",
                  padding: "2px",
                  margin: "2px",
                  height: "40px",
                  color: "#fff",
                  lineHeight: "40px",
                }}
              >
                <GitHubIcon />
                <Typography margin={5}>Github</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Login;
