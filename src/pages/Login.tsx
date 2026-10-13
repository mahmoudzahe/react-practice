import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Use at least 6 characters"),
});

type LoginValues = yup.InferType<typeof schema>;

function Login() {
  const navigate = useNavigate();
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginValues>({
  resolver: yupResolver(schema),
  mode: "onSubmit",
  reValidateMode: "onSubmit",
});

  const onSubmit = () => {
    navigate("/products");
  };

  return (
    <section className="panel form-panel">
      <h1>Welcome back</h1>
      <p className="intro">Sign in to continue to the store.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "login-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && <span className="error" id="login-email-error">{errors.email.message}</span>}
        </div>

        <div className="field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "login-password-error" : undefined}
            {...register("password")}
          />
          {errors.password && <span className="error" id="login-password-error">{errors.password.message}</span>}
        </div>

        <button className="button submit-button" type="submit">Sign in</button>
      </form>

      <p className="form-footer">Don't have an account? <Link to="/register">Create one</Link></p>
      <p className="form-note">Demo sign in: any valid email and a password with 6 or more characters.</p>
    </section>
  );
}

export default Login;
