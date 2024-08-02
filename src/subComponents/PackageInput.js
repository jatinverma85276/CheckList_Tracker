import "./sub.css";

export const PackageInput = ({ item, update, deleteList }) => {
  return (
    <>
      <div className="listItem">
        <input
          type="checkbox"
          value={item.checkBox}
          onChange={() => update(item.index)}
        />
        <p className={item.checkBox ? "LineCheck" : ""}>{item.id}</p>
        <p className={item.checkBox ? "LineCheck" : ""}>{item.name}</p>
        <p onClick={() => deleteList(item.index)} style={{ cursor: "pointer" }}>
          ❌
        </p>
      </div>
    </>
  );
};
