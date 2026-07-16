const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const productData = {
  geo: {
    status: "growth service",
    mode: "visibility in AI answers",
    title: "GEO 推广",
    copy:
      "GEO（Generative Engine Optimization）面向生成式搜索和 AI 问答入口，帮助品牌、机构和产品建立可被模型正确提取、引用、比较和推荐的内容结构。",
    center: "GEO",
  },
  agent: {
    status: "safety testing",
    mode: "agent behavior audit",
    title: "智能体安全检测",
    copy:
      "针对智能体的工具调用、权限边界、提示注入、任务漂移和幻觉执行构造测试场景，输出可复核的风险证据与整改建议。",
    center: "安",
  },
  runtime: {
    status: "runtime safety",
    mode: "monitor execution risk",
    title: "AI 运行安全",
    copy:
      "面向部署后的 AI 工作流和模型服务，跟踪异常行为、越权迹象、工具误用、输出漂移和安全事件，形成持续守望机制。",
    center: "RUN",
  },
  research: {
    status: "research work",
    mode: "aigc safety · xai · runtime",
    title: "研究合作",
    copy:
      "围绕 AIGC 审核安全、AI 可解释性和 AI 运行安全开展研究型评测、实验设计、报告写作与原型验证。",
    center: "研",
  },
};

const productButtons = document.querySelectorAll("[data-product]");
const statusEl = document.querySelector("[data-product-status]");
const modeEl = document.querySelector("[data-product-mode]");
const titleEl = document.querySelector("[data-product-title]");
const copyEl = document.querySelector("[data-product-copy]");
const orbitCenter = document.querySelector(".orbit strong");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-product");
    const item = productData[key];
    if (!item) return;

    productButtons.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");

    if (statusEl) statusEl.textContent = item.status;
    if (modeEl) modeEl.textContent = item.mode;
    if (titleEl) titleEl.textContent = item.title;
    if (copyEl) copyEl.textContent = item.copy;
    if (orbitCenter) orbitCenter.textContent = item.center;
  });
});

document.querySelectorAll("[data-trace]").forEach((row) => {
  row.addEventListener("click", () => {
    document.querySelectorAll("[data-trace]").forEach((item) => item.classList.remove("is-open"));
    row.classList.add("is-open");
  });
});
