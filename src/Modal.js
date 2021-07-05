const Modal = ({ isEmpty, isItemAdded, isItemRemoved, isClearAllItems }) => {
  if (isEmpty) {
    return <h3 className="Modalshow1">Please Enter something</h3>;
  }
  if (isItemAdded) {
    return <h3 className="Modalshow2">1 item added</h3>;
  }
  if (isItemRemoved) {
    return <h3 className="Modalshow3">1 Item removed</h3>;
  }
  if (isClearAllItems) {
    return <h3 className="Modalshow4">All Items Removed</h3>;
  }
  return <h3 className="Modalhide">anything in here</h3>;
};

export default Modal;
