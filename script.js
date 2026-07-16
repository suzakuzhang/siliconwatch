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
  watch: {
    status: "运行时 · 已上线",
    title: "ProspectWatch · 安全监控与审计溯源",
    copy: "读取 Agent 内部状态，监测意图与压力信号，形成运行时风险告警、干预闭环和审计证据。",
    points: ["Agent 安全治理战略主线。", "运行时风险信号与策略告警。", "调用链、记忆、干预记录可追溯。"],
  },
  scan: {
    status: "上线前 · 已上线",
    title: "ProspectScan · 准入风险评测",
    copy: "自动化红队 / 评测，覆盖风险类别，输出上线门禁、准入报告和整改路径。",
    points: ["安全评测与准入门禁。", "项目制交付可复制。", "从评测切入持续监控合同。"],
  },
  score: {
    status: "事后 · 建设中",
    title: "ProspectScore · 风险评级与保险",
    copy: "跨行业风险数据沉淀为评分体系，为采购、合规、审计、理赔和保险定价提供依据。",
    points: ["Risk / Insurance-ready Score。", "行业基线持续更新。", "越用越强的风险数据飞轮。"],
  },
  reach: {
    status: "认知 · 已上线",
    title: "ProspectReach · 品牌 AI 认知",
    copy: "解释 AI 为什么推荐某个品牌，区分知识缺口与偏好缺口，并用生成式内容信号提升出现率。",
    points: ["品牌在 AI 推荐中的出现率 8.75% → 56.88%。", "行业 CoT 数据反哺安全引擎。", "同一套 Runtime Explainability 的商业验证。"],
  },
  mark: {
    status: "溯源 · 技术已验证",
    title: "ProspectMark 印源 · 内容可信",
    copy: "面向水印、Deepfake 与 AIGC 检测，提供内容可信溯源能力。",
    points: ["内容水印与 AIGC 检测。", "服务 AIGC 审核安全。", "连接内容可信与运行时治理。"],
  },
  mate: {
    status: "运行时 · 建设中",
    title: "ProspectMate · 个人智能体安全",
    copy: "保护个人智能体资产，关注 memory 完整性、skill 防篡改和 OS 层独立观测。",
    points: ["面向超级个体的 Agent 资产保护。", "端侧安全运行基座。", "与企业版共享同一套检测内核。"],
  },
  physical: {
    status: "运行时 · 技术已验证",
    title: "ProspectPhysical · 具身智能安全",
    copy: "校验具身智能动作“该不该做”，面向不伤人、不损物的动作安全判断。",
    points: ["具身智能动作安全。", "连接传感器、环境与意图判断。", "从数字世界延展到真实宇宙。"],
  },
  studio: {
    status: "战略设施平台 · 建设中",
    title: "ProspectStudio · 自研智能体交互平台",
    copy: "多智能体协作安全研究环境，也是协作层第一方数据来源。",
    points: ["多智能体协作研究环境。", "内部测试与产品验证平台。", "沉淀协作层安全数据。"],
  },
};

const productButtons = document.querySelectorAll("[data-product]");
const statusEl = document.querySelector("[data-product-status]");
const titleEl = document.querySelector("[data-product-title]");
const copyEl = document.querySelector("[data-product-copy]");
const pointsEl = document.querySelector("[data-product-points]");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-product");
    const item = productData[key];
    if (!item) return;

    productButtons.forEach((candidate) => {
      candidate.classList.remove("is-active");
      candidate.setAttribute("aria-selected", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");

    if (statusEl) statusEl.textContent = item.status;
    if (titleEl) titleEl.textContent = item.title;
    if (copyEl) copyEl.textContent = item.copy;
    if (pointsEl) {
      pointsEl.replaceChildren(...item.points.map((point) => {
        const li = document.createElement("li");
        li.textContent = point;
        return li;
      }));
    }
  });
});
