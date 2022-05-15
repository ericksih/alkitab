import React, { Fragment, useState } from 'react';
import { dataBook } from '../utils';
import { Link } from 'react-router-dom';

import { Tabs, Select, Row, Col, Tooltip } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

const Home = () => {
  const [version, setVersion] = useState('tb');
  // console.log('🚀 ~ file: Home.js ~ line 3 ~ dataBook', dataBook.slice(0, 39));

  return (
    <Fragment>
      <Tabs
        type='card'
        defaultActiveKey='1'
        tabPosition='top'
        tabBarExtraContent={
          <Select
            style={{ width: 120 }}
            showSearch
            value={version}
            optionFilterProp='children'
            onChange={(e) => setVersion(e)}
          >
            <Option value='tb'>Indonesia</Option>
            <Option value='av'>English</Option>
            <Option value='toba'>Batak</Option>
            <Option value='sunda'>Sunda</Option>
            <Option value='jawa'>Jawa</Option>
          </Select>
        }
      >
        <TabPane
          tab={
            <>
              <Tooltip title='Perjanjian Lama' placement='topLeft'>
                <span>PL</span>
              </Tooltip>
            </>
          }
          key='1'
          className='tab-pane'
        >
          <Row gutter={[4, 1]}>
            {dataBook.slice(0, 39).map((item, index) => (
              <Col span={8} key={index}>
                <Link to={`/${version}/${item.slug}`} className='tab-pane-link'>
                  <p>{item.judul}</p>
                </Link>
              </Col>
            ))}
          </Row>
        </TabPane>

        <TabPane
          tab={
            <>
              <Tooltip title='Perjanjian Baru' placement='left'>
                <span>PB</span>
              </Tooltip>
            </>
          }
          key='2'
          className='tab-pane'
        >
          <Row gutter={[4, 1]}>
            {dataBook.slice(39, dataBook.length).map((item, index) => (
              <Col span={8} key={index}>
                <Link to={`/${version}/${item.slug}`} className='tab-pane-link'>
                  <p>
                    {item.judul.slice(
                      0,
                      item.judul.length > 10 ? 10 : item.judul.length
                    )}
                  </p>
                </Link>
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default Home;