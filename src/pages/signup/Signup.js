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
import Upsell from "../../assets/images/upsell.jpg";
import { useForm } from "react-hook-form";
import "./style.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors, "faisal");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage:
            "linear-gradient(to left bottom, rgb(230,242,255) 0%, rgb(230,242,255) 60%, rgb(195,213,255) 100%)",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "90%",
            borderRadius: "1.6rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            className="secont_pro"
            sx={{
              bgColor: "secondary.light",
              flexBasis: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid #fff",
              borderRight: "none",
              borderTopLeftRadius: "1.6rem",
              borderBottomLeftRadius: "1.6rem",
              padding: "1rem 1.8rem",
              boxShadow: "-3px 5px 1rem rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                lineHeight: "1.3",
                fontFamily: "futura",
                margin: "1rem 0",
                fontSize: "1.4rem",
                paddingTop: "1.6rem",
                color: "#1A293F",
              }}
            >
              Manage your inventory, Sales, billing & Much more…!
            </Typography>
            <img src={Upsell} alt="img" />
            <Typography
              style={{ padding: "1.6rem 0 1rem" }}
              variant="subtitle1"
            >
              <span sx={{ color: "#1A293F", fontWeight: "100" }}>
                Don't have an account?
              </span>
              &nbsp;
              <Link
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  // jumpTo("/login")
                }}
                underline="hover"
              >
                SignIn
              </Link>
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "secondary.light",
              flexBasis: "80%",
              height: "100%",
              borderRadius: "1.6rem",
            }}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h5" textAlign="start" sx={{ pt: 5, pl: 5 }}>
              Get your free Upstore account now.
            </Typography>

            <Typography
              variant="h6"
              textAlign="start"
              sx={{ pl: 5, color: "secondary.main" }}
            >
              lets get you all setup so you can verify your personal account
              <br />
              And begin setting up your Profile
            </Typography>

            <Box minWidth="100%">
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container sx={{ padding: "20px" }} spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      size="small"
                      label="First Name"
                      placeholder="Enter Firstname"
                      required
                      fullWidth={true}
                      {...register("firstName", {
                        required: "first name is required.",
                      })}
                      name="firstName"
                      type="firstName"
                      id="firstName"
                      autoComplete="firstName"
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("lastName", {
                        required: "last name is required",
                      })}
                      size="small"
                      label="Last Name"
                      placeholder="Enter username"
                      required
                      fullWidth={true}
                      name="lastName"
                      type="lastName"
                      id="lastName"
                      autoComplete="lastName"
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("email", {
                        required: "email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "enter a valid e-mail address",
                        },
                      })}
                      size="small"
                      label="Email"
                      placeholder="Enter Email"
                      required
                      fullWidth={true}
                      name="email"
                      type="email"
                      id="email"
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("Companyname", {
                        required: "company name is required",
                      })}
                      size="small"
                      label="Company Name"
                      placeholder="Company Name"
                      required
                      fullWidth={true}
                      name="Companyname"
                      type="Companyname"
                      id="Companyname"
                      error={Boolean(errors.Companyname)}
                      helperText={errors.Companyname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("Password", {
                        required: "password is required",
                        minLength: {
                          value: 8,
                          message: "should have at least 8 characters",
                        },
                      })}
                      size="small"
                      label="Password"
                      placeholder="Enter Password"
                      required
                      fullWidth={true}
                      name="Password"
                      type="Password"
                      id="Password"
                      autoComplete="current-Password"
                      error={Boolean(errors.Password)}
                      helperText={errors.Password?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("ConfirmPassword", {
                        required: "confirm password is required",
                        validate: (value) =>
                          value === watch("Password") ||
                          "shoud be same as password",
                      })}
                      size="small"
                      label="Confirm Password"
                      placeholder="Enter Password"
                      required
                      fullWidth={true}
                      name="ConfirmPassword"
                      type="Password"
                      id="ConfirmPassword"
                      autoComplete="current-Password"
                      error={Boolean(errors.ConfirmPassword)}
                      helperText={errors.ConfirmPassword?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("country", {
                        required: "country is required",
                      })}
                      size="small"
                      label="Country"
                      placeholder="Enter Country"
                      required
                      fullWidth={true}
                      name="Country"
                      type="Country"
                      id="Country"
                      autoComplete="current-Country"
                      error={Boolean(errors.Country)}
                      helperText={errors.Country?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      {...register("City", {
                        required: "city is required",
                      })}
                      size="small"
                      label="City"
                      placeholder="Enter City"
                      required
                      fullWidth={true}
                      name="City"
                      type="City"
                      error={Boolean(errors.City)}
                      helperText={errors.City?.message}
                    />
                  </Grid>
                </Grid>

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
                          I agree to the
                          <Link
                            sx={{ textDecoration: "none", cursor: "pointer" }}
                          >
                            &nbsp;Terms of Policy &nbsp;
                          </Link>
                          and &nbsp;
                          <Link
                            sx={{ textDecoration: "none", cursor: "pointer" }}
                          >
                            &nbsp;Privacy Policy.
                          </Link>
                        </Typography>
                      }
                    />
                  </FormGroup>
                </Box>
                <FormHelperText
                  sx={{ color: "red", pl: "3rem", zIndex: "-20" }}
                >
                  {errors.policies?.message}
                </FormHelperText>
                <Button
                  sx={{
                    display: "block",
                    textTransform: "capitalize",
                    bgColor: "primary",
                    pt: 1,
                    pb: 1,
                    pl: 3,
                    pr: 3,
                    ml: 2,
                    mt: 2,
                  }}
                  type="submit"
                  value="submit"
                  variant="contained"
                >
                  Create Account
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
