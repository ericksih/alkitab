import React from 'react';
import { Divider, Tabs } from 'antd';

const { TabPane } = Tabs;

const About = () => {
  return (
    <Tabs
      defaultActiveKey='1'
      tabPosition='left'
      style={{
        marginLeft: '-1.2rem',
      }}
    >
      <TabPane tab='FAQ' key='1'>
        <Divider orientation='left' orientationMargin='0'>
          <h4> Frequently Asking Question</h4>
        </Divider>
        <ul>
          <li>
            <p>
              <strong>What is the purpose of this project?</strong>
            </p>
            <p>
              This project is a web application that aims to help people to read
              Indonesian bible in a more convenient way.
            </p>
          </li>
          <li>
            <p>
              <strong>Is it free to use?</strong>
            </p>
            <p>Yes, this project is free to use. You can use it for free.</p>
          </li>
          <li>
            <p>
              <strong>How to use it?</strong>
            </p>
            <p>
              You can read the Indonesian bible in this project. You can choose
              the version of the book you want to read{' '}
              <em>
                <strong>Indonesia, English, Batak, Sunda, Jawa.</strong>
              </em>{' '}
              You can also choose book and chapter you want to read.
            </p>
          </li>
        </ul>
      </TabPane>
      <TabPane tab='About' key='2'>
        <Divider orientation='left' orientationMargin='0'>
          <h4>About</h4>
        </Divider>
        <p>
          Here{' '}
          <a
            href='https://github.com/sonnylazuardi/alkitab-api'
            target='_blank'
            rel='noopener noreferrer'
          >
            API{' '}
          </a>
          for this project i use.
        </p>

        <p>Thanks for people who create this API, God bless you!</p>
      </TabPane>
      <TabPane tab='Contact' key='3'>
        <Divider orientation='left' orientationMargin='0'>
          <h4> Contact</h4>
        </Divider>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio
          omnis praesentium sequi at veniam repellendus pariatur asperiores.
          Accusamus totam nobis harum! Neque, numquam sunt!
        </p>
      </TabPane>
    </Tabs>
  );
};

export default About;
