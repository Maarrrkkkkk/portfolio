import 'antd/dist/reset.css';
import React, { useState, useEffect } from 'react';
import {
  Layout,
  Typography,
  Tag,
  Carousel,
  Divider,
  Menu,
  Drawer,
  Button,
  Card,
  Space,
  Avatar,
  FloatButton
} from 'antd';
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
  FacebookFilled,
  UpOutlined,
  CodeOutlined,
  ToolOutlined,
  TeamOutlined,
  CommentOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileDrawerVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'education', 'projects', 'portfolio', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'about', icon: <UserOutlined />, label: 'About' },
    { key: 'skills', icon: <CodeOutlined />, label: 'Skills' },
    { key: 'education', icon: <BookOutlined />, label: 'Education' },
    { key: 'projects', icon: <LaptopOutlined />, label: 'Projects' },
    { key: 'portfolio', icon: <ProjectOutlined />, label: 'Portfolio' },
    { key: 'achievements', icon: <TrophyFilled />, label: 'Achievements' },
    { key: 'contact', icon: <MailOutlined />, label: 'Contact' },
  ];

  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['Bootstrap', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'VS Code'],
    softSkills: [
      'Works Under Pressure',
      'Team Collaboration',
      'Time Management',
      'Communication'
    ]
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
     {/* Mobile Header */}
        <Header
          className={`fixed w-full z-50 flex items-center justify-between px-4 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg bg-[#222831]' : 'py-4 bg-transparent'} sm:px-6 md:hidden`}
          style={{ height: isScrolled ? '50px' : '70px' }}
        >
          {/* Hamburger menu on the left */}
          <Button
            type="text"
            icon={<MenuOutlined className="text-white text-lg" />}
            onClick={() => setMobileDrawerVisible(true)}
            className="md:hidden"
          />

          {/* Spacer to push profile to the right */}
          <div className="flex-1"></div>

          {/* Profile on the right */}
          <div className="flex items-center">
            {isScrolled ? (
              <>
                <Avatar src="/profile.jpg" size={40} className="border-2 border-[#00ADB5]" />
              </>
            ) : null}
          </div>
        </Header>
      {/* Mobile Drawer */}
        <Drawer
        title={null}
        placement="left"
        width={260}
        onClose={() => setMobileDrawerVisible(false)}
        open={mobileDrawerVisible}
        closable={false}
        bodyStyle={{
          background: 'linear-gradient(180deg, #222831 0%, #1a1e25 100%)',
          padding: 0,
        }}
        headerStyle={{
          background: 'linear-gradient(180deg, #222831 0%, #1a1e25 100%)',
          border: 'none',
          padding: 0,
        }}
        className="md:hidden"
      >
        <div className="flex flex-col justify-between h-full">
          {/* Profile Section */}
          <div>
            <div className="flex justify-center mt-6 mb-7">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#00ADB5] shadow-xl transition-all duration-500 group-hover:border-[#00D4DD] group-hover:shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_24px_6px_#00ADB5] transition-all duration-500"></div>
              </div>
            </div>
            <div className="text-center mb-7">
              <Title
                level={4}
                className="font-bold mb-1 relative name-highlight"
                style={{
                  color: '#EEEEEE',
                  letterSpacing: '0.5px',
                  lineHeight: '1.3',
                  marginBottom: 0,
                }}
              >
                Mark Anthony Aguirre
              </Title>
              <Text className="text-base text-[#00ADB5] font-medium block mb-1 tracking-wide">
                Front-end Web Builder
              </Text>
            </div>
            {/* Menu */}
            <Menu
              mode="vertical"
              selectedKeys={[activeSection]}
              style={{
                background: 'transparent',
                border: 'none',
                width: '100%',
              }}
              className="sidebar-menu"
            >
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`sidebar-menu-item !rounded-button whitespace-nowrap cursor-pointer transition-all duration-200 ${
                    activeSection === item.key ? 'active-menu-item' : ''
                  }`}
                  style={{
                    margin: '6px 0',
                    fontWeight: activeSection === item.key ? 600 : 400,
                    color: activeSection === item.key ? '#00ADB5' : '#EEEEEE',
                    background: activeSection === item.key ? 'rgba(0,173,181,0.10)' : 'transparent',
                    borderLeft: activeSection === item.key ? '3px solid #00ADB5' : '3px solid transparent',
                    borderRadius: '0 25px 25px 0',
                    padding: '0.85rem 1.2rem',
                    fontSize: '1rem',
                  }}
                >
                  <span className="inline-flex items-center gap-3">
                    {React.cloneElement(item.icon, {
                      className: activeSection === item.key ? 'text-[#00ADB5]' : 'text-gray-300',
                      style: { fontSize: '1.2em', transition: 'color 0.2s' },
                    })}
                    {item.label}
                  </span>
                </Menu.Item>
              ))}
            </Menu>
          </div>
          {/* Footer */}
          <div className="text-center mt-8 mb-4">
            <Divider style={{ borderColor: '#393e46', margin: '18px 0' }} />
            <Text className="text-xs text-gray-500 tracking-wide">
              © {new Date().getFullYear()} Mark Anthony Aguirre<br />
              <span className="text-[#00ADB5]">All rights reserved.</span>
            </Text>
          </div>
        </div>
      </Drawer>
      {/* Desktop Sidebar */}
      <Sider
        width={300}
        className="hidden md:block fixed h-screen overflow-auto"
        style={{
          background: 'linear-gradient(180deg, #222831 0%, #1a1e25 100%)',
          boxShadow: '5px 0 15px rgba(0, 0, 0, 0.10)',
          borderRight: '1.5px solid #222831',
          zIndex: 20,
        }}
      >
        <div className="flex flex-col justify-between p-7 h-full">
          <div>
            {/* Profile Image with Glow and Hover */}
            <div className="flex justify-center mt-6 mb-7">
              <div className="relative group">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#00ADB5] shadow-xl transition-all duration-500 group-hover:border-[#00D4DD] group-hover:shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_24px_6px_#00ADB5] transition-all duration-500"></div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="text-center mb-7">
              <Title
                level={3}
                className="text-2xl font-bold mb-1 relative name-highlight"
                style={{
                  color: '#EEEEEE',
                  letterSpacing: '0.5px',
                  lineHeight: '1.3',
                  marginBottom: 0,
                }}
              >
                Mark Anthony Aguirre
              </Title>
              <Text className="text-base text-[#00ADB5] font-medium block mb-1 tracking-wide">
                Front-end Web Builder
              </Text>
            </div>

            {/* Menu */}
            <Menu
              mode="vertical"
              selectedKeys={[activeSection]}
              style={{ background: 'transparent', border: 'none', width: '100%' }}
              className="sidebar-menu"
            >
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`sidebar-menu-item !rounded-button whitespace-nowrap cursor-pointer transition-all duration-200 ${
                    activeSection === item.key ? 'active-menu-item' : ''
                  }`}
                  style={{
                    margin: '6px 0',
                    fontWeight: activeSection === item.key ? 600 : 400,
                    color: activeSection === item.key ? '#00ADB5' : '#EEEEEE',
                    background: activeSection === item.key ? 'rgba(0,173,181,0.10)' : 'transparent',
                    borderLeft: activeSection === item.key ? '3px solid #00ADB5' : '3px solid transparent',
                    borderRadius: '0 25px 25px 0',
                    padding: '0.85rem 1.2rem',
                    fontSize: '1rem',
                  }}
                >
                  <span className="inline-flex items-center gap-3">
                    {React.cloneElement(item.icon, {
                      className: activeSection === item.key ? 'text-[#00ADB5]' : 'text-gray-300',
                      style: { fontSize: '1.2em', transition: 'color 0.2s' },
                    })}
                    {item.label}
                  </span>
                </Menu.Item>
              ))}
            </Menu>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <Divider style={{ borderColor: '#393e46', margin: '18px 0' }} />
            <Text className="text-xs text-gray-500 tracking-wide">
              © {new Date().getFullYear()} Mark Anthony Aguirre<br />
              <span className="text-[#00ADB5]">All rights reserved.</span>
            </Text>
          </div>
        </div>
      </Sider>

      {/* Main Content */}
      <Layout className="md:ml-[300px] ml-0" style={{ minHeight: '100vh' }}>
        <Content className="p-4 sm:p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            {/* Mobile Profile */}
            <div className="md:hidden mb-8 pt-16">
              <div className="flex flex-col items-center">
                <div className="relative group mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ADB5] shadow-lg transition-all duration-500 group-hover:border-[#00D4DD] group-hover:shadow-xl">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Title level={3} className="text-xl sm:text-2xl font-bold text-[#222831] mb-1">
                    Mark Anthony Aguirre
                  </Title>
                  <Text className="text-sm sm:text-base text-[#393E46]">
                    Front-end Web Builder
                  </Text>
                </div>
              </div>
            </div>

            {/* About Me */}
            <section id="about" className="mb-16 scroll-mt-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center mr-3">
                  <UserOutlined className="text-white" />
                </div>
                <Title level={2} className="text-xl sm:text-2xl font-bold text-[#222831] mb-0">
                  About Me
                </Title>
              </div>
              <Card
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-l-4 border-[#00ADB5]"
              >
                <Paragraph className="text-[#393E46] text-base leading-relaxed mb-4">
                 BSIT graduate and aspiring front-end developer with project-based experience in building web applications. Passionate about building practical solutions that improve user experience and eager to contribute to meaningful projects and continue learning in a collaborative environment.
                </Paragraph>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {[
                    { icon: <CodeOutlined />, label: '2+ Projects' },
                    { icon: <TrophyOutlined />, label: '4 Awards' },
                    { icon: <ToolOutlined />, label: '10+ Tools' },
                    { icon: <BookOutlined />, label: 'BSIT Degree' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center hover:bg-[#00ADB5] hover:text-white transition-colors">
                      <div className="text-xl mb-1">{item.icon}</div>
                      <Text className="text-sm font-medium">{item.label}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Skills */}
            <section id="skills" className="mb-16 scroll-mt-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center mr-3">
                  <CodeOutlined className="text-white" />
                </div>
                <Title level={2} className="text-xl sm:text-2xl font-bold text-[#222831] mb-0">
                  Skills & Expertise
                </Title>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <Card
                  title={
                    <div className="flex items-center">
                      <LaptopOutlined className="mr-2 text-[#00ADB5]" />
                      <span>Technical Skills</span>
                    </div>
                  }
                  className="rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div>
                      <Text strong className="block mb-2">Languages</Text>
                      <Space size={[8, 8]} wrap>
                        {skills.languages.map((lang) => (
                          <Tag key={lang} className="bg-[#00adb520] text-[#00ADB5] border-none rounded-full px-3 py-1">
                            {lang}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                    <div>
                      <Text strong className="block mb-2">Frameworks & Libraries</Text>
                      <Space size={[8, 8]} wrap>
                        {skills.frameworks.map((framework) => (
                          <Tag key={framework} className="bg-[#00adb520] text-[#00ADB5] border-none rounded-full px-3 py-1">
                            {framework}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                  </div>
                </Card>
                {/* Soft Skills */}
                <Card
                  title={
                    <div className="flex items-center">
                      <TeamOutlined className="mr-2 text-[#00ADB5]" />
                      <span>Professional Skills</span>
                    </div>
                  }
                  className="rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <Text strong className="block mb-2">Tools</Text>
                    <Space size={[8, 8]} wrap>
                      {skills.tools.map((tool) => (
                        <Tag key={tool} className="bg-[#00adb520] text-[#00ADB5] border-none rounded-full px-3 py-1">
                          {tool}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Text strong className="block mb-2">Soft Skills</Text>
                      <Space size={[8, 8]} wrap>
                        {skills.softSkills.map((skill) => (
                          <Tag key={skill} className="bg-[#00adb520] text-[#00ADB5] border-none rounded-full px-3 py-1">
                            {skill}
                          </Tag>
                        ))}
                      </Space>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

           {/* Education */}
            <section id="education" className="mb-16 scroll-mt-16">
              <div className="flex items-center mb-7">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00ADB5] to-[#009ca7] rounded-full flex items-center justify-center mr-4 shadow-md">
                  <BookOutlined className="text-white text-lg" />
                </div>
                <Title
                  level={2}
                  className="text-2xl sm:text-3xl font-bold text-[#222831] mb-0 tracking-tight"
                >
                  Education
                </Title>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm">
                <Title level={4} className="text-lg font-bold mb-1 text-[#222831]">
                  Eastern Visayas State University
                </Title>
                <Text className="text-[#00ADB5] block mb-2 text-sm font-semibold">
                  2021 – 2025
                </Text>
                <Text className="font-medium block mb-2 text-[#393E46]">
                  Bachelor of Science in Information Technology
                </Text>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Academic Achiever</li>
                  <li>Best in Thesis/Capstone Project award</li>
                  <li>Outstanding On-The-Job Training recognition</li>
                  <li>Dean's Lister</li>
                </ul>
              </div>
            </section>

           {/* Projects */}
            <section id="projects" className="mb-16 scroll-mt-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center mr-3 shadow-md">
                  <LaptopOutlined className="text-white" />
                </div>
                <Title level={2} className="text-xl sm:text-2xl font-bold text-[#222831] mb-0">
                  Projects & Experience
                </Title>
              </div>
              <div className="space-y-8">
                {/* Project 1 */}
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all border-l-4 border-[#00ADB5] bg-gradient-to-br from-[#f8fafc] to-[#e0f7fa]">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrophyOutlined className="text-[#00ADB5] text-lg" />
                      <Title level={4} className="text-lg font-bold mb-0 text-[#222831]">
                        Enhancing Undergraduate Capstone Projects and Research With Recommender System, Automated Grading and Scheduling
                      </Title>
                    </div>
                    <Text className="text-[#00ADB5] font-semibold text-xs sm:text-sm mb-1">
                      October 2024 - January 2025 &nbsp;|&nbsp; Front-end Developer
                    </Text>
                    <Text className="text-gray-700 mb-2 text-sm">
                      A smart academic management platform with automated grading, advisor recommendations, and scheduling to streamline the capstone process.
                    </Text>
                    <ul className="list-disc pl-5 text-gray-700 text-sm mb-2 space-y-1">
                      <li>Built the front-end for core features such as automated grading, advisor recommendation, and scheduling</li>
                      <li>Collaborated with a backend team using Django</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-1">
                      <Tag color="#00ADB5">HTML/CSS</Tag>
                      <Tag color="#00ADB5">JavaScript</Tag>
                      <Tag color="#00ADB5">Bootstrap</Tag>
                      <Tag color="#00ADB5">Django</Tag>
                    </div>
                  </div>
                </Card>
                {/* Project 2 */}
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all border-l-4 border-[#00ADB5] bg-gradient-to-br from-[#f8fafc] to-[#e0f7fa]">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOutlined className="text-[#00ADB5] text-lg" />
                      <Title level={4} className="text-lg font-bold mb-0 text-[#222831]">
                        Online Academic Archive and YearBook System
                      </Title>
                    </div>
                    <Text className="text-[#00ADB5] font-semibold text-xs sm:text-sm mb-1">
                      March 2025 - June 2025 &nbsp;|&nbsp; Front-end Developer (Internship)
                    </Text>
                    <Text className="text-gray-700 mb-2 text-sm">
                      A digital repository for theses, dissertations, and research papers with advanced features for tracking downloads and citations.
                    </Text>
                    <ul className="list-disc pl-5 text-gray-700 text-sm mb-2 space-y-1">
                      <li>Built the front-end interface for uploading and managing theses, dissertations, and re-entry plans</li>
                      <li>Designed user-facing components for features like download tracking, citation counts, and audit logs</li>
                      <li>Collaborated with a Django-based back-end team to ensure smooth integration</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-1">
                      <Tag color="#00ADB5">HTML/CSS</Tag>
                      <Tag color="#00ADB5">JavaScript</Tag>
                      <Tag color="#00ADB5">Django Templates</Tag>
                      <Tag color="#00ADB5">Bootstrap</Tag>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
           {/* Portfolio Showcase */}
            <section id="portfolio" className="mb-16 scroll-mt-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center mr-3">
                  <ProjectOutlined className="text-white" />
                </div>
                <Title level={2} className="text-xl sm:text-2xl font-bold text-[#222831] mb-0">
                  Portfolio Showcase
                </Title>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Capstone Project Dashboard",
                    description:
                      "A smart academic platform recognized among the top capstone projects, featuring automated grading, advisor recommendation, and scheduling to streamline faculty-student collaboration.",
                    images: ["/capstone-login.jpg", "/capstone-project.jpg", "/capstone-project2.jpg"],
                    tags: ["Bootstrap", "Django", "JavaScript"],
                    link: "#",
                  },
                  {
                    title: "Academic Archive System",
                    description:
                      "A digital repository developed for EVSU Graduate School, allowing students to upload theses, dissertations, and re-entry papers with features like citation tracking, download monitoring, and audit logging.",
                    images: ["/gs-project-login.jpg", "/gs-project.jpg", "/gs-project2.jpg", "/gs-project3.jpg", "/gs-project4.jpg"],
                    tags: ["Bootstrap", "Django", "JavaScript"],
                    link: "#",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    hoverable
                    className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group h-full"
                    cover={
                      <div className="h-48 overflow-hidden relative">
                        <Carousel autoplay effect="fade" dots={{ className: "carousel-dots" }}>
                          {project.images.map((image, imgIndex) => (
                            <div key={imgIndex}>
                              <img
                                alt={`${project.title} ${imgIndex + 1}`}
                                src={image}
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          ))}
                        </Carousel>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      </div>
                    }
                  >
                    <div className="flex flex-col justify-between h-[240px] p-4">
                      <div>
                        <Title level={4} className="text-lg font-bold mb-2">
                          {project.title}
                        </Title>
                        <Text className="text-gray-600 mb-3 block">
                          {project.description}
                        </Text>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag, i) => (
                            <Tag
                              key={i}
                              className="bg-[#00adb520] text-[#00ADB5] border-none rounded-full px-2"
                            >
                              {tag}
                            </Tag>
                          ))}
                        </div>
                        <Button
                          type="primary"
                          className="bg-[#00ADB5] border-none hover:bg-[#00D4DD] w-full"
                          href={project.link}
                          target="_blank"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>


           {/* Achievements */}
            <section id="achievements" className="mb-10 scroll-mt-16">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00ADB5] to-[#009ca7] rounded-full flex items-center justify-center mr-4 shadow-md">
                  <TrophyOutlined className="text-white text-lg" />
                </div>
                <Title level={2} className="text-2xl sm:text-3xl font-bold text-[#222831] mb-0 tracking-tight">
                  Achievements
                </Title>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <SafetyCertificateOutlined className="text-white text-lg" />,
                    title: "Academic Achiever",
                    description: "Consistently recognized for academic excellence and high performance.",
                    certificate: "/academic-achiever.jpg"
                  },
                  {
                    icon: <TrophyOutlined className="text-white text-lg" />,
                    title: "Best in Thesis/Capstone Project",
                    description: "Our capstone project, recognized as one of the best in our batch, aimed to improve research output and faculty-student coordination through intelligent features and smart scheduling.",
                    certificate: "/best-capstone.jpg"
                  },
                  {
                    icon: <UserOutlined className="text-white text-lg" />,
                    title: "Outstanding On-The-Job Training (Intern)",
                    description: "Developed for Eastern Visayas State University – Graduate School, this platform functions like a university-specific Google Scholar, allowing graduate students to upload theses, dissertations, and re-entry papers with citation, download tracking, and audit logs.",
                    certificate: "/ojt.jpg"
                  },
                  {
                    icon: <StarOutlined className="text-white text-lg" />,
                    title: "Dean's Lister",
                    description: "Maintained academic excellence throughout the degree program.",
                    certificate: "/deans-lister.jpg"
                  }
                ].map((achievement, index) => (
                  <Card
                    key={index}
                    hoverable
                    className="rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                    bodyStyle={{ display: "flex", flexDirection: "column", height: "100%" }}
                  >
                    <div className="flex items-start mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00ADB5] to-[#009ca7] rounded-full flex items-center justify-center mr-4 shadow-md">
                        {achievement.icon}
                      </div>
                      <div>
                        <Title level={4} className="text-lg font-bold mb-1 text-[#222831]">
                          {achievement.title}
                        </Title>
                      </div>
                    </div>
                    <Text className="text-gray-600 text-sm mb-2 flex-1">
                      {achievement.description}
                    </Text>
                    <div className="mt-auto">
                      <img
                        src={achievement.certificate}
                        alt={`${achievement.title} Certificate`}
                        className="rounded-lg shadow max-h-32 w-auto object-contain mx-auto"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-16 scroll-mt-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center mr-3">
                  <CommentOutlined className="text-white" />
                </div>
                <Title level={2} className="text-xl sm:text-2xl font-bold text-[#222831] mb-0">
                  Get In Touch
                </Title>
              </div>
              <Card className="rounded-xl shadow-sm p-4 sm:p-6 bg-gradient-to-r from-[#00adb510] to-[#00adb520]">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div>
                    <Title level={4} className="text-base sm:text-lg font-bold mb-4">
                      Contact Information
                    </Title>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MailOutlined className="text-[#00ADB5] text-lg sm:text-xl mr-3 mt-1" />
                        <div>
                          <Text strong className="block text-sm sm:text-base">
                            Email
                          </Text>
                          <Text className="text-gray-600 text-sm sm:text-base">
                            markanthonyaguirre1234@gmail.com
                          </Text>
                          <Button
                            type="text"
                            className="text-[#00ADB5] p-0 hover:text-[#00D4DD] text-xs sm:text-sm"
                            href="mailto:markanthonyaguirre1234@gmail.com"
                          >
                            Send Message
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <PhoneOutlined className="text-[#00ADB5] text-lg sm:text-xl mr-3 mt-1" />
                        <div>
                          <Text strong className="block text-sm sm:text-base">
                            Phone
                          </Text>
                          <Text className="text-gray-600 text-sm sm:text-base">
                            +63 993 425 3793
                          </Text>
                          <Button
                            type="text"
                            className="text-[#00ADB5] p-0 hover:text-[#00D4DD] text-xs sm:text-sm"
                            href="tel:+639934253793"
                          >
                            Call Now
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <EnvironmentOutlined className="text-[#00ADB5] text-lg sm:text-xl mr-3 mt-1" />
                        <div>
                          <Text strong className="block text-sm sm:text-base">
                            Location
                          </Text>
                          <Text className="text-gray-600 text-sm sm:text-base">
                            Borseth, Alangalang, Leyte, Philippines
                          </Text>
                          <Button
                            type="text"
                            className="text-[#00ADB5] p-0 hover:text-[#00D4DD] text-xs sm:text-sm"
                            href="https://maps.google.com/?q=Borseth,Alangalang,Leyte"
                            target="_blank"
                          >
                            View on Map
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Social & Availability */}
                  <div>
                    <Title level={4} className="text-base sm:text-lg font-bold mb-4">
                      Connect With Me
                    </Title>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Button
                        shape="circle"
                        icon={<GithubOutlined />}
                        href="https://github.com/Maarrrkkkkk"
                        target="_blank"
                        className="bg-white border border-gray-200 text-gray-700 hover:border-[#00ADB5] hover:text-[#00ADB5]"
                        aria-label="GitHub"
                      />
                      <Button
                        shape="circle"
                        icon={<FacebookFilled />}
                        href="https://www.facebook.com/share/1ASRfELTm3/"
                        target="_blank"
                        className="bg-white border border-gray-200 text-gray-700 hover:border-[#00ADB5] hover:text-[#00ADB5]"
                        aria-label="Facebook"
                      />
                      <Button
                        shape="circle"
                        icon={<MailOutlined />}
                        href="mailto:markanthonyaguirre1234@gmail.com"
                        className="bg-white border border-gray-200 text-gray-700 hover:border-[#00ADB5] hover:text-[#00ADB5]"
                        aria-label="Email"
                      />
                    </div>
                    <Title level={4} className="text-base sm:text-lg font-bold mb-4">
                      Availability
                    </Title>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <Text className="text-sm sm:text-base">Currently open to new opportunities</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
            {/* Footer */}
            <div className="text-center py-6 border-t border-gray-200">
              <Text className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Mark Anthony Aguirre. All rights reserved.
              </Text>
            </div>
          </div>
        </Content>
      </Layout>

      {/* Floating Action Button */}
      <FloatButton.BackTop
        icon={<UpOutlined />}
        visibilityHeight={300}
        type="primary"
        className="!bg-[#00ADB5] !border-none"
      />
    </Layout>
  );
};

export default Portfolio;