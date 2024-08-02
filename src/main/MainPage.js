import { useRef, useState } from "react";
import { FormTags } from "../components/FormTags";
import { Header } from "../components/Header";
import { PackageList } from "../components/PackageList";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  const inpu = useRef();
  const count = useRef();

  const [list, setList] = useState([]);

  function addList() {
    const tags = inpu.current.value;
    const cou = count.current.value;
    const newItem = {
      index: list.length + 1,
      id: cou,
      name: tags,
      checkBox: false,
    };
    setList((list) => [...list, newItem]);

    console.log(list);
  }

  function updateList(index) {
    const tek = list.map((item) => {
      if (item.index === index) {
        return { ...item, checkBox: !item.checkBox ? true : false };
      }
      return item;
    });
    setList(tek);
  }

  function deleteList(index) {
    const tek = list.filter((item) => item.index !== index);
    setList(tek);
  }

  function clearlist() {
    setList([]);
  }

  return (
    <>
      <Header />
      <FormTags addList={addList} inp={inpu} co={count} />
      <PackageList
        list={list}
        update={updateList}
        deleteList={deleteList}
        clearlist={clearlist}
      />
      <Footer noList={list} />
    </>
  );
};
