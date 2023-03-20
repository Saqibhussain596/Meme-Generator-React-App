import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    ifJoin: false,
  });
  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword)
      console.log("Successfully signed up");
    else {
      console.log("Passwords do not match");
      return;
    }
    formData.ifJoin && console.log("Thanks for signing up for our newsletter");
  }
  console.log(formData);
  return (
    <>
      <form onSubmit={handleSubmit} className="temp">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <div>
          <input
            type="checkbox"
            id="ifJoin"
            name="ifJoin"
            checked={formData.ifJoin}
            onChange={handleChange}
          />
          <label htmlFor="ifJoin">I want to join the newsletter</label>
        </div>
        <button>Sign up</button>
      </form>
    </>
  );
}
