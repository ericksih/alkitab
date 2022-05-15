import React, { Fragment } from 'react';

const BookItem = ({ data }) => {
  //   console.log('🚀 ~ file: BookItem.js ~ line 4 ~ BookItem ~ data', data);
  return (
    <Fragment>
      {data &&
        data.passages.verses.map((verse, idx) => {
          if (verse.type === 'title') {
            return (
              <li key={idx}>
                <h1>
                  <em>
                    <u>{verse.content}</u>
                  </em>
                </h1>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <p className='ayat'>
                  <span className='verse'>({verse.verse}) </span>
                  <span className='content'>{verse.content}</span>
                </p>
              </li>
            );
          }
        })}
    </Fragment>
  );
};

export default BookItem;
