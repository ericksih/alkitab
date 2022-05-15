/* eslint-disable array-callback-return */
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { dataBook } from '../utils';

import { BackTop, Spin, Skeleton, Divider } from 'antd';

const Book = () => {
  const { version, book } = useParams();

  const [chapter, setChapter] = useState(1);
  const [hasil, setHasil] = useState('');
  // console.log('🚀 ~ file: Book.js ~ line 12 ~ Book ~ hasil', hasil);

  const GET_CHAPTER = gql`
    query {
      passages(version: ${version}, book: "${book}", chapter: ${chapter}) {
        verses {
          type
          book
          chapter
          verse
          content
          order
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_CHAPTER);
  // console.log('Book ~ data', data);

  useEffect(() => {
    if (data) {
      setHasil(data.passages.verses.slice(-1)[0].verse);
    }
  }, [data]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <Fragment>
      <div className='judul-ayat'>
        {loading ? (
          <h2>
            <Spin
              style={{
                margin: '1rem',
              }}
            />
          </h2>
        ) : (
          <h2>
            <Divider
              orientation='left'
              orientationMargin='0'
              style={{
                fontSize: '1.5rem',
                marginBottom: '0.5em',
              }}
            >
              {dataBook.find((item) => item.slug === book).judul +
                ' ' +
                chapter +
                ' : ' +
                ' 1 - ' +
                hasil}
            </Divider>
          </h2>
        )}
      </div>
      <div>
        {dataBook.map((result, idx) => {
          // console.log(
          //   '🚀 ~ file: Book.js ~ line 72 ~ {dataBook.map ~ result',
          //   result
          // );
          const { slug, ayat } = result;

          if (slug === book) {
            let tempRes = [];

            for (let i = 1; i <= ayat; i++) {
              tempRes.push(i);
            }

            return (
              <div key={idx} className='list-chapter'>
                {tempRes.map((chapter, idx) => {
                  return (
                    <div key={idx} onClick={() => setChapter(chapter)}>
                      <p className='p-chapter'>{chapter}</p>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}

        <div className='content-chapter'>
          {loading ? (
            <Skeleton
              active
              style={{
                padding: '2rem',
                marginLeft: '1rem',
                marginRight: '2rem',
              }}
            />
          ) : (
            <ul>
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
            </ul>
          )}
        </div>
      </div>
      <div>
        <BackTop
          visibilityHeight={200}
          style={{
            right: '1rem',
            bottom: '1rem',
            position: 'fixed',
            zIndex: '999',
          }}
        />
        <strong className='site-back-top-basic' />
      </div>
    </Fragment>
  );
};

export default Book;
