import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
const Form = ({
  handleSubmit,
  addItems,
  names,
  removeItems,
  clearAllItems,
  list,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={names}
          placeholder="Add a new task"
          onChange={addItems}
        />
        <button className="btn">SUBMIT</button>
      </form>
      <div className="list">
        {list.map((item) => {
          const { id } = item;
          return (
            <div className="itemList">
              <div className="lists">
                <h3 className="item">{item.name}</h3>
                <DeleteForeverIcon
                  className="deleteIcon"
                  onClick={() => removeItems(id)}
                />
              </div>
            </div>
          );
        })}
        {list.length >= 1 ? (
          <div className="clearBtn">
            <div className="clearAll" onClick={() => clearAllItems()}>
              Clear All
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Form;
