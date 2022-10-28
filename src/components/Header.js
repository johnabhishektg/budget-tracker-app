const Header = () => {
  return (
    <div className="header">
      <h2 className="title">My Budget Planner</h2>
      <div className="header-disp">
        <div className="disp-1">
          <p>Budget:</p>
          <button type="submit">edit</button>
        </div>
        <div className="disp-2">Remaning:</div>
        <div className="disp-3">Spent so far:</div>
      </div>
    </div>
  );
};

export default Header;
