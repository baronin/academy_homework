const Filter = ({ updateFilter, searchTerm }) => {
  return (
    <div className='mb-3'>
      <input
        value={searchTerm}
        onChange={(e) => updateFilter(e.target.value)}
        type='text'
        className='form-control'
      />
    </div>
  );
};

export default Filter;
