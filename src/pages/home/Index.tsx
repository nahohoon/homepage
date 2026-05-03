import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
  BarChart3,
  Leaf,
  Factory,
  Coins,
  Target,
  ArrowRight,
  Bot,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "신뢰 요소", id: "trust" },
    { label: "컨설팅 분야", id: "services" },
    { label: "진행 프로세스", id: "process" },
    { label: "컨설턴트 소개", id: "about" },
    { label: "문의하기", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15,36,72,0.97)"
          : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm"
            style={{ background: "var(--accent)", color: "#0F2448" }}
          >
            경
          </div>
          <span className="text-white font-bold text-base tracking-tight hidden sm:block">
            경영컨설팅
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
          style={{
            background: "var(--accent)",
            color: "#0F2448",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          }}
        >
          <Phone size={14} />
          무료 상담 신청
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ background: "rgba(15,36,72,0.98)" }}
          >
            <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white/80 hover:text-white text-base font-medium py-3 border-b border-white/10 text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-3 w-full py-3 rounded-md font-semibold text-sm"
                style={{ background: "var(--accent)", color: "#0F2448" }}
              >
                무료 상담 신청
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
function HeroSection() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  const badges = ["경영컨설팅", "재무진단", "정책자금", "인증컨설팅", "소상공인"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F2448 0%, #1a3a6e 40%, #0d1f3c 100%)",
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1758518729706-b1810dd39cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
        style={{ background: "var(--accent)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5"
        style={{ background: "#60a5fa", filter: "blur(60px)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 border"
          style={{
            borderColor: "rgba(201,168,76,0.4)",
            background: "rgba(201,168,76,0.08)",
            color: "var(--accent)",
          }}
        >
          <Star size={12} fill="currentColor" />
          경영학 박사 · 경영지도사 · 대학 겸임교수 보유
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white font-bold leading-tight mb-5"
          style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
            fontFamily: "'Noto Serif KR', serif",
            lineHeight: "1.35",
          }}
        >
          중소기업과 소상공인의{" "}
          <span style={{ color: "var(--accent)" }}>경영 문제</span>를<br />
          현장 중심 컨설팅으로 해결합니다.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 max-w-xl mx-auto mb-3 leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
        >
          재무, 원가, 정책자금, 인증, 스마트공장, 디지털전환 등 실행 중심 지원
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-white/45 max-w-xl mx-auto mb-10 text-sm tracking-wide"
        >
          이론이 아닌 실무 &nbsp;·&nbsp; 서류가 아닌 현장 &nbsp;·&nbsp; 보고서가 아닌 실행
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "var(--accent)",
              color: "#0F2448",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            }}
          >
            <Phone size={18} />
            무료 상담 신청하기
          </button>
          <button
            onClick={scrollToServices}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
          >
            <Search size={18} />
            컨설팅 분야 보기
          </button>
        </motion.div>

        {/* Keyword Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full text-sm font-medium border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.9)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              #{badge}
            </span>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={28} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Trust Bar – Hero 아래 한 줄 신뢰 문장
───────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: <GraduationCap size={14} />, text: "경영학 박사" },
    { icon: <Award size={14} />, text: "공인 경영지도사" },
    { icon: <BookOpen size={14} />, text: "대학교 겸임교수" },
    { icon: <Briefcase size={14} />, text: "중소기업 실무 경험" },
  ];
  return (
    <div
      className="w-full py-3 px-4"
      style={{ background: "#0c1e3e", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span style={{ color: "var(--accent)", opacity: 0.8 }}>{item.icon}</span>
            <span className="text-white/55 text-xs font-medium">{item.text}</span>
            {i < items.length - 1 && (
              <span className="hidden sm:inline text-white/20 text-xs ml-3">·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Trust Section – 강화된 신뢰 요소
───────────────────────────────────────────── */
function TrustSection() {
  const coreCredentials = [
    {
      icon: <GraduationCap size={32} />,
      icon_small: <GraduationCap size={11} />,
      label: "경영학 박사",
      title: "Ph.D.",
      desc: "학문적 깊이로 경영 문제를 체계적으로 진단·분석합니다.",
    },
    {
      icon: <Award size={32} />,
      icon_small: <Award size={11} />,
      label: "경영지도사",
      title: "공인 자격",
      desc: "중소벤처기업부 공인 경영지도사 자격 보유.",
    },
    {
      icon: <BookOpen size={32} />,
      icon_small: <BookOpen size={11} />,
      label: "대학 겸임교수",
      title: "이론 + 현장",
      desc: "경영학과 겸임교수로서 최신 이론을 현장에 접목합니다.",
    },
    {
      icon: <Briefcase size={32} />,
      icon_small: <Briefcase size={11} />,
      label: "중소기업 실무",
      title: "관리부장 경험",
      desc: "중소기업 관리부장 실무 경험으로 현장 언어를 압니다.",
    },
  ];

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(15,36,72,0.08)", color: "#0F2448" }}
          >
            CREDENTIALS
          </span>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#0F2448" }}>
            이 사람,{" "}
            <span style={{ color: "var(--accent)" }}>믿어도 됩니다.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            학문과 현장, 두 가지를 모두 갖춘 검증된 경영 전문가입니다.
          </p>
        </motion.div>

        {/* 4 Core Credential Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {coreCredentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ background: "white", border: "2px solid #0F2448" }}
            >
              <div className="h-1.5" style={{ background: "linear-gradient(90deg, var(--accent), #e8c56a)" }} />
              <div className="p-6">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black mb-4"
                  style={{ background: "#0F2448", color: "var(--accent)" }}
                >
                  {item.icon_small}
                  {item.label}
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(15,36,72,0.06)", color: "#0F2448" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-black text-base mb-1.5" style={{ color: "#0F2448" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 실적 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-xl"
          style={{ background: "#f0f4f9", border: "1px solid #dce6f0" }}
        >
          <Building2 size={18} style={{ color: "#0F2448", flexShrink: 0 }} />
          <p className="text-sm text-center sm:text-left" style={{ color: "#0F2448" }}>
            <strong>정부지원사업 현장클리닉 수행 경험</strong>
            <span className="text-muted-foreground"> · 중소기업 컨설팅 다수 수행 실적 보유</span>
          </p>
          <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Services Section (6 cards – 경영컨설팅 중심)
───────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    {
      icon: <LineChart size={26} />,
      title: "경영컨설팅",
      desc: "경영전략 수립, 조직관리, 영업력 강화 등 중소기업 종합 경영개선",
      tags: ["경영전략", "수익개선"],
      primary: true,
    },
    {
      icon: <Users size={26} />,
      title: "소상공인 컨설팅",
      desc: "수익 구조 개선과 지속 성장을 위한 맞춤형 현장 방문 컨설팅",
      tags: ["현장방문", "수익구조"],
      primary: true,
    },
    {
      icon: <Coins size={26} />,
      title: "재무·원가·재고관리",
      desc: "재무 구조 진단, 원가 분석, 재고 최적화로 실질 이익 구조 개선",
      tags: ["재무진단", "원가절감"],
      primary: false,
    },
    {
      icon: <FileText size={26} />,
      title: "정책자금 및 정부지원사업",
      desc: "정책자금·창업지원금·R&D 지원 발굴부터 신청까지 전 과정 지원",
      tags: ["정책자금", "보조금"],
      primary: false,
    },
    {
      icon: <Shield size={26} />,
      title: "인증 컨설팅",
      desc: "벤처기업·뿌리기업·소부장 인증 전략 수립 및 서류 작성 지원",
      tags: ["벤처인증", "뿌리·소부장"],
      primary: false,
    },
    {
      icon: <Factory size={26} />,
      title: "스마트공장 및 디지털전환",
      desc: "제조 현장 스마트공장 구축, 업무 디지털화, 생산성 향상 지원",
      tags: ["스마트공장", "디지털전환"],
      primary: false,
    },
  ];

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-20" style={{ background: "#f7f9fc" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(15,36,72,0.08)", color: "#0F2448" }}
          >
            SERVICES
          </span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0F2448" }}>
            주요 <span style={{ color: "var(--accent)" }}>경영컨설팅 분야</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            중소기업과 소상공인이 직면하는 현실적인 경영 문제를 현장에서 직접 해결합니다.
          </p>
        </motion.div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
              style={{ border: svc.primary ? "2px solid #0F2448" : "1px solid #e8edf5" }}
              onClick={scrollToContact}
            >
              {svc.primary && (
                <div className="h-1" style={{ background: "linear-gradient(90deg, #0F2448, #2a5298)" }} />
              )}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: svc.primary ? "#0F2448" : "rgba(15,36,72,0.06)", color: svc.primary ? "var(--accent)" : "#0F2448" }}
                  >
                    {svc.icon}
                  </div>
                  {svc.primary && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(201,168,76,0.15)", color: "#8a6520" }}
                    >
                      핵심
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-base mb-1.5" style={{ color: "#0F2448" }}>
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{ background: "rgba(201,168,76,0.1)", color: "#8a6520" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-200 hover:scale-105"
            style={{ background: "#0F2448", color: "white" }}
          >
            <MessageSquare size={18} />
            분야별 상담 문의하기
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Digital Section – 보조 영역 (작게 배치)
───────────────────────────────────────────── */
function DigitalSection() {
  const digitalItems = [
    { icon: <Database size={18} />, title: "재고관리 시스템" },
    { icon: <Settings size={18} />, title: "생산관리 시스템" },
    { icon: <Users size={18} />, title: "회원관리 시스템" },
    { icon: <LayoutDashboard size={18} />, title: "Google Sheets 업무자동화" },
    { icon: <Bot size={18} />, title: "AI 기반 분석 리포트" },
  ];

  return (
    <section className="py-12 bg-white border-t" style={{ borderColor: "#e8edf5" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
        >
          {/* Left label */}
          <div className="flex-shrink-0">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(15,36,72,0.06)", color: "#0F2448" }}
            >
              <Lightbulb size={12} />
              경영컨설팅 보조 솔루션
            </div>
            <p className="text-xs text-muted-foreground mt-2 max-w-xs">
              필요 시 경영 개선을 돕는 디지털 도구를 추가로 지원합니다.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-border flex-shrink-0" />

          {/* Right: 5 inline items */}
          <div className="flex flex-wrap gap-3">
            {digitalItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium"
                style={{ borderColor: "#e8edf5", background: "#f7f9fc", color: "#4a5568" }}
              >
                <span style={{ color: "#0F2448" }}>{item.icon}</span>
                {item.title}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Process Section (4 steps)
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   Results Section – 성과 / 사례
───────────────────────────────────────────── */
function ResultsSection() {
  const cases = [
    {
      icon: "📦",
      area: "재무·재고관리",
      problem: "재고 파악이 안 돼 중복 발주가 반복됐습니다.",
      solution: "재고관리 체계 수립과 발주 프로세스 전면 개선",
      result: "재고 비용 절감 · 운영 효율 향상",
      tag: "재고관리",
    },
    {
      icon: "📊",
      area: "원가·수익관리",
      problem: "매출은 늘었는데 이익이 남지 않았습니다.",
      solution: "원가 구조 분석 및 수익성 낮은 품목 구조조정",
      result: "영업이익률 개선 · 순이익 확대",
      tag: "원가분석",
    },
    {
      icon: "🏛️",
      area: "정책자금",
      problem: "정부지원사업이 있는지조차 몰랐습니다.",
      solution: "기업 상황에 맞는 사업 발굴 및 신청 전 과정 지원",
      result: "정책자금 확보 · 사업화 자금 마련",
      tag: "정책자금",
    },
  ];

  return (
    <section className="py-20 px-4" style={{ background: "#f7f9fc" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(15,36,72,0.08)", color: "#0F2448" }}
          >
            CASE STUDY
          </span>
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "#0F2448", fontFamily: "'Noto Serif KR', serif" }}
          >
            실제로{" "}
            <span style={{ color: "var(--accent)" }}>이렇게 개선됩니다</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            현장에서 확인한 실제 문제와 해결 방식입니다.
          </p>
        </motion.div>

        {/* 3 Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.area}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid #e8edf5" }}
            >
              {/* Top accent bar */}
              <div className="h-1" style={{ background: "linear-gradient(90deg, var(--accent), #e8c56a)" }} />

              <div className="p-6">
                {/* Area badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl">{c.icon}</span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(15,36,72,0.07)", color: "#0F2448" }}
                  >
                    {c.tag}
                  </span>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div
                    className="flex items-center gap-1.5 text-xs font-black mb-1.5 uppercase tracking-wide"
                    style={{ color: "#c0392b" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                    문제
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#333" }}>
                    {c.problem}
                  </p>
                </div>

                {/* Divider arrow */}
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px" style={{ background: "#e8edf5" }} />
                  <ChevronDown size={14} style={{ color: "#0F2448" }} />
                  <div className="flex-1 h-px" style={{ background: "#e8edf5" }} />
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div
                    className="flex items-center gap-1.5 text-xs font-black mb-1.5 uppercase tracking-wide"
                    style={{ color: "#2563eb" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                    해결
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#333" }}>
                    {c.solution}
                  </p>
                </div>

                {/* Divider arrow */}
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px" style={{ background: "#e8edf5" }} />
                  <ChevronDown size={14} style={{ color: "var(--accent)" }} />
                  <div className="flex-1 h-px" style={{ background: "#e8edf5" }} />
                </div>

                {/* Result */}
                <div
                  className="rounded-xl px-4 py-3"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <div
                    className="flex items-center gap-1.5 text-xs font-black mb-1 uppercase tracking-wide"
                    style={{ color: "#8a6520" }}
                  >
                    <CheckCircle2 size={12} style={{ color: "var(--accent)" }} />
                    결과
                  </div>
                  <p className="text-sm font-bold" style={{ color: "#0F2448" }}>
                    {c.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 안내 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          * 위 사례는 실제 컨설팅 현장에서 확인된 유형을 바탕으로 구성되었습니다.
        </motion.p>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "상담 및 현황 파악",
      desc: "무료 상담으로 기업 현황·문제점을 파악, 현장 방문으로 실제 업무 흐름을 확인합니다.",
    },
    {
      num: "02",
      title: "자료 분석 및 문제 진단",
      desc: "재무제표·원가자료·재고 현황 분석으로 문제의 근본 원인을 진단합니다.",
    },
    {
      num: "03",
      title: "개선 전략 수립",
      desc: "진단 결과를 토대로 단기·중기 실행 계획을 수립합니다. 현실적이고 실행 가능한 방안입니다.",
    },
    {
      num: "04",
      title: "실행 지원 및 사후관리",
      desc: "전략 실행 과정에서 지속 지원하고 성과를 모니터링합니다. 변화가 정착될 때까지 함께합니다.",
    },
  ];

  return (
    <section id="process" className="py-20" style={{ background: "#f0f4f9" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(15,36,72,0.08)", color: "#0F2448" }}
          >
            PROCESS
          </span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0F2448" }}>
            컨설팅 <span style={{ color: "var(--accent)" }}>진행 프로세스</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            처음 상담부터 변화가 정착되기까지, 4단계의 체계적인 프로세스로 함께합니다.
          </p>
        </motion.div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {i < 3 && (
                <div
                  className="hidden lg:block absolute z-0"
                  style={{
                    top: "24px",
                    left: "calc(100% - 6px)",
                    width: "calc(100% - 16px)",
                    height: "2px",
                    background: "linear-gradient(90deg, #c8d4e8 0%, transparent 100%)",
                  }}
                />
              )}
              <div
                className="relative z-10 p-5 bg-white rounded-xl border h-full hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "#e8edf5" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-base"
                  style={{ background: "#0F2448", color: "var(--accent)" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#0F2448" }}>
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Pain Points Section (6 customer types)
───────────────────────────────────────────── */
function PainPointsSection() {
  const painPoints = [
    {
      icon: <BarChart3 size={22} />,
      title: "매출은 있지만 이익이 남지 않는 기업",
      desc: "매출은 늘었는데 수익이 없다면 원가·비용 구조부터 진단이 필요합니다.",
    },
    {
      icon: <ClipboardList size={22} />,
      title: "재고와 원가 관리가 어려운 기업",
      desc: "적정 재고 관리와 원가 분석 없이는 수익성 개선이 불가능합니다.",
    },
    {
      icon: <Coins size={22} />,
      title: "정부지원사업을 활용하고 싶은 기업",
      desc: "정책자금, 지원사업 정보와 신청 노하우가 없어 기회를 놓치고 있다면.",
    },
    {
      icon: <Shield size={22} />,
      title: "인증을 준비하는 제조기업",
      desc: "벤처, 뿌리, 소부장 인증 준비는 복잡하고 오래 걸립니다. 전문가의 도움이 필요합니다.",
    },
    {
      icon: <Zap size={22} />,
      title: "수기 업무로 비효율이 큰 기업",
      desc: "엑셀, 수기 장부로 업무를 관리하며 반복 실수와 시간 낭비가 발생한다면.",
    },
    {
      icon: <MapPin size={22} />,
      title: "소상공인 경영개선을 원하는 사업자",
      desc: "소규모 사업장도 체계적인 경영 관리와 개선 전략이 필요합니다.",
    },
  ];

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(201,168,76,0.12)", color: "#8a6520" }}
          >
            이런 분들께 필요합니다
          </span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0F2448" }}>
            <span style={{ color: "var(--accent)" }}>지금 이 상황</span>이라면<br />
            상담이 필요합니다
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            아래 항목 중 하나라도 해당된다면, 무료 상담을 통해 현황을 점검받아보세요.
          </p>
        </motion.div>

        {/* 6 Pain Point Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="flex items-start gap-4 p-5 rounded-xl border hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ borderColor: "#e8edf5", background: "white" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform"
                style={{ background: "rgba(201,168,76,0.12)", color: "#8a6520" }}
              >
                {point.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1 leading-snug" style={{ color: "#0F2448" }}>
                  {point.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl text-center"
          style={{ background: "linear-gradient(135deg, #0F2448 0%, #1a3a6e 100%)" }}
        >
          <h3 className="text-white font-bold text-xl mb-2">
            해당 사항이 있으신가요?
          </h3>
          <p className="text-white/70 mb-6 text-sm">
            첫 상담은 무료입니다. 부담 없이 현황을 공유해주세요.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105"
            style={{ background: "var(--accent)", color: "#0F2448" }}
          >
            <Phone size={16} />
            지금 무료 상담 신청
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   About Section
───────────────────────────────────────────── */
function AboutSection() {
  const credentials = [
    { icon: <GraduationCap size={18} />, label: "경영학 박사" },
    { icon: <Award size={18} />, label: "경영지도사" },
    { icon: <BookOpen size={18} />, label: "대학교 경영학과 겸임교수" },
    { icon: <Briefcase size={18} />, label: "중소기업 관리부장 실무 경험" },
    { icon: <Building2 size={18} />, label: "정부지원사업 컨설팅 수행" },
  ];

  return (
    <section id="about" className="py-20" style={{ background: "#f7f9fc" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder / visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3", background: "#0F2448" }}
            >
              <img
                src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="컨설팅 미팅"
                className="w-full h-full object-cover opacity-70"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-end p-6">
                <div
                  className="p-4 rounded-xl w-full"
                  style={{ background: "rgba(15,36,72,0.88)" }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    현장형 경영컨설턴트
                  </p>
                  <p className="text-white text-xs leading-relaxed">
                    "중소기업과 소상공인의 현실을 이해하는<br />
                    실행형 파트너가 되겠습니다."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { num: "PhD", label: "경영학 박사" },
                { num: "현장", label: "중심 컨설팅" },
                { num: "실무", label: "기업 관리부장" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-white rounded-xl border"
                  style={{ borderColor: "#e8edf5" }}
                >
                  <div
                    className="text-lg font-bold mb-0.5"
                    style={{ color: "#0F2448" }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(15,36,72,0.08)", color: "#0F2448" }}
            >
              ABOUT
            </span>
            <h2
              className="text-3xl font-bold mb-4 leading-snug"
              style={{ color: "#0F2448", fontFamily: "'Noto Serif KR', serif" }}
            >
              이론과 현장,<br />
              두 가지를 모두 아는<br />
              <span style={{ color: "var(--accent)" }}>컨설턴트</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              경영학 박사 과정에서 쌓은 학문적 기반과, 중소기업 관리부장으로서
              직접 현장을 이끈 실무 경험을 동시에 보유하고 있습니다.
              대학교 겸임교수로서 최신 경영 이론과 트렌드를 현장에 접목하며,
              정부지원사업과 현장클리닉 컨설팅을 통해 실질적인 성과를 만들어왔습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              공공기관 제출용 보고서가 아닌, 실제로 변화를 만드는 컨설팅을 합니다.
              중소기업과 소상공인의 언어로 소통하고, 실행 가능한 전략을 함께 만듭니다.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(15,36,72,0.07)", color: "#0F2448" }}
                  >
                    {cred.icon}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#0F2448" }}>
                    {cred.label}
                  </span>
                  <CheckCircle2 size={16} className="ml-auto flex-shrink-0" style={{ color: "var(--accent)" }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Contact Section
───────────────────────────────────────────── */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    field: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const consultingFields = [
    "중소기업 경영컨설팅",
    "소상공인 컨설팅",
    "재무·원가·재고관리",
    "정책자금 및 정부지원사업",
    "인증컨설팅 (벤처·뿌리·소부장)",
    "스마트공장·디지털전환",
    "ESG·탄소중립·에너지",
    "디지털 솔루션 (시스템 구축)",
    "기타",
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: "linear-gradient(135deg, #0F2448 0%, #1a3a6e 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* 무료 배지 */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase"
              style={{ background: "var(--accent)", color: "#0F2448" }}
            >
              <span>✓</span> 무료 진단
            </span>
          </div>

          {/* 고민 체크리스트 */}
          <div
            className="inline-flex flex-col gap-2.5 text-left mx-auto mb-8 px-6 py-5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">혹시 이런 고민이 있으십니까?</p>
            {[
              "매출은 나오는데 돈이 안 남는다",
              "재고가 맞지 않는다",
              "정부지원사업은 있는데 어떻게 해야 할지 모르겠다",
            ].map((q) => (
              <div key={q} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                <p className="text-white/70 text-sm">{q}</p>
              </div>
            ))}
          </div>

          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            현재 문제를 정확히
            <br /><span style={{ color: "var(--accent)" }}>진단해드립니다</span>
          </h2>
          <p className="text-white/55 max-w-sm mx-auto text-sm leading-relaxed">
            간단한 상황만 말씀해주시면<br />
            현재 문제와 개선 방향을 정리해드립니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-8"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(15,36,72,0.08)" }}
              >
                <CheckCircle2 size={32} style={{ color: "#0F2448" }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0F2448" }}>
                상담 신청이 완료되었습니다!
              </h3>
              <p className="text-muted-foreground">
                빠른 시일 내에 연락드리겠습니다. 감사합니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: 이름 + 연락처 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0F2448" }}
                  >
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "#e0e7ef",
                      background: "#f8fafc",
                      color: "#0F2448",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0F2448" }}
                  >
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-9463-4999"
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "#e0e7ef",
                      background: "#f8fafc",
                      color: "#0F2448",
                    }}
                  />
                </div>
              </div>

              {/* Row 2: 기업명 + 상담분야 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0F2448" }}
                  >
                    기업명 / 상호명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="(주)OO기업"
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "#e0e7ef",
                      background: "#f8fafc",
                      color: "#0F2448",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#0F2448" }}
                  >
                    상담 분야 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 cursor-pointer"
                    style={{
                      borderColor: "#e0e7ef",
                      background: "#f8fafc",
                      color: formData.field ? "#0F2448" : "#9ca3af",
                    }}
                  >
                    <option value="" disabled>
                      분야를 선택해주세요
                    </option>
                    {consultingFields.map((f) => (
                      <option key={f} value={f} style={{ color: "#0F2448" }}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: 문의 내용 */}
              <div>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: "#0F2448" }}
                >
                  문의 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="현황이나 어려움을 자유롭게 적어주세요. 구체적으로 작성하실수록 더 정확한 안내가 가능합니다."
                  className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 resize-none leading-relaxed"
                  style={{
                    borderColor: "#e0e7ef",
                    background: "#f8fafc",
                    color: "#0F2448",
                  }}
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-muted-foreground">
                * 입력하신 정보는 상담 목적으로만 활용되며, 제3자에게 제공되지 않습니다.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-lg font-bold text-base transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                style={{
                  background: "#0F2448",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(15,36,72,0.25)",
                }}
              >
                <Mail size={18} />
                진단 신청하기
              </button>
            </form>
          )}
        </motion.div>

        {/* Quick Contact Buttons – 강조 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div
            className="rounded-2xl p-7"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {/* 1순위: 전화 버튼 (크게, 골드, 무료 강조) */}
            <a
              href="tel:010-9463-4999"
              className="flex items-center justify-center gap-3 w-full px-8 py-5 rounded-xl font-bold text-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mb-3"
              style={{
                background: "var(--accent)",
                color: "#0F2448",
                boxShadow: "0 8px 32px rgba(201,168,76,0.45)",
                textDecoration: "none",
              }}
            >
              <Phone size={24} />
              무료 진단 요청 (전화)
            </a>

            {/* 2순위: 이메일 버튼 (작고 조용하게) */}
            <a
              href="mailto:skghgns@gmail.com"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg text-sm font-medium text-white/55 hover:text-white/80 transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              <Mail size={15} />
              이메일로 문의하기
            </a>

            <p className="text-center text-white/30 text-xs mt-4">
              평일 09:00 – 18:00 · 문의 후 1영업일 이내 회신
            </p>
          </div>
        </motion.div>

        {/* 하단 안심 문구 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/30 text-xs mt-6 tracking-wide"
        >
          문의 후 1영업일 이내에 답변드립니다
        </motion.p>
        <p className="text-center text-white/40 text-xs mt-2 tracking-wide">
          상담 내용은 외부에 절대 공유되지 않습니다
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-10 border-t" style={{ background: "#0a1a35", borderColor: "#1a2e50" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm"
                style={{ background: "var(--accent)", color: "#0F2448" }}
              >
                경
              </div>
              <span className="text-white font-bold text-sm">경영컨설팅</span>
            </div>
            <p className="text-white/40 text-xs">
              중소기업과 소상공인의 성장 파트너
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "신뢰요소", id: "trust" },
              { label: "컨설팅분야", id: "services" },
              { label: "프로세스", id: "process" },
              { label: "소개", id: "about" },
              { label: "문의", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/50 hover:text-white/80 text-xs transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <p className="text-white/30 text-xs text-center md:text-right">
            © 2026 경영컨설팅. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBar />
      <TrustSection />
      <ServicesSection />
      <ResultsSection />
      <DigitalSection />
      <ProcessSection />
      <PainPointsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
