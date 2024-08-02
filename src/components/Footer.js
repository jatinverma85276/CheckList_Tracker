export const Footer = ({ noList }) => {
  const pack = noList.filter((e) => e.checkBox === true);

  return (
    <>
      <div className="FooterCheck">
        <p>
          <em>
            You have <strong>{noList.length}</strong> item in your list, and you
            already packed <strong>{pack.length}</strong>
          </em>
        </p>
      </div>
    </>
  );
};
