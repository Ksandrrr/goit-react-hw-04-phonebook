import PropTypes from 'prop-types';
const PhoneBookFilter = ({ saveFilterValue, Filter }) => {
  return (
    <input
      type="text"
      name="filter"
      title="Search Contacts"
      onChange={saveFilterValue}
      value={Filter}
    />
  );
};

PhoneBookFilter.propTypes = {
  saveFilterValue: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default PhoneBookFilter;
