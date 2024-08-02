import "./component.css";

export const FormTags = (props) => {
  return (
    <>
      <div className="formTags">
        <div className="formCheck">
          <div>
            <p>What do you need for your 😍 trip ?</p>
          </div>
          <div className="function">
            <select ref={props.co}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <input type="text" ref={props.inp} />
            <button onClick={props.addList}>ADD </button>
          </div>
        </div>
      </div>
    </>
  );
};
