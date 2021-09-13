import { useState } from 'react';

const ForintInput = () => {
  const [forint, setForint] = useState(0);
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="forint">
          Forint (HUF)
        </label>
        <input
          className="form-control"
          type="number"
          name="forint"
          value={forint}
          onChange={(e) => setForint(e.target.value)}
        />
      </div>
    </form>
  );
};

export default ForintInput;
