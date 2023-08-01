import React from "react";
import styles from "./ResultsList.module.scss";

const ResultsList = ({ data, info }) => {
  const resultsList = data.map((result, index) => {
    return (
      <li className={styles.results_item} key={result.id}>
        {index + 1 + ". "}
        {result.title
          ? result.title + " ISSN:" + result.issn + " e-ISSN:" + result.e_issn
          : result.title_2 +
            " ISSN:" +
            result.issn_2 +
            " e-ISSN:" +
            result.e_issn_2}
      </li>
    );
  });

  return (
    <div className={styles.results_list_wrapper}>
      {info ? <p className={styles.information}>{info}</p> : null}
      <ul className={styles.results_items}>{resultsList}</ul>
    </div>
  );
};

export { ResultsList };
