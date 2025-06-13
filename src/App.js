// Organized and presentable import section
import 'antd/dist/reset.css'; // Add this at the top
import React, { useState, useEffect } from 'react';

// Ant Design Components
import {
  Layout,
  Typography,
  Tag,
  Timeline,
  Divider,
  Row,
  Col,
  Menu,
  Drawer,
  Button,
  Card,
} from 'antd';

// Ant Design Icons
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  TrophyOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  BookOutlined,
  LaptopOutlined,
  ProjectOutlined,
  TrophyFilled,
  MenuOutlined,
  StarOutlined,
} from '@ant-design/icons';

// Destructure Ant Design Layout and Typography
const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileDrawerVisible(false);
  };

  // Show back-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { key: 'about', icon: <UserOutlined />, label: 'About' },
    { key: 'education', icon: <BookOutlined />, label: 'Education' },
    { key: 'projects', icon: <LaptopOutlined />, label: 'Projects' },
    { key: 'portfolio', icon: <ProjectOutlined />, label: 'Portfolio' },
    { key: 'achievements', icon: <TrophyFilled />, label: 'Achievements' },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Mobile Header */}
      <Header
        className="fixed w-full z-50 flex items-center justify-between px-4 sm:px-6 md:hidden"
        style={{ background: '#222831', height: '56px' }}
      >
        <div className="flex items-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-[#00ADB5] mr-2"
          />
          <Text className="text-white text-sm font-semibold"></Text>
        </div>
        <Button
          type="text"
          icon={<MenuOutlined className="text-white text-lg" />}
          onClick={() => setMobileDrawerVisible(true)}
          className="md:hidden"
        />
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileDrawerVisible(false)}
        open={mobileDrawerVisible}
        bodyStyle={{ background: '#222831', padding: 0 }}
        headerStyle={{ background: '#222831', border: 'none', color: '#EEEEEE' }}
        className="md:hidden"
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          style={{ background: '#222831', border: 'none' }}
          className="sidebar-menu"
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              style={{
                color: activeSection === item.key ? '#00ADB5' : '#EEEEEE',
                borderLeft:
                  activeSection === item.key ? '3px solid #00ADB5' : '3px solid transparent',
                backgroundColor:
                  activeSection === item.key ? 'rgba(0, 173, 181, 0.1)' : 'transparent',
                borderRadius: '0 25px 25px 0',
                margin: '4px 0',
                fontWeight: activeSection === item.key ? '600' : '400',
                padding: '0.75rem 1rem',
              }}
              className="sidebar-menu-item !rounded-button whitespace-nowrap cursor-pointer"
            >
              <span
                className={`inline-flex items-center gap-2 text-sm sm:text-base ${
                  activeSection === item.key ? 'text-[#00ADB5]' : ''
                }`}
              >
                {item.icon} {item.label}
              </span>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>

      {/* Desktop Sidebar */}
      <Sider
        width={280}
        className="hidden md:block"
        style={{
          position: 'fixed',
          height: '100vh',
          background: '#222831',
          overflow: 'auto',
        }}
      >
        <div className="flex flex-col justify-between p-6 h-full">
          <div>
            <div className="relative mb-6 mt-4 flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg hover:shadow-2xl hover:border-[#00D4DD] transition-all duration-300">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="text-center mb-6">
              <Title
                level={3}
                className="text-lg md:text-xl font-bold mb-1 hover:text-[#00ADB5] transition-colors duration-300 cursor-default relative name-highlight"
                style={{
                  background: 'linear-gradient(135deg, #EEEEEE 0%, #00ADB5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.4',
                }}
              >
                Mark Anthony Aguirre
              </Title>
              <Text className="text-sm md:text-base text-gray-300 italic hover:text-[#00ADB5] transition-colors duration-300">
                Front-end Web Builder
              </Text>
            </div>
            <Menu
              mode="vertical"
              selectedKeys={[activeSection]}
              style={{ background: '#222831', border: 'none', width: '100%' }}
              className="sidebar-menu"
            >
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  style={{
                    color: activeSection === item.key ? '#00ADB5' : '#EEEEEE',
                    borderLeft:
                      activeSection === item.key ? '3px solid #00ADB5' : '3px solid transparent',
                    backgroundColor:
                      activeSection === item.key ? 'rgba(0, 173, 181, 0.1)' : 'transparent',
                    borderRadius: '0 25px 25px 0',
                    margin: '4px 0',
                    fontWeight: activeSection === item.key ? '600' : '400',
                    padding: '0.75rem 1rem',
                  }}
                  className="sidebar-menu-item !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span
                    className={`inline-flex items-center gap-2 text-sm md:text-base ${
                      activeSection === item.key ? 'text-[#00ADB5]' : ''
                    }`}
                  >
                    {item.icon} {item.label}
                  </span>
                </Menu.Item>
              ))}
            </Menu>
          </div>
          <div className="text-center text-primary mt-6">
            <Text className="text-xs text-gray-400">
              © 2025 Mark Anthony Aguirre. All rights reserved.
            </Text>
          </div>
        </div>
      </Sider>

      {/* Main Content */}
      <Layout
        className="md:ml-[280px] ml-0"
        style={{
          marginTop: '56px',
          background: '#EEEEEE',
          minHeight: 'calc(100vh - 56px)',
        }}
      >
        <Content className="p-4 sm:p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            {/* Mobile Profile */}
            <div className="md:hidden mb-8 pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Title
                    level={3}
                    className="text-lg sm:text-xl font-bold text-[#222831] mb-1"
                  >
                    Mark Anthony Aguirre
                  </Title>
                  <Text className="text-sm sm:text-base text-[#393E46] italic">
                    Front-end Web Builder
                  </Text>
                </div>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block mb-8 pt-6">
              <Title
                level={1}
                className="text-2xl md:text-3xl font-bold text-[#222831] mb-1"
              >
                Mark Anthony Aguirre
              </Title>
              <Text className="text-base md:text-lg text-[#393E46] italic">
                Front-end Web Builder
              </Text>
            </div>

            {/* About Me */}
            <div className="mb-10" id="about">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-4 flex items-center"
              >
                <UserOutlined className="mr-2 text-primary" /> About Me
              </Title>
              <Card
                className="bg-gradient-to-r from-[#EEEEEE] to-[#D4E6F1] rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl"
                style={{ border: '2px solid #00ADB5' }}
              >
                <Paragraph className="text-[#393E46] text-sm sm:text-base leading-relaxed">
                  BSIT graduate and aspiring front-end developer with project-based experience in building web applications. Passionate about building practical solutions that improve user experience and eager to contribute to meaningful projects and continue learning in a collaborative environment.
                </Paragraph>
              </Card>
            </div>

            {/* Contact */}
            <div className="mb-10" id="contact">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-4 flex items-center"
              >
                <MailOutlined className="mr-2 text-primary" /> Get in Touch
              </Title>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <Card
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
                  hoverable
                >
                  <div className="flex items-center mb-3">
                    <PhoneOutlined className="mr-2 text-primary text-lg" />
                    <Text className="text-dark2 font-medium text-sm sm:text-base">
                      0993-425-3793
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="tel:0993-425-3793"
                    className="bg-primary border-none transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
                    style={{ color: '#fff' }}
                    icon={<PhoneOutlined />}
                  >
                    Call Me
                  </Button>
                </Card>
                {/* Email */}
                <Card
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
                  hoverable
                >
                  <div className="flex items-center mb-3">
                    <MailOutlined className="mr-2 text-primary text-lg" />
                    <Text className="text-dark2 font-medium text-sm sm:text-base break-all">
                      markanthonyaguirre1234@gmail.com
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="mailto:markanthonyaguirre1234@gmail.com"
                    className="bg-primary border-none transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
                    style={{ color: '#fff' }}
                    icon={<MailOutlined />}
                  >
                    Email Me
                  </Button>
                </Card>
                {/* Location */}
                <Card
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
                  hoverable
                >
                  <div className="flex items-center mb-3">
                    <EnvironmentOutlined className="mr-2 text-primary text-lg" />
                    <Text className="text-dark2 font-medium text-sm sm:text-base">
                      Borseth, Alangalang, Leyte
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="https://maps.google.com/?q=Borseth,Alangalang,Leyte"
                    target="_blank"
                    className="bg-primary border-none transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
                    style={{ color: '#fff' }}
                    icon={<EnvironmentOutlined />}
                  >
                    View on Map
                  </Button>
                </Card>
                {/* GitHub */}
                <Card
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
                  hoverable
                >
                  <div className="flex items-center mb-3">
                    <GithubOutlined className="mr-2 text-primary text-lg" />
                    <Text className="text-dark2 font-medium text-sm sm:text-base">
                      github.com/Maarrrkkkkk
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="https://github.com/Maarrrkkkkk"
                    target="_blank"
                    className="bg-primary border-none transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
                    style={{ color: '#fff' }}
                    icon={<GithubOutlined />}
                  >
                    Visit GitHub
                  </Button>
                </Card>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10" id="skills">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-4 flex items-center"
              >
                <LaptopOutlined className="mr-2 text-primary" /> My Skills
              </Title>
              <Card className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left */}
                  <div>
                    <div className="mb-4">
                      <Text className="text-[#222831] font-semibold text-sm sm:text-base">
                        Languages & Technologies
                      </Text>
                      <ul className="list-disc ml-5 mt-3 space-y-1 text-sm sm:text-base">
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            HTML
                          </Tag>
                        </li>
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            CSS
                          </Tag>
                        </li>
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            JavaScript
                          </Tag>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <Text className="text-[#222831] font-semibold text-sm sm:text-base">
                        Frameworks & Libraries
                      </Text>
                      <ul className="list-disc ml-5 mt-3 space-y-1 text-sm sm:text-base">
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            Bootstrap
                          </Tag>
                        </li>
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            Tailwind CSS
                          </Tag>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Text className="text-[#222831] font-semibold text-sm sm:text-base">
                        Front-End Development
                      </Text>
                      <ul className="list-disc ml-5 mt-3 space-y-1 text-sm sm:text-base">
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            Responsive Design
                          </Tag>
                        </li>
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            UI Implementation
                          </Tag>
                        </li>
                        <li>
                          <Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm">
                            Cross-browser Compatibility
                          </Tag>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <div className="mb-4">
                      <Text className="text-[#222831] font-semibold text-sm sm:text-base">
                        Tools
                      </Text>
                      <ul className="list-disc ml-5 mt-3 space-y-1 text-sm sm:text-base">
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            Git
                          </Tag>
                        </li>
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            GitHub
                          </Tag>
                        </li>
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            VS Code
                          </Tag>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Text className="text-[#222831] font-semibold text-sm sm:text-base">
                        Soft Skills
                      </Text>
                      <ul className="list-disc ml-5 mt-3 space-y-1 text-sm sm:text-base">
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            Can work under pressure
                          </Tag>
                        </li>
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            Team Player
                          </Tag>
                        </li>
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            Adaptable
                          </Tag>
                        </li>
                        <li>
                          <Tag
                            className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-xs sm:text-sm"
                          >
                            Good Communication
                          </Tag>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Education */}
            <div className="mb-10" id="education">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-8 flex items-center"
              >
                <BookOutlined className="mr-2 text-primary" /> EDUCATION
              </Title>
              <Timeline
                className="ml-2 sm:ml-4"
                items={[
                  {
                    dot: <div className="bg-[#00ADB5] w-2 h-2 rounded-full"></div>,
                    children: (
                      <div className="mb-6">
                        <Title
                          level={4}
                          className="text-base sm:text-lg font-bold text-[#222831] mb-1"
                        >
                          Eastern Visayas State University
                        </Title>
                        <Text className="text-[#393E46] block mb-2 text-xs sm:text-sm">
                          (2021-2025)
                        </Text>
                        <Text className="text-[#222831] font-medium block mb-2 text-sm sm:text-base">
                          Bachelor of Science Information Technology
                        </Text>
                        <ul className="list-disc ml-5 text-[#393E46] text-xs sm:text-sm">
                          <li>Academic Achiever</li>
                          <li>Best in Thesis/Capstone Project</li>
                          <li>Outstanding On-The-Job Training (Intern)</li>
                          <li>Dean's Lister</li>
                        </ul>
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            {/* Projects */}
            <div className="mb-10" id="projects">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-8 flex items-center"
              >
                <LaptopOutlined className="mr-2 text-primary" /> ACADEMIC PROJECTS & EXPERIENCE
              </Title>
              <Timeline
                className="ml-2 sm:ml-4"
                items={[
                  {
                    dot: <div className="bg-[#00ADB5] w-2 h-2 rounded-full"></div>,
                    children: (
                      <div className="mb-6">
                        <Title
                          level={4}
                          className="text-base sm:text-lg font-bold text-[#222831] mb-1"
                        >
                          Enhancing Undergraduate Capstone Projects and Research with Recommender System, Automated Grading, and Scheduling (2024-2025)
                        </Title>
                        <Text className="text-[#393E46] font-medium block mb-2 text-xs sm:text-sm">
                          Role: Front-End Developer
                        </Text>
                        <ul className="list-disc ml-5 text-[#393E46] text-xs sm:text-sm">
                          <li>
                            Built the front-end for core features such as automated grading, advisor recommendation, and scheduling
                          </li>
                          <li>Collaborated with a backend team using Django</li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    dot: <div className="bg-[#00ADB5] w-2 h-2 rounded-full"></div>,
                    children: (
                      <div>
                        <Title
                          level={4}
                          className="text-base sm:text-lg font-bold text-[#222831] mb-1"
                        >
                          Online Academic Archive and Yearbook System (OJT, 2025)
                        </Title>
                        <Text className="text-[#393E46] font-medium block mb-2 text-xs sm:text-sm">
                          Role: Front-End Developer
                        </Text>
                        <ul className="list-disc ml-5 text-[#393E46] text-xs sm:text-sm">
                          <li>
                            Built the front-end interface for uploading and managing theses, dissertations, and re-entry plans
                          </li>
                          <li>
                            Designed user-facing components for features like download tracking, citation counts, and audit logs
                          </li>
                          <li>
                            Collaborated with a Django-based back-end team to ensure smooth integration
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            {/* Portfolio Showcase */}
            <div className="mb-10" id="portfolio">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-4 flex items-center"
              >
                <ProjectOutlined className="mr-2 text-primary" /> Portfolio Showcase
              </Title>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary hover:border flex flex-col h-full">
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src="capstone-login.jpg"
                        alt="Academic Dashboard"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <Title
                        level={4}
                        className="text-base sm:text-lg font-bold text-[#222831] mb-1"
                      >
                          Enhancing Undergraduate Capstone Projects and Research with Recommender System, Automated Grading, and Scheduling
                      </Title>
                      <Text className="text-[#393E46] block mb-2 text-xs sm:text-sm">
                        Front-end Development
                      </Text>
                      <Text className="text-[#393E46] flex-1 text-xs sm:text-sm">
                        A responsive login-form for academic management with data visualization and user-friendly controls.
                      </Text>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary hover:border flex flex-col h-full">
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src="gs-project.jpg"
                        alt="Digital Yearbook"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <Title
                        level={4}
                        className="text-base sm:text-lg font-bold text-[#222831] mb-1"
                      >
                        Online Academic Archive and Yearbook System
                      </Title>
                      <Text className="text-[#393E46] block mb-2 text-xs sm:text-sm">
                        Front-end Development
                      </Text>
                      <Text className="text-[#393E46] flex-1 text-xs sm:text-sm">
                        An interactive digital yearbook system with modern interface and seamless navigation.
                      </Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Achievements */}
            <div id="achievements">
              <Title
                level={2}
                className="text-lg sm:text-xl font-bold text-[#222831] mb-4 flex items-center"
              >
                <TrophyOutlined className="mr-2 text-primary" /> Achievements
              </Title>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <Row gutter={[16, 16]}>
                  {[
                    {
                      icon: <SafetyCertificateOutlined style={{ fontSize: '2rem' }} />,
                      title: 'Academic Achiever',
                      description: 'Consistently recognized for academic excellence and high performance.',
                    },
                    {
                      icon: <TrophyOutlined style={{ fontSize: '2rem' }} />,
                      title: 'Best in Thesis/Capstone Project',
                      description: 'Awarded for outstanding innovation and execution in capstone project.',
                    },
                    {
                      icon: <UserOutlined style={{ fontSize: '2rem' }} />,
                      title: 'Outstanding On-The-Job Training (Intern)',
                      description: 'Recognized for exceptional performance and contribution during internship.',
                    },
                    {
                      icon: <StarOutlined style={{ fontSize: '2rem' }} />,
                      title: "Dean's Lister",
                      description: 'Maintained academic excellence throughout the degree program.',
                    },
                  ].map((achievement, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <Card
                        className="bg-[#EEEEEE] rounded-lg h-full flex flex-col items-center justify-between text-center p-4"
                        hoverable
                      >
                        <div className="flex items-center justify-center w-full">
                          <span
                            style={{ color: '#00ADB5' }}
                            className="w-12 h-12 flex items-center justify-center text-2xl mb-3"
                          >
                            {achievement.icon}
                          </span>
                        </div>
                        <Title
                          level={4}
                          className="text-base sm:text-lg font-bold text-[#222831] mb-2"
                        >
                          {achievement.title}
                        </Title>
                        <Text className="text-[#393E46] text-xs sm:text-sm">
                          {achievement.description}
                        </Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

            {/* Footer - Mobile */}
            <Divider
              className="my-8 md:hidden"
              style={{ borderColor: '#393E46' }}
            />
            <div className="text-center text-[#393E46] pb-6 md:hidden">
              <Text className="text-xs">
                © 2025 Mark Anthony Aguirre. All rights reserved.
              </Text>
            </div>
            {showTopBtn && (
              <button
                onClick={handleBackToTop}
                className="fixed bottom-6 right-6 z-50 bg-[#393E46] text-[#00ADB5] p-2.5 rounded-full shadow-lg hover:bg-[#00ADB5] hover:text-white transition-colors duration-200"
                aria-label="Back to Top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Portfolio;