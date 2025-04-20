import "./SearchBox.css"

const SearchBox = ({placeholder,onChange}) => {
  return <input type="search" placeholder={placeholder} onChange={onChange}/>;
};

export default SearchBox;
