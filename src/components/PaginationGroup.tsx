/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface PageType {
  statePage: any;
  currentPage: any | undefined;
  lastPage: any | undefined;
  handlePrevPagination: any;
  handleMovePage: any;
  handleNextPagination: any;
}

const PaginationGroup: React.FC<PageType> = (props) => {
  const {
    statePage,
    // currentPage,
    // lastPage,
    handlePrevPagination,
    // handleMovePage,
    handleNextPagination,
  } = props;
  return (
    <div
      css={css`
        display: flex;
        margin-left: auto;
        margin-right: auto;
        gap: 10px;
        font-weight: 800 !important;
      `}
    >
      <button
        onClick={handlePrevPagination}
        disabled={statePage === 1}
        css={css`
          background: #d36b00;
          width: 40px;
          opacity: ${statePage !== 1 ? '100%' : '50%'};
          height: 40px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          border: none;
          ${statePage !== 1 && 'cursor: pointer;'}
          color: white;
          border-radius: 3px;
          &:hover {
            filter: brightness(70%);
          }
        `}
      >
        <span className="material-icons">arrow_back</span>
      </button>
      {/* <button
        onClick={() => handleMovePage(1)}
        disabled={statePage === 1}
        css={css`
          background: ${statePage === 1 ? '#d36b00' : 'none'};
          width: 40px;
          opacity: 100%;
          height: 40px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          border: none;
          cursor: pointer;
          color: ${statePage === 1 ? 'white' : '#d36b00'};
          border-radius: 3px;
          &:hover {
            filter: brightness(70%);
          }
        `}
      >
        <span>1</span>
      </button>
      {(currentPage <= 3 ?? currentPage >= lastPage - 2) && (
        <button
          onClick={() => handleMovePage(2)}
          css={css`
            background: ${statePage === 2 ? '#d36b00' : 'none'};
            width: 40px;
            opacity: 100%;
            height: 40px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border: none;
            cursor: pointer;
            color: ${statePage === 2 ? 'white' : '#d36b00'};
            border-radius: 3px;
            &:hover {
              filter: brightness(70%);
            }
          `}
        >
          <span>2</span>
        </button>
      )}
      {(currentPage <= 3 ?? currentPage >= lastPage - 2) && (
        <button
          onClick={() => handleMovePage(3)}
          css={css`
            background: ${statePage === 3 ? '#d36b00' : 'none'};
            width: 40px;
            opacity: 100%;
            height: 40px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border: none;
            cursor: pointer;
            color: ${statePage === 3 ? 'white' : '#d36b00'};
            border-radius: 3px;
            &:hover {
              filter: brightness(70%);
            }
          `}
        >
          <span>3</span>
        </button>
      )}
      {currentPage >= 4 && (
        <button
          onClick={handlePrevPagination}
          disabled={true}
          css={css`
            width: 40px;
            opacity: 100%;
            height: 40px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border: none;
            cursor: pointer;
            color: #d36b00;
            border-radius: 3px;
            &:hover {
              filter: brightness(70%);
            }
          `}
        >
          <span>...</span>
        </button>
      )}
      {currentPage < lastPage - 2 && (
        <button
          onClick={handlePrevPagination}
          disabled={true}
          css={css`
            width: 40px;
            opacity: 100%;
            height: 40px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border: none;
            cursor: pointer;
            color: #d36b00;
            border-radius: 3px;
            &:hover {
              filter: brightness(70%);
            }
          `}
        >
          <span>...</span>
        </button>
      )}
      {currentPage <= lastPage - 2 ??
        (currentPage < 4 && (
          <button
            onClick={() => handleMovePage(lastPage - 2)}
            disabled={true}
            css={css`
              background: ${statePage === lastPage - 2 ? '#d36b00' : 'none'};
              width: 40px;
              opacity: 100%;
              height: 40px;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              border: none;
              cursor: pointer;
              color: ${lastPage - 2 === statePage ? 'white' : '#d36b00'};
              border-radius: 3px;
              &:hover {
                filter: brightness(70%);
              }
            `}
          >
            {String(lastPage - 2 ?? '...')}
          </button>
        ))}
      {(currentPage <= lastPage - 2 ?? currentPage < 4) && (
        <button
          onClick={() => handleMovePage(lastPage - 1)}
          css={css`
            background: ${statePage === lastPage - 1 ? '#d36b00' : 'none'};
            width: 40px;
            opacity: 100%;
            height: 40px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            border: none;
            cursor: pointer;
            color: ${lastPage - 2 === statePage ? 'white' : '#d36b00'};
            border-radius: 3px;
            &:hover {
              filter: brightness(70%);
            }
          `}
        >
          {String(lastPage - 1 ?? '...')}
        </button>
      )}
      <button
        onClick={() => handleMovePage(lastPage)}
        css={css`
          background: ${statePage === lastPage ? '#d36b00' : 'none'};
          width: 40px;
          opacity: 100%;
          height: 40px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          border: none;
          cursor: pointer;
          color: ${statePage === lastPage ? 'white' : '#d36b00'};
          border-radius: 3px;
          &:hover {
            filter: brightness(70%);
          }
        `}
      >
        {String(lastPage ?? '...')}
      </button> */}

      <button
        onClick={handleNextPagination}
        css={css`
          background: #d36b00;
          width: 40px;
          height: 40px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 3px;
          &:hover {
            filter: brightness(70%);
          }
        `}
      >
        <span className="material-icons">arrow_forward</span>
      </button>
    </div>
  );
};

export default PaginationGroup;
