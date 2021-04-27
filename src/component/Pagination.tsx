/**
 * @author Fazal Iqubal
 */

import React, { FC } from "react";

type paginationProps = {
  postsPerPage?: number,
  totalPosts?: number,
  paginate?: (data: any) => void,
};

/**
 * @description Pagination component.
 * Component used for Pagination.
 */

const Pagination: FC<paginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}: paginationProps) => {
  const pageNumber = [];
  //@ts-ignore
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumber.map((number) => (
        <li key={number} className="page-item">
          <a onClick={(e) => {
            e.preventDefault()
            //@ts-ignore
            paginate(number)}
          } href="/"
            className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
