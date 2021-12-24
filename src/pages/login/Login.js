// import react, { useState } from "react";
import {
  Typography,
  Link,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import Upsell from "../../assets/images/upsell.jpg";
import "./style.css";
const Signin = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors, "faisal");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to left bottom, rgb(230,242,255) 0%, rgb(230,242,255) 60%, rgb(195,213,255) 100%)",
      }}
    >
      <Grid container className="main_dev" sx={{ pl: "3rem" }}>
        <Grid
          item
          xs={12}
          md={6}
          className="secondary__text margin-top-1"
          sx={{
            boxShadow: "-5px 5px 1rem rgba(0,0,0,0.1)",
            backgroundColor: "secondary.light",
            height: "80vh",
            p: 8,
            width: "100%",
          }}
        >
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Typography varient="h5" sx={{ fontSize: "24px" }}>
              Sign In
            </Typography>
            <TextField
              size="small"
              label="Email"
              placeholder="Enter Email"
              margin="normal"
              required
              fullWidth={true}
              name="Email"
              type="Email"
              id="Email"
              autoComplete="current-Email"
              {...register("email", {
                required: "email is required",
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              size="small"
              label="Password"
              placeholder="Enter Password"
              margin="normal"
              required
              fullWidth={true}
              name="Password"
              type="Password"
              id="Password"
              autoComplete="current-Password"
              {...register("Password", {
                required: "password is required",
              })}
              error={Boolean(errors.Password)}
              helperText={errors.Password?.message}
            />
            <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
              <FormGroup errors={Boolean(errors.tnc)}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="policies"
                      {...register("policies", {
                        required: "please agree our terms and conditions",
                      })}
                    />
                  }
                  label={
                    <Typography variant="h2">
                      I agree to the{" "}
                      <Link
                        sx={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontsize: "10px",
                        }}
                      >
                        Terms of Policy{" "}
                      </Link>
                      and{" "}
                      <Link
                        sx={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontsize: "15px",
                        }}
                      >
                        Privacy Policy.
                      </Link>
                    </Typography>
                  }
                />
              </FormGroup>
            </Box>
            <FormHelperText sx={{ color: "red", pl: "3rem", zIndex: "-20" }}>
              {errors.policies?.message}
            </FormHelperText>

            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ mr: 2 }}>
                <Link>Forget Password?</Link>
              </Typography>
              <Typography className="sign_up" sx={{ fontsize: "10px" }}>
                Don't have an account ?
                <Link sx={{ fontsize: "10px" }}>SignUp</Link>
              </Typography>
            </Grid>
            <Button
              sx={{
                bgColor: "primary.main",
                color: "#fff",
                m: 5,
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              SignIn
            </Button>
          </form>
        </Grid>

        <Grid item xs={12} md={6} className="secondary__text1 margin-top-1">
          <Typography
            className="heading_left"
            varient="h5"
            textAlign="start"
            sx={{ pl: 2, fontSize: "24px" }}
          >
            Over 30 Million Kashmiris Us UpStore
          </Typography>
          <Typography
            className="heading_left"
            varient="h5"
            textAlign="start"
            sx={{ pl: 2, fontSize: "24px" }}
          >
            For Inventory Management Over Million Kashmir.
          </Typography>
          <Typography
            varient="h5"
            textAlign="start"
            sx={{ pl: 2, color: "secondary.main", fontSize: "" }}
          >
            mnmxbmnx Use UpStore For Inventory Management mnmxbmnx Use UpStore
            For Inventory Management.
          </Typography>
          <img width="450px" height="340px" src={Upsell} alt="img" />
          <Typography textAlign="start" sx={{ pl: 3, pt: 1 }}>
            Don't have an account ?<Link>SignUp</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signin;
