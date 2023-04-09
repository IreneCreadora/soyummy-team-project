import { useSearchParams } from 'react-router-dom';

export const SearchTypeSelector = ({ onChange }) => {
  const [, setSearchParams] = useSearchParams();

  const getType = e => {
    const type = e.target.value;
    console.log(type);
    onChange(type);
    setSearchParams({ type });
  };

  return (
    <div className="mx-8 flex items-center gap-5">
      <label>Search by:</label>
      <select name="type" onChange={getType}>
        <option value="title">title</option>
        <option value="ingredients">ingredient</option>
      </select>
    </div>
  );
};
