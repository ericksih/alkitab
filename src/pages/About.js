import React from 'react';
import { Divider, Tabs } from 'antd';
import {
  WhatsAppOutlined,
  GithubOutlined,
  MailFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

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
        <Divider>
          <h4> Frequently Asking Question</h4>
        </Divider>
        <div className='faq-about'>
          <ul>
            <li>
              <h3>Is it free to use?</h3>
              <p>Yes, it is free to use.</p>
            </li>
            <li>
              <h3>How to use it?</h3>
              <p>
                You can read the Indonesian bible in this project. You can
                choose the version of the book you want to read you can choose
                between{' '}
                <em>
                  <strong>
                    <u>
                      Indonesian, English, Batak, Sunda, Jawa, Makasar and Bali
                    </u>
                  </strong>
                </em>{' '}
                language.
              </p>
            </li>
          </ul>
        </div>
      </TabPane>
      <TabPane tab='About' key='2'>
        <Divider>
          <h4>About</h4>
        </Divider>

        <div className='faq-about'>
          <ul>
            <li>
              <h3>What is the purpose of this project?</h3>
              <p>
                This project is a web application that allows users to Read
                Bibel and learn about the bible. The application is built using
                ReactJS and Ant Design. The application is designed to be easy
                to use and easy to learn.
              </p>
            </li>
            <li>
              <h3>Who is behind this project?</h3>
              <p>
                This project free API from{' '}
                <a
                  href='https://bible.sonnylab.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Bible API
                </a>{' '}
                and is built by{' '}
                <a
                  href='https://github.com/sonnylazuardi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  sonnylazuardi.
                </a>
                <strong> Thank you, God bless you! </strong>
              </p>
            </li>
          </ul>
        </div>
      </TabPane>
      <TabPane tab='Contact' key='3'>
        <Divider>
          <h4> Contact</h4>
        </Divider>

        <div className='contact-us'>
          <p>
            <WhatsAppOutlined />
            <a
              href='https://wa.me/628118750400'
              target='_blank'
              rel='noopener noreferrer'
            >
              WhatsApp
            </a>
          </p>

          <p>
            <MailFilled />
            <a
              href='mailto:wbs@bpjs-kesehatan.go.id'
              target='_blank'
              rel='noopener noreferrer'
            >
              Email
            </a>
          </p>

          <p>
            <GithubOutlined />
            <a href='#!'>Github</a>
          </p>

          <p>
            <TwitterCircleFilled />
            <a href='#!'>Twitter </a>
          </p>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default About;
