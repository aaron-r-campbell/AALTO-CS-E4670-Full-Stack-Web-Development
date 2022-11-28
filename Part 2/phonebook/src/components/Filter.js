const Filter = ({ value, action }) => {
  return (
    <div>
      filter shown with <input value={value} onChange={action} />
    </div>
  );
};

export default Filter;
