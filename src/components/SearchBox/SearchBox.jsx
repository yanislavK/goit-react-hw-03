import css from "./../SearchBox/SearchBox.module.css";

const SearchBox = ({ filterValue, setFilterValue }) => {
  return (
    <div className={css.cont}>
      <input
        className={css.search}
        value={filterValue}
        type="text"
        placeholder="search"
        onChange={(evt) => {
          setFilterValue(evt.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
