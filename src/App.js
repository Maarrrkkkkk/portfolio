// Organized and presentable import section
import 'antd/dist/reset.css';  // Add this at the top
import React, { useState, useEffect } from "react";

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
} from "antd";

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
} from "@ant-design/icons";

// Destructure Ant Design Layout and Typography
const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileDrawerVisible(false);
  };

  // Show back-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { key: "about", icon: <UserOutlined />, label: "About" },
    { key: "education", icon: <BookOutlined />, label: "Education" },
    { key: "projects", icon: <LaptopOutlined />, label: "Projects" },
    { key: "portfolio", icon: <ProjectOutlined />, label: "Portfolio" },
    { key: "achievements", icon: <TrophyFilled />, label: "Achievements" },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Mobile Header */}
      <Header
        className="fixed w-full z-50 flex items-center justify-between px-4 md:px-8 md:hidden"
        style={{ background: "#222831", height: "64px" }}
      >
        <div className="flex items-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#00ADB5] mr-2"
          />
        </div>
        <Button
          type="text"
          icon={<MenuOutlined className="text-white text-xl" />}
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
        bodyStyle={{ background: "#222831", padding: 0 }}
        headerStyle={{ background: "#222831", border: "none" }}
        className="md:hidden"
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          style={{ background: "#222831", border: "none" }}
          className="sidebar-menu"
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              style={{
                color: activeSection === item.key ? "#00ADB5" : "#EEEEEE",
                borderLeft:
                  activeSection === item.key ? "3px solid #00ADB5" : "3px solid transparent",
                backgroundColor:
                  activeSection === item.key ? "rgba(0, 173, 181, 0.1)" : "transparent",
                borderRadius: "0 25px 25px 0",
                margin: "4px 0",
                fontWeight: activeSection === item.key ? "600" : "400",
              }}
              className="sidebar-menu-item !rounded-button whitespace-nowrap cursor-pointer"
            >
              <span
                className={`inline-flex items-center gap-3 ${
                  activeSection === item.key ? "text-[#00ADB5]" : ""
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
          width={310}
          className="hidden md:block"
          style={{
            position: "fixed",
            height: "100vh",
            background: "#222831",
            overflow: "hidden",
          }}
        >
        <div className="flex flex-col justify-between p-8 h-full">
          <div>
            <div className="relative mb-6 mt-2 flex justify-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg hover:shadow-2xl hover:border-[#00D4DD] transition-all duration-300">
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
                className="text-lg md:text-xl lg:text-2xl font-bold mb-1 hover:text-[#00ADB5] transition-colors duration-300 cursor-default relative name-highlight"
                style={{
                  background: "linear-gradient(135deg, #EEEEEE 0%, #00ADB5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
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
              style={{ background: "#222831", border: "none", width: "100%" }}
              className="sidebar-menu"
            >
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  style={{
                    color: activeSection === item.key ? "#00ADB5" : "#EEEEEE",
                    borderLeft:
                      activeSection === item.key ? "3px solid #00ADB5" : "3px solid transparent",
                    backgroundColor:
                      activeSection === item.key ? "rgba(0, 173, 181, 0.1)" : "transparent",
                    borderRadius: "0 25px 25px 0",
                    margin: "4px 0",
                    fontWeight: activeSection === item.key ? "600" : "400",
                  }}
                  className="sidebar-menu-item !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span
                    className={`inline-flex items-center gap-3 ${
                      activeSection === item.key ? "text-[#00ADB5]" : ""
                    }`}
                  >
                    {item.icon} {item.label}
                  </span>
                </Menu.Item>
              ))}
            </Menu>
          </div>
          <div className="text-center text-primary mt-6">
            <Text className="text-xs md:text-sm text-gray-400">
              © 2025 Mark Anthony Aguirre. All rights reserved.
            </Text>
          </div>
        </div>
      </Sider>

      {/* Main Content */}
      <Layout
        className="md:ml-[310px] ml-0"
        style={{
          marginTop: "64px",
          background: "#EEEEEE",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Content className="p-6 md:p-12 min-h-screen">
          <div className="max-w-4xl mx-auto">
            {/* Mobile Profile */}
            <div className="md:hidden mb-10 pt-8">
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <Title
                    level={3}
                    className="text-xl sm:text-2xl font-bold text-[#222831] mb-1"
                  >
                    Mark Anthony Aguirre
                  </Title>
                  <Text className="text-base sm:text-lg text-[#393E46] italic">
                    Front-end Web Builder
                  </Text>
                </div>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block mb-10 pt-8">
              <Title
                level={1}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222831] mb-1"
              >
                Mark Anthony Aguirre
              </Title>
              <Text className="text-base md:text-lg lg:text-xl text-[#393E46] italic">
                Front-end Web Builder
              </Text>
            </div>

            {/* About Me */}
            <div className="mb-12" id="about">
              <Title
                level={2}
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <UserOutlined className="mr-3 text-primary" /> About Me
              </Title>
              <Card
                className="bg-gradient-to-r from-[#EEEEEE] to-[#D4E6F1] rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                style={{ border: "2px solid #00ADB5" }}
              >
                <Paragraph className="text-[#393E46] text-sm md:text-base leading-relaxed">
                  BSIT graduate and aspiring front-end developer with project-based experience in building web applications. Passionate about building practical solutions that improve user experience and eager to contribute to meaningful projects and continue learning in a collaborative environment.
                </Paragraph>
              </Card>
            </div>

            {/* Contact */}
            <div className="mb-12" id="contact">
              <Title
                level={2}
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <MailOutlined className="mr-3 text-primary" /> Get in Touch
              </Title>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <Card className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300" hoverable>
                  <div className="flex items-center mb-3">
                    <PhoneOutlined className="mr-3 text-primary text-lg md:text-xl" />
                    <Text className="text-dark2 font-medium text-sm md:text-base">
                      0993-425-3793
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="tel:0993-425-3793"
                    className="bg-primary border-none transition-colors duration-200 text-sm md:text-base"
                    style={{ color: "#fff" }}
                    icon={<PhoneOutlined />}
                  >
                    Call Me
                  </Button>
                </Card>
                {/* Email */}
                <Card className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300" hoverable>
                  <div className="flex items-center mb-3">
                    <MailOutlined className="mr-3 text-primary text-lg md:text-xl" />
                    <Text className="text-dark2 font-medium text-sm md:text-base">
                      markanthonyaguirre1234@gmail.com
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="mailto:markanthonyaguirre1234@gmail.com"
                    className="bg-primary border-none transition-colors duration-200 text-sm md:text-base"
                    style={{ color: "#fff" }}
                    icon={<MailOutlined />}
                  >
                    Email Me
                  </Button>
                </Card>
                {/* Location */}
                <Card className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300" hoverable>
                  <div className="flex items-center mb-3">
                    <EnvironmentOutlined className="mr-3 text-primary text-lg md:text-xl" />
                    <Text className="text-dark2 font-medium text-sm md:text-base">
                      Borseth, Alangalang, Leyte
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="https://maps.google.com/?q=Borseth,Alangalang,Leyte"
                    target="_blank"
                    className="bg-primary border-none transition-colors duration-200 text-sm md:text-base"
                    style={{ color: "#fff" }}
                    icon={<EnvironmentOutlined />}
                  >
                    View on Map
                  </Button>
                </Card>
                {/* GitHub */}
                <Card className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300" hoverable>
                  <div className="flex items-center mb-3">
                    <GithubOutlined className="mr-3 text-primary text-lg md:text-xl" />
                    <Text className="text-dark2 font-medium text-sm md:text-base">
                      github.com/Maarrrkkkkk
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    href="https://github.com/Maarrrkkkkk"
                    target="_blank"
                    className="bg-primary border-none transition-colors duration-200 text-sm md:text-base"
                    style={{ color: "#fff" }}
                    icon={<GithubOutlined />}
                  >
                    Visit GitHub
                  </Button>
                </Card>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12" id="skills">
              <Title
                level={2}
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <LaptopOutlined className="mr-3 text-primary" /> My Skills
              </Title>
              <Card className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left */}
                  <div>
                    <div className="mb-6">
                      <Text className="text-[#222831] font-semibold text-base md:text-lg">
                        Languages & Technologies
                      </Text>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">HTML</span></li>
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">CSS</span></li>
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">JavaScript</span></li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <Text className="text-[#222831] font-semibold text-base md:text-lg">
                        Frameworks & Libraries
                      </Text>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">Bootstrap</span></li>
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">Tailwind CSS</span></li>
                      </ul>
                    </div>
                    <div>
                      <Text className="text-[#222831] font-semibold text-base md:text-lg">
                        Front-End Development
                      </Text>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">Responsive Design</span></li>
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">UI Implementation</span></li>
                        <li><span className="font-semibold text-[#393E46] text-sm md:text-base">Cross-browser Compatibility</span></li>
                      </ul>
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <div className="mb-6">
                      <Text className="text-[#222831] font-semibold text-base md:text-lg">
                        Tools
                      </Text>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">Git</Tag></li>
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">GitHub</Tag></li>
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">VS Code</Tag></li>
                      </ul>
                    </div>
                    <div>
                      <Text className="text-[#222831] font-semibold text-base md:text-lg">
                        Soft Skills
                      </Text>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">Can work under pressure</Tag></li>
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">Team Player</Tag></li>
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">Adaptable</Tag></li>
                        <li><Tag className="bg-[#393E46] text-[#EEEEEE] border-none !rounded-button whitespace-nowrap hover:bg-[#00ADB5] transition-all duration-200 text-sm md:text-base">Good Communication</Tag></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Education */}
            <div className="mb-12" id="education">
              <Title
                level={2}
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <BookOutlined className="mr-3 text-primary" /> Education
              </Title>
              <Timeline
                className="ml-4"
                items={[
                  {
                    dot: <div className="bg-[#00ADB5] w-3 h-3 rounded-full"></div>,
                    children: (
                      <div className="mb-6">
                        <Title level={4} className="text-base md:text-lg font-bold text-[#222831] mb-1">
                          EASTERN VISAYAS STATE UNIVERSITY
                        </Title>
                        <Text className="text-[#393E46] block mb-2 text-sm md:text-base">
                          (2021-2025)
                        </Text>
                        <Text className="text-[#222831] font-medium block mb-2 text-sm md:text-base">
                          Bachelor of Science Information Technology
                        </Text>
                        <ul className="list-disc ml-5 text-[#393E46] text-sm md:text-base">
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
            <div className="mb-12" id="projects">
              <Title
                level={2}
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <LaptopOutlined className="mr-3 text-primary" /> Academic Projects & Experience
              </Title>
              <Timeline
                className="ml-4"
                items={[
                  {
                    dot: <div className="bg-[#00ADB5] w-3 h-3 rounded-full"></div>,
                    children: (
                      <div className="mb-8">
                        <Title level={4} className="text-base md:text-lg font-bold text-[#222831] mb-1">
                          Enhancing Undergraduate Capstone Projects and Research with Recommender System, Automated Grading, and Scheduling (2024-2025)
                        </Title>
                        <Text className="text-[#393E46] font-medium block mb-3 text-sm md:text-base">
                          Role: Front-End Developer
                        </Text>
                        <ul className="list-disc ml-5 text-[#393E46] text-sm md:text-base">
                          <li>Built the front-end for core features such as automated grading, advisor recommendation, and scheduling</li>
                          <li>Collaborated with a backend team using Django</li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    dot: <div className="bg-[#00ADB5] w-3 h-3 rounded-full"></div>,
                    children: (
                      <div>
                        <Title level={4} className="text-base md:text-lg font-bold text-[#222831] mb-1">
                          Online Academic Archive and Yearbook System (OJT, 2025)
                        </Title>
                        <Text className="text-[#393E46] font-medium block mb-3 text-sm md:text-base">
                          Role: Front-End Developer
                        </Text>
                        <ul className="list-disc ml-5 text-[#393E46] text-sm md:text-base">
                          <li>Built the front-end interface for uploading and managing theses, dissertations, and re-entry plans</li>
                          <li>Designed user-facing components for features like download tracking, citation counts, and audit logs</li>
                          <li>Collaborated with a Django-based back-end team to ensure smooth integration</li>
                        </ul>
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            {/* Portfolio Showcase */}
            <div className="mb-12" id="portfolio">
              <Title
                level={2}
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <ProjectOutlined className="mr-3 text-primary" /> Portfolio Showcase
              </Title>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary hover:border flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="capstone-login.jpg"
                        alt="Academic Dashboard"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <Title level={4} className="text-base md:text-lg font-bold text-[#222831] mb-1">
                        Enhancing Undergraduate Capstone Projects and Research with Recommender System, Automated Grading, and Scheduling
                      </Title>
                      <Text className="text-[#393E46] block mb-2 text-sm md:text-base">
                        Front-end Development
                      </Text>
                      <Text className="text-[#393E46] flex-1 text-sm md:text-base">
                        A responsive login-form for academic management with data visualization and user-friendly controls.
                      </Text>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary hover:border flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="gs-project.jpg"
                        alt="Digital Yearbook"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <Title level={4} className="text-base md:text-lg font-bold text-[#222831] mb-1">
                        Online Academic Archive and YearBook System
                      </Title>
                      <Text className="text-[#393E46] block mb-2 text-sm md:text-base">
                        UI/UX Design & Development
                      </Text>
                      <Text className="text-[#393E46] flex-1 text-sm md:text-base">
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
                className="text-lg md:text-xl lg:text-2xl font-bold text-[#222831] mb-6 flex items-center"
              >
                <TrophyOutlined className="mr-3 text-primary" /> Achievements
              </Title>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Row gutter={[24, 24]}>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <Card className="bg-[#EEEEEE] rounded-lg h-full flex flex-col items-center justify-between text-center p-4">
                      <div className="flex items-center justify-center w-full">
                        <span style={{ color: "#00ADB5" }} className="w-14 h-14 flex items-center justify-center text-4xl mb-4">
                          <SafetyCertificateOutlined style={{ fontSize: "2.5rem" }} />
                        </span>
                      </div>
                      <Title level={4} className="text-base md:text-lg font-bold text-[#EEEEEE] mb-2">
                        Academic Achiever
                      </Title>
                      <Text className="text-black-300 text-sm md:text-base">
                        Consistently recognized for academic excellence and high performance.
                      </Text>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <Card className="bg-[#EEEEEE] rounded-lg h-full flex flex-col items-center justify-between text-center p-4">
                      <div className="flex items-center justify-center w-full">
                        <span style={{ color: "#00ADB5" }} className="w-14 h-14 flex items-center justify-center text-4xl mb-4">
                          <TrophyOutlined style={{ fontSize: "2.5rem" }} />
                        </span>
                      </div>
                      <Title level={4} className="text-base md:text-lg font-bold text-[#EEEEEE] mb-2">
                        Best in Thesis/Capstone Project
                      </Title>
                      <Text className="text-black-300 text-sm md:text-base">
                        Awarded for outstanding innovation and execution in capstone project.
                      </Text>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <Card className="bg-[#EEEEEE] rounded-lg h-full flex flex-col items-center justify-between text-center p-4">
                      <div className="flex items-center justify-center w-full">
                        <span style={{ color: "#00ADB5" }} className="w-14 h-14 flex items-center justify-center text-4xl mb-4">
                          <UserOutlined style={{ fontSize: "2.5rem" }} />
                        </span>
                      </div>
                      <Title level={4} className="text-base md:text-lg font-bold text-[#EEEEEE] mb-2">
                        Outstanding On-The-Job Training (Intern)
                      </Title>
                      <Text className="text-black-300 text-sm md:text-base">
                        Recognized for exceptional performance and contribution during internship.
                      </Text>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <Card className="bg-[#EEEEEE] rounded-lg h-full flex flex-col items-center justify-between text-center p-4">
                      <div className="flex items-center justify-center w-full">
                        <span style={{ color: "#00ADB5" }} className="w-14 h-14 flex items-center justify-center text-4xl mb-4">
                          <StarOutlined style={{ fontSize: "2.5rem" }} />
                        </span>
                      </div>
                      <Title level={4} className="text-base md:text-lg font-bold text-[#EEEEEE] mb-2">
                        Dean's Lister
                      </Title>
                      <Text className="text-black-300 text-sm md:text-base">
                        Maintained academic excellence throughout the degree program.
                      </Text>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Footer - Mobile */}
            <Divider className="my-12 md:hidden" style={{ borderColor: "#393E46" }} />
            <div className="text-center text-[#393E46] pb-8 md:hidden">
              <Text className="text-xs md:text-sm">
                © 2025 Mark Anthony Aguirre. All rights reserved.
              </Text>
            </div>
            {showTopBtn && (
              <button
                onClick={handleBackToTop}
                className="fixed bottom-8 right-8 z-50 bg-[#393E46] text-[#00ADB5] p-3 rounded-full shadow-lg hover:bg-[#00ADB5] hover:text-white transition-colors duration-200"
                aria-label="Back to Top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
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
