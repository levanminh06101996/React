import PropTypes from "prop-types";

function Inputext({ name, register = () => ({}), message = "" }) {
  return (
    <label>
      <input type="text" {...register(name)} />
      <br />
      {message && <p>{message}</p>}
      <br />
    </label>
  );
}

Inputext.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  message: PropTypes.string,
};

export default Inputext;
