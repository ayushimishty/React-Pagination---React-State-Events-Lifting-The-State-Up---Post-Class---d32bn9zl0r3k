import React from "react";
const PaginationButtonsList = ({ actPage, setActivePage }) => {
  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <div className="pagination-buttons-list">
      {btns.map((pn) => {
        return (
          <button
            id={`button-${pn}`}
            key={pn}
            className={pn === actPage ? "active-btn" : ""}
            onClick={() => {
              setActivePage(pn);
            }}
          >
            PN-{pn}
          </button>
        );
      })}
    </div>
  );
};

export { PaginationButtonsList };
