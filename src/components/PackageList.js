import { useState } from "react";
import { PackageInput } from "../subComponents/PackageInput";
import "./component.css";

export const PackageList = ({
  list,
  update,
  deleteList,
  clearlist,
  listFilter,
}) => {
  const [sortlist, setSortBy] = useState("input");

  let sorttedItem;

  if (sortlist === "input") sorttedItem = list;

  if (sortlist === "1") {
    sorttedItem = list.slice().sort((a, b) => a.index - b.index);
  }
  if (sortlist === "2") {
    sorttedItem = list.slice().sort((a, b) => a.checkBox - b.checkBox);
  }
  return (
    <>
      <div className="packageList">
        {sorttedItem.map((item) => (
          <PackageInput item={item} update={update} deleteList={deleteList} />
        ))}
        <div className="packageListFilter">
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="1">Sort By Input Order</option>
            <option value="2">Sort By Packing Status</option>
            <option></option>
          </select>
          <button onClick={clearlist} style={{ cursor: "pointer" }}>
            Clear List
          </button>
        </div>
      </div>
    </>
  );
};
