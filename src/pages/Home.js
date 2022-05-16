import React, { Fragment, useState } from 'react';
import { dataBook } from '../utils';
import { Link } from 'react-router-dom';

import { Tabs, Select, Row, Col, Tooltip } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

const Home = () => {
  const [version, setVersion] = useState('tb');
  // console.log('🚀 ~ file: Home.js ~ line 3 ~ dataBook', dataBook.slice(0, 39));

  function onChange(value) {
    setVersion(value);
  }

  return (
    <Fragment>
      <Tabs
        type='card'
        defaultActiveKey='1'
        tabPosition='top'
        tabBarExtraContent={
          <Select
            defaultValue={version}
            defaultOpen={false}
            style={{ width: 120 }}
            showSearch
            placeholder='Select a person'
            optionFilterProp='children'
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='tb' key='tb'>
              Indonesia
            </Option>
            <Option value='av' key='av'>
              English
            </Option>
            <Option value='toba' key='toba'>
              Batak
            </Option>
            <Option value='sunda' key='sunda'>
              Sunda
            </Option>
            <Option value='jawa' key='jawa'>
              Jawa
            </Option>
            <Option value='makasar' key='makasar'>
              Makasar
            </Option>
            <Option value='bali' key='bali'>
              Bali
            </Option>
          </Select>
        }
      >
        <TabPane
          tab={
            <>
              <Tooltip title='Perjanjian Lama' placement='topLeft'>
                <span
                  style={{
                    color: '#000',
                    fontSize: '1.2em',
                  }}
                >
                  PL
                </span>
              </Tooltip>
            </>
          }
          key='1'
          className='tab-pane'
        >
          <Row gutter={[4, 1]}>
            {dataBook.slice(0, 39).map((item, index) => (
              <Col span={8} key={index}>
                <div>
                  <Link
                    to={`/${version}/${item.slug}`}
                    className='tab-pane-link'
                  >
                    <p>{item.judul}</p>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </TabPane>

        <TabPane
          tab={
            <>
              <Tooltip title='Perjanjian Baru' placement='left'>
                <span
                  style={{
                    color: '#000',
                    fontSize: '1.2em',
                  }}
                >
                  PB
                </span>
              </Tooltip>
            </>
          }
          key='2'
          className='tab-pane'
        >
          <Row gutter={[4, 1]}>
            {dataBook.slice(39, dataBook.length).map((item, index) => (
              <Col span={8} key={index}>
                <div>
                  <Link
                    to={`/${version}/${item.slug}`}
                    className='tab-pane-link'
                  >
                    <p>
                      {item.judul.slice(
                        0,
                        item.judul.length > 10 ? 10 : item.judul.length
                      )}
                    </p>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default Home;
