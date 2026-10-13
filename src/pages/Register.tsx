import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BackLink from "../components/BackLink";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Enter at least 2 characters")
    .matches(/^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u, "Name can only contain letters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Use at least 6 characters"),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

type RegisterValues = yup.InferType<typeof schema>;

function Register() {
  const navigate = useNavigate();
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<RegisterValues>({
  resolver: yupResolver(schema),
  mode: "onSubmit",
  reValidateMode: "onSubmit",
});

  const onSubmit = (data: RegisterValues) => {
    navigate("/registered", { state: { name: data.name } });
  };

  return (
    <section className="panel form-panel">
      <BackLink to="/" label="Back to sign in" />
      <h1>Create an account</h1>
      <p className="intro">Enter your details below.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Full name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && <span className="error" id="name-error">{errors.name.message}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && <span className="error" id="email-error">{errors.email.message}</span>}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="At least 6 characters"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            {...register("password")}
          />
          {errors.password && <span className="error" id="password-error">{errors.password.message}</span>}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={errors.confirmPassword ? "confirm-error" : undefined}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <span className="error" id="confirm-error">{errors.confirmPassword.message}</span>}
        </div>

        <button className="button submit-button" type="submit">Continue</button>
      </form>

      <p className="form-footer">Already have an account? <Link to="/">Sign in</Link></p>
    </section>
  );
}

export default Register;
