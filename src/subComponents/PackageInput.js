import "./sub.css";

export const PackageInput = ({ item, update, deleteList }) => {
  console.log(item, "Item CheckInput");
  return (
    <>
      <div className="listItem">
        <input
          type="checkbox"
          checked={item.checkBox ? true : false}
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
