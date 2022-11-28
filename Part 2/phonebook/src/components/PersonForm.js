import Field from "./Field";

const PersonForm = ({ submitAction, fields, submitText }) => {
  return (
    <form onSubmit={submitAction}>
      <div>
        {fields.map((field) => (
          <Field {...field} />
        ))}
      </div>
      <div>
        <button type="submit">{submitText}</button>
      </div>
    </form>
  );
};

export default PersonForm;
