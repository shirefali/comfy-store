const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={label}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};

export default FormInput;
