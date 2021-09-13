const ForintInput = ({ setForint, forint }) => {
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
          onChange={(e) => setForint(Number(e.target.value))}
        />
      </div>
    </form>
  );
};

export default ForintInput;
