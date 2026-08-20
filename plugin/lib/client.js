window.__ModuleLoader__.load({
	id: "coop-sidebar",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		// ---------- Remote 描述符（与宿主侧 invocations 一致） ----------
		function strictObjectCodec(typeSymbol, validate) {
			return {
				mode: "strict",
				typeSymbol: typeSymbol,
				schema: {
					parse(value) {
						if (!value || typeof value !== "object" || Array.isArray(value) || (validate && !validate(value))) {
							throw new TypeError(typeSymbol + " must be a valid JSON object");
						}
						return value;
					}
				}
			};
		}

		const overviewArgsCodec = strictObjectCodec("coop-sidebar#OverviewArgs", function (value) {
			return typeof value.sessionId === "string";
		});
		const explainArgsCodec = strictObjectCodec("coop-sidebar#ExplainArgs", function (value) {
			return typeof value.sessionId === "string" && typeof value.term === "string" && typeof value.question === "string";
		});
		const overviewResultCodec = strictObjectCodec("coop-sidebar#OverviewResult", function (value) {
			return typeof value.ok === "boolean";
		});
		const explainResultCodec = strictObjectCodec("coop-sidebar#ExplainResult", function (value) {
			return typeof value.ok === "boolean";
		});
		const OVERVIEW_DESC = {
			id: "coop-sidebar#coopSidebar/overview",
			service: "coopSidebar",
			namespace: "coopSidebar",
			method: "overview",
			invocation: { kind: "direct" },
			parameters: [{ name: "args", wire: "args", source: "json", codec: overviewArgsCodec }],
			result: overviewResultCodec
		};
		const EXPLAIN_DESC = {
			id: "coop-sidebar#coopSidebar/explain",
			service: "coopSidebar",
			namespace: "coopSidebar",
			method: "explain",
			invocation: { kind: "direct" },
			parameters: [{ name: "args", wire: "args", source: "json", codec: explainArgsCodec }],
			result: explainResultCodec
		};

		const CSS = '.coop-tabstrip{position:fixed;right:0;top:50%;transform:translateY(-50%);width:40px;height:128px;border:none;border-radius:12px 0 0 12px;background:rgba(80,110,220,.92);color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;box-shadow:-2px 2px 12px rgba(0,0,0,.18);font-size:13px;font-weight:600;letter-spacing:2px;z-index:2147483000;pointer-events:auto}.coop-tabstrip-label{line-height:1.2}.coop-tabstrip-label2{font-size:11px;opacity:.85;letter-spacing:4px;margin-left:4px}.coop-tabstrip-count{position:absolute;top:6px;right:5px;background:#e5484d;color:#fff;border-radius:9px;min-width:16px;height:16px;font-size:10px;line-height:16px;text-align:center;padding:0 4px}.coop-panel{position:fixed;top:72px;right:14px;bottom:64px;width:372px;display:flex;flex-direction:column;border-radius:14px;border:1px solid rgba(127,127,127,.28);background:rgba(250,250,252,.96);color:#222;box-shadow:0 10px 34px rgba(0,0,0,.22);font-size:13px;line-height:1.65;z-index:2147483000;pointer-events:auto;overflow:hidden}.coop-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px 8px;border-bottom:1px solid rgba(127,127,127,.2)}.coop-title{font-weight:700;font-size:14px}.coop-sub{font-size:11px;color:#888;max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.coop-iconbtn{border:none;background:transparent;cursor:pointer;font-size:14px;color:#666;padding:4px 6px;border-radius:6px}.coop-iconbtn:hover{background:rgba(127,127,127,.15)}.coop-tabs{display:flex;gap:4px;padding:8px 10px 0}.coop-tab{flex:1;border:none;background:transparent;padding:7px 0;border-radius:8px 8px 0 0;cursor:pointer;color:#666;font-size:12.5px;font-weight:600}.coop-tab-on{background:rgba(80,110,220,.12);color:#3450c8}.coop-scroll{flex:1;overflow-y:auto;padding:10px 14px 14px}.coop-sec{margin:10px 0}.coop-sec-title{font-weight:700;font-size:12px;color:#555;margin-bottom:5px}.coop-sec-body{font-size:12.5px}.coop-chips{display:flex;flex-wrap:wrap;gap:6px}.coop-chip{border:1px solid rgba(80,110,220,.4);background:rgba(80,110,220,.08);color:#3450c8;border-radius:999px;padding:3px 10px;font-size:12px;cursor:pointer;max-width:100%}.coop-chip:hover{background:rgba(80,110,220,.18)}.coop-note{color:#777;font-size:12.5px;padding:14px 4px}.coop-err{color:#c0392b}.coop-err-bar{padding:6px 14px;font-size:11.5px;color:#c0392b;background:rgba(192,57,43,.08);border-top:1px solid rgba(192,57,43,.2)}.coop-foot{padding:8px 14px;font-size:11px;color:#999;border-top:1px solid rgba(127,127,127,.2);display:flex;align-items:center;gap:8px}.coop-link{border:none;background:transparent;color:#3450c8;cursor:pointer;font-size:11.5px;padding:0}.coop-detail{flex:1;overflow-y:auto;padding:10px 14px 14px}.coop-detail-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.coop-back{cursor:pointer;color:#3450c8;font-size:12px;background:none;border:none;padding:0}.coop-badge{font-size:10.5px;color:#fff;background:#7a7a7a;border-radius:999px;padding:1px 8px}.coop-term-title{font-size:16px;font-weight:700;margin:4px 0 2px}.coop-followups{display:flex;flex-wrap:wrap;gap:6px}.coop-ask{display:flex;gap:8px;margin-top:12px}.coop-input{flex:1;border:1px solid rgba(127,127,127,.35);border-radius:8px;padding:7px 10px;font-size:12.5px;background:#fff;color:#222;min-width:0}.coop-btn{border:none;background:#3450c8;color:#fff;border-radius:8px;padding:0 14px;cursor:pointer;font-size:12.5px}.coop-btn:disabled{opacity:.5;cursor:default}.coop-act{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.coop-act li{display:flex;align-items:center;gap:8px;font-size:12.5px}.coop-dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex:none}.coop-act-running .coop-dot{background:#3b82f6}.coop-act-done .coop-dot{background:#22a06b}.coop-act-failed .coop-dot{background:#e5484d}.coop-act-status{color:#999;font-size:11px;margin-left:auto;flex:none}.coop-pm{list-style:none;margin:0;padding:0}.coop-pm li{padding:3px 0;font-size:12.5px}.coop-pm b{color:#3450c8}.coop-warn{background:rgba(229,72,77,.08);border:1px solid rgba(229,72,77,.35);color:#c0392b;border-radius:8px;padding:8px 10px;font-size:12px;margin:8px 0;line-height:1.5}.coop-head-right{display:flex;align-items:center;gap:8px}.coop-copy{border:1px solid rgba(80,110,220,.45);background:transparent;color:#3450c8;border-radius:6px;padding:2px 8px;font-size:11px;cursor:pointer}.coop-copy:hover{background:rgba(80,110,220,.1)}.coop-copy-ok{background:rgba(34,160,107,.15);border-color:rgba(34,160,107,.5);color:#22a06b}.coop-loading{flex:1;display:flex;align-items:center;justify-content:center;color:#888;font-size:12.5px}.coop-ring{position:fixed;background:rgba(255,200,0,.25);border:1.5px solid rgba(255,160,0,.9);border-radius:3px;pointer-events:none;z-index:2147482000;transition:opacity .3s}@media (prefers-color-scheme:dark){.coop-panel{background:rgba(28,30,36,.97);color:#e6e6e6;border-color:rgba(160,160,180,.25)}.coop-sub{color:#9a9a9a}.coop-tab{color:#b0b0b0}.coop-tab-on{background:rgba(110,140,255,.16);color:#a8b8ff}.coop-sec-title{color:#b8b8c4}.coop-note{color:#9a9a9a}.coop-chip{border-color:rgba(130,155,255,.5);background:rgba(110,140,255,.12);color:#b9c6ff}.coop-input{background:#1f2128;color:#e6e6e6;border-color:rgba(160,160,180,.3)}.coop-iconbtn{color:#bbb}.coop-link{color:#a8b8ff}.coop-back{color:#a8b8ff}.coop-badge{background:#555}.coop-pm b{color:#a8b8ff}.coop-warn{background:rgba(229,72,77,.15);border-color:rgba(229,72,77,.45);color:#ff9a9a}.coop-copy{color:#b9c6ff;border-color:rgba(130,155,255,.5)}.coop-copy:hover{background:rgba(110,140,255,.12)}.coop-copy-ok{color:#7ee2b0;border-color:rgba(34,160,107,.5)}.coop-tabstrip{background:rgba(100,130,240,.95)}}';

		const TABS = [["terms", "术语雷达"], ["transparent", "过程透明"], ["coop", "协作之道"]];

		function mapSandbox(v) {
			const m = { readonly: "只读", "workspace-write": "仅工作区可写", "danger-full-access": "完全访问（无限制）", default: "默认" };
			return m[v] || v;
		}
		function mapApproval(v) {
			const m = { ask: "询问（高风险需确认）", never: "从不询问（自动放行）", plan: "计划模式（先规划后执行）", allow: "允许" };
			return m[v] || v;
		}
		const STATUS_LABEL = { running: "运行中", done: "已完成", failed: "失败" };

		const inject = ["remote", "slots", "timer"];

		async function apply(ctx) {
			const h = react.createElement;
			const disposers = [];
			let remoteService = null;
			try {
				disposers.push(await ctx.remote.$mount({
					package: "coop-sidebar",
					descriptors: [OVERVIEW_DESC, EXPLAIN_DESC]
				}));
			} catch (error) {
				console.error("[coop-sidebar] remote mount failed:", error);
			}

			// 样式注入（页面级副作用，卸载时移除）
			let styleEl = null;
			try {
				styleEl = document.createElement("style");
				styleEl.setAttribute("data-coop-sidebar", "1");
				styleEl.textContent = CSS;
				(document.head || document.documentElement).appendChild(styleEl);
			} catch (e) { /* 样式尽力而为 */ }

			const rpc = {
				overview(sessionId) {
					const service = remoteService;
					if (!service || typeof service.overview !== "function") {
						return Promise.resolve({ ok: false, error: "侧边栏服务尚未就绪" });
					}
					return service.overview({ sessionId }).then(function (r) {
						const value = r && r.ok === true && Object.prototype.hasOwnProperty.call(r, "value") ? r.value : r;
						return value && value.ok ? value : { ok: false, error: (value && value.error) || (r && r.error && r.error.message) || "overview 失败" };
					}).catch(function (e) {
						return { ok: false, error: String((e && e.message) || e) };
					});
				},
				explain(sessionId, term, question) {
					const service = remoteService;
					if (!service || typeof service.explain !== "function") {
						return Promise.resolve({ ok: false, error: "侧边栏服务尚未就绪" });
					}
					return service.explain({ sessionId, term, question: question || "" }).then(function (r) {
						const value = r && r.ok === true && Object.prototype.hasOwnProperty.call(r, "value") ? r.value : r;
						return value && value.ok ? value : { ok: false, error: (value && value.error) || (r && r.error && r.error.message) || "explain 失败" };
					}).catch(function (e) {
						return { ok: false, error: String((e && e.message) || e) };
					});
				}
			};

			function CoopSidebar(props) {
				const useSessions = props.useSessions;
				const current = typeof useSessions === "function" ? useSessions(function (s) { return s.current; }) : undefined;
				const session = typeof useSessions === "function" ? useSessions(function (s) { return current ? s.byId[current] : undefined; }) : undefined;

				const [open, setOpen] = react.useState(false);
				const [tab, setTab] = react.useState("terms");
				const [overview, setOverview] = react.useState(null);
				const [error, setError] = react.useState("");
				const [detail, setDetail] = react.useState(null);
				const [q, setQ] = react.useState("");
				const [busy, setBusy] = react.useState(false);
				const [copied, setCopied] = react.useState(false);

				react.useEffect(function () {
					if (!current) { setOverview(null); return undefined; }
					let dead = false;
					const load = function () {
						rpc.overview(current).then(function (r) {
							if (!dead) { if (r.ok) setOverview(r); else setError(r.error); }
						});
					};
					load();
					const stop = ctx.timer.interval(load, 5000);
					return function () { dead = true; stop(); };
				}, [current]);

				// —— 输入框聚焦自动收起：在下方输入框打字时，面板不再遮挡 ——
				const openRef = react.useRef(open);
				react.useEffect(function () { openRef.current = open; }, [open]);
				react.useEffect(function () {
					const onFocusIn = function (e) {
						if (!openRef.current) return;
						const el = e.target;
						if (!el || typeof el.closest !== "function") return;
						// 侧边栏自身的输入框（如“继续追问”）不触发收起
						if (el.closest(".coop-panel")) return;
						const tag = String(el.tagName || "").toUpperCase();
						if (tag === "TEXTAREA" || tag === "INPUT" || el.isContentEditable) setOpen(false);
					};
					document.addEventListener("focusin", onFocusIn, true);
					return function () { document.removeEventListener("focusin", onFocusIn, true); };
				}, []);
				react.useEffect(function () { return function () { cleanupHighlight(); }; }, []);

				function openTerm(term) {
					setBusy(true);
					setDetail({ loading: true, term: term });
					rpc.explain(current, term, "").then(function (r) {
						setDetail(r); setBusy(false);
					});
				}

				function askWith(text) {
					if (!detail || !detail.term || !text) return;
					setBusy(true);
					setDetail({ ...detail, loading: true });
					rpc.explain(current, detail.term, text).then(function (r) {
						setDetail(r); setBusy(false);
					});
				}

				function askQuestion() {
					const text = q.trim();
					if (!text) return;
					askWith(text); setQ("");
				}

				function copyDetail(d) {
					if (typeof navigator === "undefined" || !navigator.clipboard) return;
					const parts = ["【" + (d.term || "") + "】", d.summary, d.plain, d.example, d.principle, d.boundary];
					const text = parts.filter(function (x) { return x; }).join("\n\n");
					navigator.clipboard.writeText(text).then(function () {
						setCopied(true);
						ctx.timer.timeout(function () { setCopied(false); }, 1500);
					}).catch(function () { /* 剪贴板不可用时静默 */ });
				}

				function escapeReg(s) {
					return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
				}
				function termSearchKey(term) {
					const base = String(term || "").split("（")[0].split("(")[0].trim();
					return base.length >= 2 ? base : String(term || "").trim();
				}
				let highlightCleanup = null;
				function cleanupHighlight() { if (highlightCleanup) { highlightCleanup(); highlightCleanup = null; } }
				function highlightTerm(term) {
					cleanupHighlight();
					const key = termSearchKey(term);
					if (!key) return;
					const re = new RegExp(/^[\x20-\x7e]+$/.test(key) ? "\\b" + escapeReg(key) + "\\b" : escapeReg(key), "i");
					let walker = null;
					try { walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
						acceptNode: function (node) {
							if (node.parentElement && node.parentElement.closest && node.parentElement.closest(".coop-panel")) return NodeFilter.FILTER_REJECT;
							return NodeFilter.FILTER_ACCEPT;
						}
					}); } catch (e) { return; }
					const rings = [];
					let count = 0;
					let firstEl = null;
					while (walker.nextNode() && count < 20) {
						const node = walker.currentNode;
						const text = node.nodeValue || "";
						re.lastIndex = 0;
						const m = re.exec(text);
						if (!m) continue;
						try {
							const range = document.createRange();
							range.setStart(node, m.index);
							range.setEnd(node, m.index + m[0].length);
							const rect = range.getBoundingClientRect();
							if (rect && rect.width > 0 && rect.height > 0) {
								const ring = document.createElement("div");
								ring.className = "coop-ring";
								ring.style.left = rect.left + "px";
								ring.style.top = rect.top + "px";
								ring.style.width = rect.width + "px";
								ring.style.height = rect.height + "px";
								document.body.appendChild(ring);
								rings.push(ring);
								if (!firstEl && node.parentElement) firstEl = node.parentElement;
								count++;
							}
						} catch (e) { /* 跳过不可定位节点 */ }
					}
					if (firstEl) { try { firstEl.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) { /* 忽略 */ } }
					if (rings.length) {
						const dispose = function () {
							for (const r of rings) { if (r.parentNode) r.parentNode.removeChild(r); }
							window.removeEventListener("scroll", dispose, true);
							window.removeEventListener("resize", dispose);
						};
						highlightCleanup = dispose;
						window.addEventListener("scroll", dispose, true);
						window.addEventListener("resize", dispose);
						ctx.timer.timeout(dispose, 2500);
					}
				}

				function section(title, body) {
					return h("div", { className: "coop-sec" },
						h("div", { className: "coop-sec-title" }, title),
						h("div", { className: "coop-sec-body" }, body));
				}

				function renderDetail() {
					if (!detail) return null;
					if (detail.loading) return h("div", { className: "coop-loading" }, busy ? "正在生成解释…（未收录名词由模型解读，约需几秒）" : "读取中…");
					if (!detail.ok) return h("div", { className: "coop-scroll" }, h("div", { className: "coop-note coop-err" }, String(detail.error || "解释失败，请重试")));
					const d = detail;
					const rows = [["一句话总结", d.summary], ["大白话解释", d.plain], ["举个栗子", d.example], ["原理机制", d.principle], ["边界与局限", d.boundary]].filter(function (r) { return r[1]; });
					const kids = [
						h("div", { className: "coop-detail-head" },
							h("button", { className: "coop-back", onClick: function () { setDetail(null); } }, "← 返回"),
							h("div", { className: "coop-head-right" },
								h("button", { className: "coop-copy", onClick: function () { highlightTerm(d.term); } }, "定位原文"),
								h("button", { className: "coop-copy" + (copied ? " coop-copy-ok" : ""), onClick: function () { copyDetail(d); } }, copied ? "已复制 ✓" : "复制"),
								h("span", { className: "coop-badge" }, d.source === "model" ? "模型解读" : "内置词库"))),
						h("div", { className: "coop-term-title" }, d.term)
					];
					if (d.note) kids.push(h("div", { className: "coop-warn" }, d.note));
					for (const row of rows) kids.push(section(row[0], row[1]));
					if (Array.isArray(d.followUps) && d.followUps.length) {
						kids.push(section("你可以继续追问", h("div", { className: "coop-followups" }, d.followUps.map(function (f, i) {
							return h("button", { key: i, className: "coop-chip", onClick: function () { askWith(f); } }, f);
						}))));
					}
					kids.push(h("div", { className: "coop-ask" },
						h("input", { className: "coop-input", placeholder: "继续追问这个名词…", value: q, onChange: function (e) { setQ(e.target.value); }, onKeyDown: function (e) { if (e.key === "Enter") askQuestion(); } }),
						h("button", { className: "coop-btn", onClick: askQuestion, disabled: busy || !q.trim() }, "提问")));
					return h("div", { className: "coop-detail" }, kids);
				}

				function renderTerms() {
					if (!current) return h("div", { className: "coop-scroll" }, h("div", { className: "coop-note" }, "在左侧打开一个会话后，这里会自动扫描对话中的专业名词。"));
					if (detail) return renderDetail();
					const terms = overview && Array.isArray(overview.terms) ? overview.terms : [];
					const groups = {};
					for (const t of terms) {
						const key = t.category || "其他";
						if (!groups[key]) groups[key] = [];
						groups[key].push(t.term);
					}
					const kids = [];
					if (!terms.length) kids.push(h("div", { className: "coop-note" }, "暂未发现词库中的专业名词。多聊几句 Agent/自动化相关任务，或点下方“刷新”。"));
					for (const cat of Object.keys(groups)) {
						kids.push(section(cat + "（" + groups[cat].length + "）", h("div", { className: "coop-chips" }, groups[cat].map(function (t, i) {
							return h("button", { key: i, className: "coop-chip", onClick: function () { openTerm(t); } }, t);
						}))));
					}
					return h("div", { className: "coop-scroll" }, kids);
				}

				function renderTransparent() {
					const kids = [];
					const s = session;
					kids.push(section("当前会话", s ? s.displayTitle + (s.running ? "（运行中）" : "（空闲）") : (current ? String(current) : "未打开会话")));
					const acts = overview && Array.isArray(overview.activity) ? overview.activity : [];
					kids.push(section("最近工具活动", acts.length ? h("ul", { className: "coop-act" }, acts.map(function (a, i) {
						return h("li", { key: i, className: "coop-act-" + a.status },
							h("span", { className: "coop-dot" }),
							h("span", null, a.name),
							h("span", { className: "coop-act-status" }, STATUS_LABEL[a.status] || a.status));
					})) : "暂无工具调用"));
					const pol = overview && overview.policy ? overview.policy : {};
					const pm = [];
					if (pol.sandboxDefault !== undefined) pm.push(["沙箱（默认）", mapSandbox(pol.sandboxDefault)]);
					if (pol.sandboxOverride !== undefined) pm.push(["沙箱（本会话）", mapSandbox(pol.sandboxOverride)]);
					if (pol.approvalOverride !== undefined) pm.push(["审批（本会话）", mapApproval(pol.approvalOverride)]);
					if (!pm.length) pm.push(["权限", "未读取到会话级覆盖，按全局默认执行"]);
					kids.push(section("权限与沙箱", h("ul", { className: "coop-pm" }, pm.map(function (p, i) {
						return h("li", { key: i }, h("b", null, p[0] + "："), p[1]);
					}))));
					const bounds = overview && Array.isArray(overview.boundaries) ? overview.boundaries : [];
					kids.push(section("当前边界（请留意）", h("ul", { className: "coop-pm" }, bounds.map(function (b, i) { return h("li", { key: i }, b); }))));
					kids.push(section("名词解读服务", overview ? (overview.model ? "模型可用：未收录名词将由模型实时解读" : "模型不可用：仅内置词库") : "读取中…"));
					return h("div", { className: "coop-scroll" }, kids);
				}

				function renderCoop() {
					const roles = [
						["目标定义者", "把模糊想法变成可验收、可拆解的目标。"],
						["边界设定者", "明确“能做什么、不能做什么、到哪一步为止”。"],
						["验收与判断者", "判断结果是否符合意图、有无风险，而不是照单全收。"],
						["责任承担者", "关键决策与最终后果由人负责，工具不背锅。"],
						["持续学习者", "从 Agent 的执行过程反哺自己的判断力与提问力。"]
					];
					const skills = [
						["提问与表达", "把需求讲清楚、可拆解、可验证——这是最高杠杆的能力。"],
						["审阅与验收", "能读懂 Agent 做了什么、为什么这么做，并给出明确反馈。"],
						["边界与安全意识", "关注权限、数据、成本、幻觉与不可逆操作的风险。"],
						["系统思维", "把大任务拆成可并行、可复用、可验证的模块。"],
						["批判性判断", "不盲信输出；关键结论抽样验证，敢于叫停。"]
					];
					return h("div", { className: "coop-scroll" },
						section("Agent 越来越强，人的角色是什么？", h("ul", { className: "coop-pm" }, roles.map(function (r, i) {
							return h("li", { key: i }, h("b", null, r[0] + " — "), r[1]);
						}))),
						section("人需要提升的能力", h("ul", { className: "coop-pm" }, skills.map(function (s, i) {
							return h("li", { key: i }, h("b", null, s[0] + " — "), s[1]);
						}))),
						section("一句话", "机器负责“怎么做”，人负责“为什么做、做到什么标准、边界在哪”。Agent 越强大，人的价值越不在“干活”，而在“定义方向、把关质量、承担选择”。"));
				}

				function renderBody() {
					if (tab === "terms") return renderTerms();
					if (tab === "transparent") return renderTransparent();
					return renderCoop();
				}

				if (!open) {
					const count = overview && Array.isArray(overview.terms) ? overview.terms.length : 0;
					return h("button", { className: "coop-tabstrip", "data-coop-sidebar-root": "collapsed", onClick: function () { setOpen(true); }, title: "打开人机协同助手" },
						h("div", { className: "coop-tabstrip-label" }, "术语"),
						h("div", { className: "coop-tabstrip-label2" }, "雷达"),
						count > 0 ? h("div", { className: "coop-tabstrip-count" }, String(count)) : null);
				}

				return h("div", { className: "coop-panel", "data-coop-sidebar-root": "expanded" },
					h("div", { className: "coop-head" },
						h("div", null,
							h("div", { className: "coop-title" }, "人机协同助手"),
							h("div", { className: "coop-sub" }, session ? session.displayTitle : (current ? String(current) : "未打开会话"))),
						h("button", { className: "coop-iconbtn", onClick: function () { setOpen(false); }, title: "收起" }, "»")),
					h("div", { className: "coop-tabs" }, TABS.map(function (t) {
						return h("button", { key: t[0], className: "coop-tab" + (tab === t[0] ? " coop-tab-on" : ""), onClick: function () { setTab(t[0]); setDetail(null); } }, t[1]);
					})),
					renderBody(),
					error ? h("div", { className: "coop-err-bar" }, "同步失败：" + error) : null,
					h("div", { className: "coop-foot" },
						h("button", { className: "coop-link", onClick: function () { if (current) rpc.overview(current).then(function (r) { if (r.ok) { setOverview(r); setError(""); } else setError(r.error); }); } }, "刷新"),
						h("span", null, "· 每 5 秒自动同步")));
			}

			class CoopSidebarBoundary extends react.Component {
				constructor(props) {
					super(props);
					this.state = { error: null };
				}
				static getDerivedStateFromError(error) {
					return { error: error };
				}
				componentDidCatch(error) {
					console.error("[coop-sidebar] render failed:", error);
				}
				render() {
					if (!this.state.error) return this.props.children;
					const message = String((this.state.error && this.state.error.message) || this.state.error);
					return h("button", {
						className: "coop-tabstrip",
						"data-coop-sidebar-root": "error",
						title: "侧边栏渲染失败：" + message,
						style: { background: "#c0392b" }
					}, h("div", { className: "coop-tabstrip-label" }, "修复"), h("div", { className: "coop-tabstrip-label2" }, "失败"));
				}
			}

			ctx.inject(["remote.coopSidebar", "slots"], function (scope) {
				remoteService = scope.remote.coopSidebar;
				scope.slots.inject("shell.overlay", function () {
					return scope.slots.register(
						{ name: "shell.overlay", id: "coop.sidebar", order: 100 },
						function (props) { return h(CoopSidebarBoundary, null, h(CoopSidebar, props)); }
					);
				});
				scope.effect(function () { return function () { remoteService = null; }; }, "coop-sidebar: release remote service");
			});

			return async function () {
				if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
				for (const dispose of disposers.reverse()) {
					try { await dispose(); } catch (e) { /* 清理尽力而为 */ }
				}
			};
		}

		const plugin = { name: "coop-sidebar", inject, apply };
		exports.default = plugin;
		exports.name = "coop-sidebar";
		exports.inject = inject;
		exports.apply = apply;
		return module.exports;
	}
});
