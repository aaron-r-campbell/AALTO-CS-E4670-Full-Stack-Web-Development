const Field = ({ title, value, action }) => {
  return (
    <div>
      {title} <input value={value} onChange={action} />
    </div>
  );
};

export default Field;
