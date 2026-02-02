// Translations
const translations = {
  en: {
    appName: "TimeTracker",
    stopwatch: "Stopwatch",
    start: "Start",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    reset: "Reset",
    selectTask: "Select task from daily goals",
    newTask: "New task name",
    timeline: "Daily Timeline",
    manualEntry: "Manual Entry",
    addManual: "Add Time",
    duration: "Duration (HH:MM)",
    startTime: "Start Time",
    endTime: "End Time",
    notes: "Notes",
    taskName: "Task Name",
    habits: "Daily Goals",
    goalMinutes: "Goal (minutes)",
    addGoal: "Add Goal +",
    reports: "Weekly Report",
    export: "Export",
    settings: "Settings",
    today: "Today",
    totalTime: "Total Time",
    minutes: "min",
    hourLabel: "h",
    minuteLabel: "m",
    copyYesterday: "Copy Yesterday",
    minRemaining: "{n} min remaining",
    completed: "✓ Completed",
    downloadJSON: "Download JSON",
    downloadCSV: "Download CSV",
    uploadJSON: "Upload JSON",
    recentBackups: "Recent backups",
    save: "Save",
    cancel: "Cancel",
    setDate: "Set Date",
    currentDate: "Current Date",
    endDay: "End Day",
    totalToday: "Total Today",
    visualTimeline: "Visual Timeline",
    edit: "Edit",
    delete: "Delete",
    customRange: "Custom Range",
    rangeLabel: "Range:",
    sessions: "sessions",
    averageDaily: "Average Daily",
    mostProductiveDay: "Most Productive Day",
    dayComparison: "Day Comparison",
    topTasks: "Top Tasks",
    noDataRange: "No data for this range",
    noTasksRange: "No tasks in range",
    activeDaysTpl: "{active} active days — {total} total days",
    noSessions: "No sessions recorded yet",
    orLabel: "— OR —",
    pleaseSelectTask: "Please select or create a task",
    type: "Type",
  },
  ar: {
    appName: "TimeTracker",
    stopwatch: "المؤقت",
    start: "ابدأ",
    pause: "إيقاف مؤقت",
    resume: "كمل",
    stop: "إيقاف",
    reset: "إعادة ضبط",
    selectTask: "اختر أو أنشئ مهمة",
    newTask: "اسم المهمة الجديدة",
    timeline: "الجدول الزمني اليومي",
    manualEntry: "إدخال يدوي",
    addManual: "أضف وقت",
    duration: "المدة (ساعات:دقائق)",
    startTime: "وقت البدء",
    endTime: "وقت الانتهاء",
    notes: "ملاحظات",
    taskName: "اسم المهمة",
    habits: "أهداف اليوم",
    goalMinutes: "الهدف (بالدقائق)",
    addGoal: "إضافة هدف +",
    reports: "التقرير الأسبوعي",
    edit: "تعديل",
    delete: "حذف",
    settings: "الإعدادات",
    today: "اليوم",
    totalTime: "إجمالي الوقت",
    minutes: "دقيقة",
    hourLabel: "س",
    minuteLabel: "دق",
    copyYesterday: "انسخ من الأمس",
    minRemaining: "{n} دقايق متبقية",
    completed: "✓ تم",
    downloadJSON: "تحميل JSON",
    downloadCSV: "تحميل CSV",
    uploadJSON: "رفع JSON",
    recentBackups: "النسخ الاحتياطية الأخيرة",
    save: "حفظ",
    cancel: "إلغاء",
    setDate: "اختيار التاريخ",
    currentDate: "التاريخ الحالي",
    endDay: "إنهاء اليوم",
    totalToday: "إجمالي اليوم",
    visualTimeline: "الخط الزمني المرئي",
    customRange: "نطاق مخصص",
    rangeLabel: "النطاق:",
    sessions: "جلسات",
    averageDaily: "المعدل اليومي",
    mostProductiveDay: "أكثر يوم إنتاجية",
    dayComparison: "مقارنة الأيام",
    topTasks: "أهم المهام",
    noDataRange: "لا توجد بيانات لهذا النطاق",
    noTasksRange: "لا توجد مهام في هذا النطاق",
    activeDaysTpl: "{active} يوم نشط — {total} يوم إجمالي",
    noSessions: "لا توجد جلسات بعد",
    orLabel: "— أو —",
    pleaseSelectTask: "الرجاء اختيار أو إنشاء مهمة",
    type: "النوع",
    // Help page
    helpTitle: "مساعدة وكيفية استخدام TimeTracker",
    helpContent: `
  يساعدك TimeTracker على قياس وقت العمل المركز حتى تتمكن من تحسين عاداتك.

  كيفية الاستخدام:
  - اضبط التاريخ الحالي في أعلى التطبيق.
  - أضف أهداف اليوم في عرض "أهداف اليوم". ستظهر في محدد المهام.
  - ابدأ المؤقت واختر مهمة (أو اختر من أهداف اليوم).
  - استخدم إيقاف مؤقت/استئناف لتقسيم الجلسات؛ اضغط إيقاف لحفظ الجلسة.
  - استخدم الإدخال اليدوي لإضافة جلسات ماضٍ.

  نصائح لتحسين التتبع:
  - احرص على توحيد أسماء المهام حتى تتجمع في التقارير بشكل صحيح.
  - استخدم أهداف اليوم لتحديد أولويات العمل الأهم كل يوم.
  - في نهاية الأسبوع، افتح التقارير لرؤية الإجماليات والمعدلات وأهم المهام.

  لماذا هو مفيد:
  - قياس الوقت يزيد من الوعي: ترى أين يذهب وقتك.
  - القياسات الصغيرة والمتسقة تساعدك على التحسن تدريجياً.

  تعكس هذه الصفحة إعدادات اللغة والثيم للتطبيق؛ بدّل للغة العربية باستخدام أزرار EN/AR أو تغيير الثيم.
  `,
    // Help page
    helpTitle: "Help & How to use TimeTracker",
    helpContent: `
  TimeTracker helps you measure focused work so you can improve your habits.

  How to use:
  - Set the current date at the top of the app.
  - Add daily goals in the Daily Goals view. These appear in the task selector.
  - Start the stopwatch and choose a task (or pick from daily goals).
  - Use Pause/Resume to break sessions; Stop to record the session.
  - Use Manual Entry to add retrospective sessions.

  Tips for better tracking:
  - Keep task names consistent so reports group correctly.
  - Use daily goals to prioritize the most important work each day.
  - At the end of the week, open Reports to see totals, averages, and top tasks.

  Why it helps:
  - Measuring focused time creates awareness: you can see where time goes.
  - Small, consistent measurements let you improve gradually.

  This page mirrors the app's language and theme settings; switch to Arabic using the EN/AR buttons or toggle dark/light.
  `,
  },
};

// Color palette
const TASK_COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#06b6d4",
  "#6366f1",
];

// State
let currentLang = "en";
let currentTheme = "light";
let currentView = "stopwatch";
let isRunning = false;
let isPaused = false;
let elapsedSeconds = 0;
let startTime = null;
let selectedTask = "";
let timerInterval = null;
let editingHabitId = null;
let showCustomRange = false;

// Helper: format date to local YYYY-MM-DD (uses device local time)
function ymdLocal(d) {
  const date = new Date(d);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function prettyLocal(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
}

// Parse YYYY-MM-DD into a local Date at midnight local time
function dateFromYMD(ymd) {
  if (!ymd) return null;
  const parts = String(ymd)
    .split("-")
    .map((n) => parseInt(n, 10));
  if (parts.length !== 3) return new Date(ymd);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function startOfLocalDay(d) {
  const date = new Date(d);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0,
  );
}

function endOfLocalDay(d) {
  const date = new Date(d);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    999,
  );
}

// Initialize
function init() {
  loadSettings();
  updateUI();
  loadData();
  setupEventListeners();

  // Check if date is set
  const settings = getSettings();
  if (!settings.currentDayDate) {
    showDatePicker();
  }
}

function setupEventListeners() {
  // Language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // Theme button - toggle between light and dark
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      selectTheme(newTheme);
    });
  }

  // Sync theme with system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
      selectTheme(isDark ? "dark" : "light");
    });

  // Navigation buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      switchView(view);
    });
  });
}

// Storage functions
function getStorageKey() {
  return "timeflow_data";
}

function getData() {
  const data = localStorage.getItem(getStorageKey());
  if (data) {
    return JSON.parse(data);
  }
  return {
    sessions: [],
    tasks: [],
    dailyRecords: [],
    settings: {
      language: "en",
      theme: "light",
      currentDayDate: null,
    },
  };
}

function saveData(data) {
  localStorage.setItem(getStorageKey(), JSON.stringify(data));
}

function getSettings() {
  return getData().settings;
}

function updateSettings(updates) {
  const data = getData();
  Object.assign(data.settings, updates);
  saveData(data);
}

function addSession(session) {
  const data = getData();
  session.id = Date.now() + Math.random();
  session.created_at = new Date().toISOString();
  data.sessions.push(session);
  saveData(data);
}

function getSessions(date) {
  const data = getData();
  const targetDate = ymdLocal(date);
  return data.sessions
    .filter((s) => {
      const sessionDate = ymdLocal(new Date(s.start_time));
      return sessionDate === targetDate;
    })
    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
}

function addTask(task) {
  const data = getData();
  task.id = Date.now() + Math.random();
  task.created_at = new Date().toISOString();
  task.active = true;
  data.tasks.push(task);
  saveData(data);
  return task;
}

function getTasks() {
  return getData().tasks.filter((t) => t.active);
}

function getAvailableColor(existingTasks) {
  const usedColors = existingTasks.map((t) => t.color);
  const availableColors = TASK_COLORS.filter((c) => !usedColors.includes(c));
  if (availableColors.length > 0) {
    return availableColors[0];
  }
  return TASK_COLORS[Math.floor(Math.random() * TASK_COLORS.length)];
}

// UI Functions
function updateUI() {
  const t = translations[currentLang];
  document.getElementById("appTitle").textContent = t.appName;

  // Update nav buttons
  const navTexts = [
    "stopwatch",
    "timeline",
    "visualTimeline",
    "habits",
    "reports",
    "export",
  ];
  document.querySelectorAll(".nav-btn").forEach((btn, i) => {
    btn.textContent = t[navTexts[i]] || btn.textContent;
  });

  // Update current view
  updateCurrentView();

  // Update static buttons/texts that live in the DOM
  const addGoalBtn = document.getElementById("addGoalBtn");
  if (addGoalBtn) addGoalBtn.textContent = t.addGoal || addGoalBtn.textContent;

  const copyBtn = document.getElementById("copyYesterdayBtn");
  if (copyBtn) copyBtn.textContent = t.copyYesterday || copyBtn.textContent;

  const manualBtn = document.getElementById("manualEntryBtn");
  if (manualBtn) manualBtn.textContent = t.manualEntry || manualBtn.textContent;

  // Start / Pause / Resume / Stop / Reset buttons
  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.innerHTML = `▶ ${t.start || startBtn.textContent}`;
  const pauseBtn = document.getElementById("pauseBtn");
  if (pauseBtn) pauseBtn.innerHTML = `⏸ ${t.pause || pauseBtn.textContent}`;
  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) resumeBtn.innerHTML = `▶ ${t.resume || resumeBtn.textContent}`;
  const stopBtn = document.getElementById("stopBtn");
  if (stopBtn) stopBtn.innerHTML = `⏹ ${t.stop || stopBtn.textContent}`;
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.textContent = t.reset || resetBtn.textContent;

  const expJson = document.getElementById("exportJsonBtn");
  if (expJson) expJson.textContent = t.downloadJSON || expJson.textContent;

  const expCsv = document.getElementById("exportCsvBtn");
  if (expCsv) expCsv.textContent = t.downloadCSV || expCsv.textContent;

  const uploadLbl = document.getElementById("uploadJsonLabel");
  if (uploadLbl) {
    // Preserve nested file input when updating label text
    const fileInput = uploadLbl.querySelector('input[type="file"]');
    uploadLbl.textContent = t.uploadJSON || uploadLbl.textContent;
    if (fileInput) uploadLbl.appendChild(fileInput);
  }

  const recentTitle = document.getElementById("recentBackupsTitle");
  if (recentTitle)
    recentTitle.textContent = t.recentBackups || recentTitle.textContent;

  const h2Timeline = document.getElementById("h2Timeline");
  if (h2Timeline) h2Timeline.textContent = t.timeline || h2Timeline.textContent;

  const h2Visual = document.getElementById("h2Visual");
  if (h2Visual) h2Visual.textContent = t.visualTimeline || h2Visual.textContent;

  const h2Reports = document.getElementById("h2Reports");
  if (h2Reports) h2Reports.textContent = t.reports || h2Reports.textContent;

  const h2Export = document.getElementById("h2Export");
  if (h2Export) h2Export.textContent = t.export || h2Export.textContent;

  // Table headers
  const thTask = document.getElementById("thTaskName");
  if (thTask) thTask.textContent = t.taskName || thTask.textContent;
  const thStart = document.getElementById("thStartTime");
  if (thStart) thStart.textContent = t.startTime || thStart.textContent;
  const thEnd = document.getElementById("thEndTime");
  if (thEnd) thEnd.textContent = t.endTime || thEnd.textContent;
  const thDur = document.getElementById("thDuration");
  if (thDur) thDur.textContent = t.duration || thDur.textContent;
  const thType = document.getElementById("thType");
  if (thType) thType.textContent = t.type || thType.textContent;

  // Small labels
  const labelCur = document.getElementById("labelCurrentDate");
  if (labelCur) labelCur.textContent = t.currentDate || labelCur.textContent;
  const labelTot = document.getElementById("labelTotalToday");
  if (labelTot) labelTot.textContent = t.totalToday || labelTot.textContent;

  // Modal titles
  const datePickerTitle = document.getElementById("datePickerTitle");
  if (datePickerTitle)
    datePickerTitle.textContent = t.setDate || datePickerTitle.textContent;
  const manualModalTitle = document.getElementById("manualModalTitle");
  if (manualModalTitle)
    manualModalTitle.textContent =
      t.manualEntry || manualModalTitle.textContent;

  const labelTimelineTotal = document.getElementById("labelTimelineTotal");
  if (labelTimelineTotal)
    labelTimelineTotal.textContent =
      t.totalTime || labelTimelineTotal.textContent;

  // Habit modal labels/buttons
  const labelHabitName = document.getElementById("labelHabitName");
  if (labelHabitName)
    labelHabitName.textContent = t.taskName || labelHabitName.textContent;
  const labelHabitGoal = document.getElementById("labelHabitGoal");
  if (labelHabitGoal)
    labelHabitGoal.textContent = t.goalMinutes || labelHabitGoal.textContent;
  const habitSaveBtn = document.getElementById("habitSaveBtn");
  if (habitSaveBtn)
    habitSaveBtn.textContent = t.save || habitSaveBtn.textContent;
  const habitCancelBtn = document.getElementById("habitCancelBtn");
  if (habitCancelBtn)
    habitCancelBtn.textContent = t.cancel || habitCancelBtn.textContent;

  // Manual entry modal labels/buttons
  const labelManualTaskName = document.getElementById("labelManualTaskName");
  if (labelManualTaskName)
    labelManualTaskName.textContent =
      t.taskName || labelManualTaskName.textContent;
  const labelManualDuration = document.getElementById("labelManualDuration");
  if (labelManualDuration)
    labelManualDuration.textContent =
      t.duration || labelManualDuration.textContent;
  const manualSaveBtnEl = document.getElementById("manualSaveBtn");
  if (manualSaveBtnEl)
    manualSaveBtnEl.textContent = t.save || manualSaveBtnEl.textContent;
  const manualCancelBtnEl = document.getElementById("manualCancelBtn");
  if (manualCancelBtnEl)
    manualCancelBtnEl.textContent = t.cancel || manualCancelBtnEl.textContent;

  // OR label
  const orLabel = document.getElementById("orLabel");
  if (orLabel) orLabel.textContent = t.orLabel || orLabel.textContent;

  // Help page content (if present on this page)
  const helpTitleEl = document.getElementById("helpTitle");
  if (helpTitleEl)
    helpTitleEl.textContent = t.helpTitle || helpTitleEl.textContent;
  const helpBodyEl = document.getElementById("helpBody");
  if (helpBodyEl) helpBodyEl.innerText = t.helpContent || helpBodyEl.innerText;
}

function setLanguage(lang) {
  currentLang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  updateSettings({ language: lang });
  updateUI();
}

function selectTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  document.body.className = theme;

  // Update aria-label for accessibility
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme);
  }

  updateSettings({ theme: theme });
}

function loadSettings() {
  const settings = getSettings();
  currentLang = settings.language || "en";
  currentTheme = settings.theme || "light";

  // Set on first load - before button is queried
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.body.className = currentTheme;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  // After page load, set aria-label on button
  window.addEventListener(
    "load",
    () => {
      const themeToggle = document.getElementById("theme-toggle");
      if (themeToggle) {
        themeToggle.setAttribute("aria-label", currentTheme);
      }
    },
    { once: true },
  );

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function switchView(view) {
  currentView = view;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((v) => {
    v.classList.add("hidden");
  });
  document.getElementById(view + "View").classList.remove("hidden");
  updateCurrentView();
}

function updateCurrentView() {
  const settings = getSettings();
  const currentDate = settings.currentDayDate;

  if (currentDate) {
    document.getElementById("currentDateDisplay").textContent = currentDate;
    const sessions = getSessions(dateFromYMD(currentDate));
    const totalMinutes = sessions.reduce(
      (sum, s) => sum + s.duration_minutes,
      0,
    );
    document.getElementById("totalTodayDisplay").textContent =
      formatDuration(totalMinutes);
  }

  if (currentView === "stopwatch") {
    updateStopwatchView();
  } else if (currentView === "timeline") {
    updateTimelineView();
  } else if (currentView === "visual") {
    updateVisualTimeline();
  } else if (currentView === "habits") {
    updateHabitsView();
  } else if (currentView === "reports") {
    updateReportsView();
  } else if (currentView === "export") {
    updateRecentBackupsList();
  }
}

function updateStopwatchView() {
  const tasks = getTasks();
  const settings = getSettings();
  const currentDate = settings.currentDayDate;

  // Start with today's daily goals (if any) so they appear at the top
  const data = getData();
  let merged = [];
  if (currentDate) {
    const day = (data.dailyRecords || []).find((d) => d.date === currentDate);
    if (day && Array.isArray(day.dailyGoals)) {
      merged = day.dailyGoals.map((g) => ({
        id: g.id,
        name: g.name,
        daily_goal_minutes: g.daily_goal_minutes,
        color: g.color,
        active: g.active !== false,
      }));
    }
  }

  // Append master tasks, avoiding duplicates by name (case-insensitive)
  const seen = new Set(merged.map((t) => (t.name || "").toLowerCase()));
  tasks.forEach((t) => {
    if (!seen.has((t.name || "").toLowerCase())) {
      merged.push(t);
      seen.add((t.name || "").toLowerCase());
    }
  });

  const select = document.getElementById("taskSelect");
  const placeholder =
    translations[currentLang]?.selectTask || "Select task from daily goals";
  select.innerHTML = `<option value="">${placeholder}</option>`;
  merged.forEach((task) => {
    const option = document.createElement("option");
    option.value = task.name;
    option.textContent = task.name;
    select.appendChild(option);
  });
}

function updateTimelineView() {
  const settings = getSettings();
  const currentDate = settings.currentDayDate;
  if (!currentDate) return;

  const sessions = getSessions(dateFromYMD(currentDate));
  const tbody = document.getElementById("timelineBody");
  const total = sessions.reduce((sum, s) => sum + s.duration_minutes, 0);
  document.getElementById("timelineTotal").textContent = formatDuration(total);

  if (sessions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center opacity-60">${translations[currentLang]?.noSessions || "No sessions recorded yet"}</td></tr>`;
    return;
  }

  // Render rows WITHOUT notes column (escape user-provided text)
  tbody.innerHTML = sessions
    .map((s) => {
      const taskName = escapeHtml(s.task_name);
      const entryType = escapeHtml(s.entry_type);
      return `
        <tr>
            <td class="font-bold">${taskName}</td>
            <td>${new Date(s.start_time).toLocaleTimeString()}</td>
            <td>${new Date(s.end_time).toLocaleTimeString()}</td>
            <td class="font-bold">${formatDuration(s.duration_minutes)}</td>
            <td><span class="badge ${
              s.entry_type === "stopwatch" ? "badge-blue" : "badge-green"
            }">${entryType}</span></td>
        </tr>
    `;
    })
    .join("");
}

function updateVisualTimeline() {
  const settings = getSettings();
  const currentDate = settings.currentDayDate;
  if (!currentDate) {
    document.getElementById("visualTimelineContent").innerHTML =
      '<div class="text-center opacity-60">Please set a date first</div>';
    return;
  }

  const sessions = getSessions(dateFromYMD(currentDate));
  const tasks = getTasks();

  if (sessions.length === 0) {
    document.getElementById("visualTimelineContent").innerHTML =
      `<div class="text-center opacity-60">${translations[currentLang]?.noSessions || "No sessions recorded yet"}</div>`;
    return;
  }

  const getTaskColor = (taskName) => {
    const task = tasks.find(
      (t) => t.name.toLowerCase() === taskName.toLowerCase(),
    );
    return task?.color || "#3b82f6";
  };

  const getSessionPosition = (session) => {
    const startTime = new Date(session.start_time);
    const endTime = new Date(session.end_time);

    const startHour = startTime.getHours();
    const startMinute = startTime.getMinutes();
    const endHour = endTime.getHours();
    const endMinute = endTime.getMinutes();

    const startPos = ((startHour + startMinute / 60) / 24) * 100;
    const endPos = ((endHour + endMinute / 60) / 24) * 100;
    const width = endPos - startPos;

    return { left: startPos, width: width };
  };

  const groupedSessions = sessions.reduce((acc, session) => {
    if (!acc[session.task_name]) {
      acc[session.task_name] = [];
    }
    acc[session.task_name].push(session);
    return acc;
  }, {});

  let html = '<div class="timeline-ruler">';
  for (let i = 0; i < 24; i++) {
    html += `<div class="timeline-hour">${i}:00</div>`;
  }
  html += "</div>";

  Object.entries(groupedSessions).forEach(([taskName, taskSessions]) => {
    const safeTaskName = escapeHtml(taskName);
    const color = getTaskColor(taskName);
    html += `
            <div style="background: ${
              currentTheme === "dark" ? "#374151" : "#f9fafb"
            }; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
                <div class="font-bold mb-4">${safeTaskName}</div>
                <div class="timeline-row">
                    <div class="timeline-grid">
                        ${Array.from(
                          { length: 24 },
                          () => '<div class="timeline-grid-line"></div>',
                        ).join("")}
                    </div>
                    ${taskSessions
                      .map((session) => {
                        const pos = getSessionPosition(session);
                        const title = escapeHtml(
                          `${session.task_name}: ${new Date(
                            session.start_time,
                          ).toLocaleTimeString()} - ${new Date(
                            session.end_time,
                          ).toLocaleTimeString()} (${
                            session.duration_minutes
                          }m)`,
                        );
                        return `
                            <div class="timeline-block" 
                                 style="left: ${pos.left}%; width: ${
                                   pos.width
                                 }%; background: ${color};"
                                 title="${title}">
                                ${escapeHtml(String(session.duration_minutes))}m
                            </div>
                        `;
                      })
                      .join("")}
                </div>
            </div>
        `;
  });

  document.getElementById("visualTimelineContent").innerHTML = html;
}

function updateHabitsView() {
  const data = getData();
  const settings = getSettings();
  const currentDate = settings.currentDayDate;

  if (!currentDate) {
    document.getElementById("habitsContent").innerHTML =
      '<div class="card text-center opacity-60">Please set a date first</div>';
    return;
  }

  const dayRecord = data.dailyRecords.find((r) => r.date === currentDate);
  let dailyGoals = dayRecord?.dailyGoals || [];

  if (dailyGoals.length === 0) {
    const tasks = getTasks();
    dailyGoals = tasks.map((t) => ({
      id: t.id,
      name: t.name,
      daily_goal_minutes: t.daily_goal_minutes || 60,
      color: t.color,
      active: true,
    }));
  }

  const sessions = getSessions(new Date(currentDate));
  const calculateProgress = (habitName) => {
    return sessions
      .filter((s) => s.task_name.toLowerCase() === habitName.toLowerCase())
      .reduce((sum, s) => sum + s.duration_minutes, 0);
  };

  if (dailyGoals.length === 0) {
    document.getElementById("habitsContent").innerHTML =
      '<div class="card text-center opacity-60">No daily goals set yet</div>';
    return;
  }

  const container = document.getElementById("habitsContent");
  container.innerHTML = "";

  const today = ymdLocal(new Date());
  const allowEditGlobal =
    currentDate === today &&
    !(dayRecord && (dayRecord.locked || dayRecord.locked_at));

  dailyGoals
    .filter((g) => g.active)
    .forEach((goal) => {
      const progress = calculateProgress(goal.name);
      const percent = Math.min((progress / goal.daily_goal_minutes) * 100, 100);
      const isCompleted = progress >= goal.daily_goal_minutes;

      const card = document.createElement("div");
      card.className = "card";

      const header = document.createElement("div");
      header.className = "flex justify-between items-center mb-4";

      const title = document.createElement("h3");
      title.textContent = goal.name;

      const controls = document.createElement("div");
      controls.style.display = "flex";
      controls.style.gap = "0.5rem";
      controls.style.alignItems = "center";

      const progressText = document.createElement("span");
      progressText.className = "text-xl font-bold";
      const t2 = translations[currentLang] || {};
      const minuteLabelShort = t2.minutes || "min";
      progressText.textContent = `${progress} / ${goal.daily_goal_minutes} ${minuteLabelShort}`;

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "btn-secondary";
      editBtn.style.background = "#6b7280";
      editBtn.style.color = "#fff";
      editBtn.style.borderRadius = "0.5rem";
      editBtn.style.padding = "0.25rem 0.75rem";
      editBtn.style.fontSize = "0.875rem";
      editBtn.textContent = translations[currentLang]?.edit || "Edit";
      editBtn.addEventListener(
        "mouseover",
        () => (editBtn.style.background = "#4b5563"),
      );
      editBtn.addEventListener(
        "mouseout",
        () => (editBtn.style.background = "#6b7280"),
      );
      editBtn.addEventListener("click", () => editHabit(goal.id));
      if (!allowEditGlobal) editBtn.style.display = "none";

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "btn-danger";
      delBtn.style.padding = "0.25rem 0.75rem";
      delBtn.style.fontSize = "0.875rem";
      delBtn.textContent = translations[currentLang]?.delete || "Delete";
      delBtn.addEventListener("click", () => deleteHabit(goal.id));
      if (!allowEditGlobal) delBtn.style.display = "none";

      controls.appendChild(progressText);
      controls.appendChild(editBtn);
      controls.appendChild(delBtn);

      header.appendChild(title);
      header.appendChild(controls);

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      const fill = document.createElement("div");
      fill.className = "progress-fill";
      fill.style.width = `${percent}%`;
      fill.style.background = goal.color || "#3b82f6";
      progressBar.appendChild(fill);

      const footer = document.createElement("div");
      footer.className = "flex justify-between items-center mt-2";

      const percentText = document.createElement("span");
      percentText.className =
        "font-bold" + (isCompleted ? " text-green-600" : "");
      const t = translations[currentLang] || {};
      const completedLabel = t.completed || "✓ Completed";
      percentText.textContent = `${Math.round(percent)}% ${
        isCompleted ? completedLabel : ""
      }`;

      footer.appendChild(percentText);
      if (!isCompleted) {
        const remaining = document.createElement("span");
        remaining.className = "text-sm opacity-60";
        const rem = goal.daily_goal_minutes - progress;
        const t = translations[currentLang] || {};
        const tpl = t.minRemaining || "{n} min remaining";
        remaining.textContent = tpl.replace("{n}", String(rem));
        footer.appendChild(remaining);
      }

      card.appendChild(header);
      card.appendChild(progressBar);
      card.appendChild(footer);

      container.appendChild(card);
    });
}

// Open add-goal modal
function showHabitModal() {
  editingHabitId = null;
  document.getElementById("habitModalTitle").textContent = "Add Goal";
  document.getElementById("habitName").value = "";
  document.getElementById("habitGoal").value = "";
  showModal("habitModal");
}

// Copy yesterday's daily goals into today's dailyRecords (non-destructive, deduped)
function copyYesterdayGoals() {
  const settings = getSettings();
  const currentDate = settings.currentDayDate;
  if (!currentDate) {
    alert("Please set the current date first.");
    return;
  }

  const data = getData();
  const todayDate = dateFromYMD(currentDate);
  if (!todayDate) return;

  const yesterday = new Date(todayDate);
  yesterday.setDate(yesterday.getDate() - 1);
  const yYmd = ymdLocal(yesterday);

  const yRec = (data.dailyRecords || []).find((d) => d.date === yYmd);
  if (
    !yRec ||
    !Array.isArray(yRec.dailyGoals) ||
    yRec.dailyGoals.length === 0
  ) {
    alert("No goals found for yesterday to copy.");
    return;
  }

  // Ensure today's record exists
  let drIndex = data.dailyRecords.findIndex((d) => d.date === currentDate);
  if (drIndex === -1) {
    const newDr = {
      date: currentDate,
      total_minutes: 0,
      sessions_count: 0,
      locked_at: null,
      dailyGoals: [],
    };
    data.dailyRecords.push(newDr);
    drIndex = data.dailyRecords.length - 1;
  }

  const todayRec = data.dailyRecords[drIndex];
  todayRec.dailyGoals = todayRec.dailyGoals || [];

  const existing = new Set(
    todayRec.dailyGoals.map((g) => String(g.name || "").toLowerCase()),
  );
  let added = 0;

  yRec.dailyGoals.forEach((g) => {
    const key = String(g.name || "").toLowerCase();
    if (!existing.has(key)) {
      const copy = {
        id: Date.now() + Math.random(),
        name: g.name,
        daily_goal_minutes: g.daily_goal_minutes,
        color: g.color,
        active: g.active !== false,
      };
      todayRec.dailyGoals.push(copy);
      existing.add(key);
      added++;
    }
  });

  if (added === 0) {
    alert("No new goals were added (duplicates skipped).");
    return;
  }

  saveData(data);
  updateHabitsView();
  updateStopwatchView();
  alert(`Added ${added} goal(s) from yesterday.`);
}

// Edit an existing habit/task
function editHabit(habitId) {
  const data = getData();
  // Try to find master task first
  let task = data.tasks.find((t) => t.id == habitId);

  // If not found in tasks, try to find in today's dailyRecords.dailyGoals
  if (!task) {
    const settings = getSettings();
    const currentDate = settings.currentDayDate;
    if (currentDate) {
      const day = data.dailyRecords.find((d) => d.date === currentDate);
      if (day && Array.isArray(day.dailyGoals)) {
        const dg = day.dailyGoals.find((g) => g.id == habitId);
        if (dg) {
          // create a temporary task-like object for prefilling
          task = {
            id: dg.id,
            name: dg.name,
            daily_goal_minutes: dg.daily_goal_minutes,
            color: dg.color,
            active: dg.active,
          };
        }
      }
    }
  }

  if (!task) return;
  editingHabitId = task.id;
  document.getElementById("habitModalTitle").textContent =
    translations[currentLang]?.edit + " Goal" || "Edit Goal";
  document.getElementById("habitName").value = task.name || "";
  document.getElementById("habitGoal").value =
    task.daily_goal_minutes != null ? String(task.daily_goal_minutes) : "60";
  showModal("habitModal");
}

// Save a new habit or update an existing one
function saveHabit() {
  const nameEl = document.getElementById("habitName");
  const goalEl = document.getElementById("habitGoal");
  const name = nameEl ? String(nameEl.value || "").trim() : "";
  const goalRaw = goalEl ? String(goalEl.value || "").trim() : "";

  if (!name) {
    alert("Please fill required fields (task name).");
    return;
  }
  const parsed = parseInt(goalRaw, 10);
  if (isNaN(parsed) || parsed <= 0) {
    alert("Please enter a valid goal (minutes).");
    return;
  }
  const goalMinutes = parsed;

  const data = getData();

  if (editingHabitId) {
    const idx = data.tasks.findIndex((t) => t.id == editingHabitId);
    if (idx >= 0) {
      data.tasks[idx].name = name;
      data.tasks[idx].daily_goal_minutes = goalMinutes;
      if (!data.tasks[idx].active) data.tasks[idx].active = true;
      saveData(data);
    } else {
      const color = getAvailableColor(data.tasks || []);
      addTask({ name, daily_goal_minutes: goalMinutes, color });
    }

    // update dailyRecords entries referencing this id
    if (Array.isArray(data.dailyRecords)) {
      data.dailyRecords.forEach((dr) => {
        if (Array.isArray(dr.dailyGoals)) {
          const gi = dr.dailyGoals.findIndex((g) => g.id == editingHabitId);
          if (gi >= 0) {
            dr.dailyGoals[gi].name = name;
            dr.dailyGoals[gi].daily_goal_minutes = goalMinutes;
          }
        }
      });
      saveData(data);
    }
  } else {
    const color = getAvailableColor(data.tasks || []);
    const created = addTask({ name, daily_goal_minutes: goalMinutes, color });

    const settings = getSettings();
    const currentDate = settings.currentDayDate;
    if (currentDate) {
      let drIndex = data.dailyRecords.findIndex((d) => d.date === currentDate);
      if (drIndex === -1) {
        const newDr = {
          date: currentDate,
          total_minutes: 0,
          sessions_count: 0,
          locked_at: null,
          dailyGoals: [],
        };
        data.dailyRecords.push(newDr);
        drIndex = data.dailyRecords.length - 1;
      }
      const dailyRec = data.dailyRecords[drIndex];
      dailyRec.dailyGoals = dailyRec.dailyGoals || [];
      dailyRec.dailyGoals.push({
        id: created.id,
        name: created.name,
        daily_goal_minutes: created.daily_goal_minutes,
        color: created.color,
        active: true,
      });
      saveData(data);
    }
  }

  editingHabitId = null;
  closeModal("habitModal");
  loadData();
  updateCurrentView();
}

function deleteHabit(habitId) {
  if (
    !confirm(
      "Delete this goal? This will remove the goal from your tasks and daily goals.",
    )
  )
    return;

  const data = getData();

  // Remove from tasks list
  data.tasks = data.tasks.filter((t) => t.id != habitId);

  // Remove from any dailyRecords.dailyGoals arrays
  if (Array.isArray(data.dailyRecords)) {
    data.dailyRecords.forEach((dr) => {
      if (Array.isArray(dr.dailyGoals)) {
        dr.dailyGoals = dr.dailyGoals.filter((g) => g.id != habitId);
      }
    });
  }

  saveData(data);

  // Refresh UI
  loadData();
  updateCurrentView();

  alert("Goal deleted.");
}

// --- Custom Range / Reports helpers ---
function toggleCustomRange() {
  showCustomRange = !showCustomRange;
  const panel = document.getElementById("customRangePanel");
  if (!panel) return;
  panel.classList.toggle("hidden", !showCustomRange);
}

function applyCustomRange() {
  const s = document.getElementById("customStartDate");
  const e = document.getElementById("customEndDate");
  const start = s ? s.value : null;
  const end = e ? e.value : null;
  if (!start || !end) {
    alert("Please select both start and end dates.");
    return;
  }
  const sd = dateFromYMD(start);
  const ed = dateFromYMD(end);
  if (isNaN(sd.getTime()) || isNaN(ed.getTime()) || sd > ed) {
    alert("Invalid date range. Ensure start <= end.");
    return;
  }
  loadWeeklyData(sd, ed);
  showCustomRange = false;
  const panel = document.getElementById("customRangePanel");
  if (panel) panel.classList.add("hidden");
}

function loadWeeklyData(start, end) {
  const data = getData();
  // normalize start/end to local day bounds
  const sStart = startOfLocalDay(start);
  const sEnd = endOfLocalDay(end);
  const sessions = (data.sessions || []).filter((s) => {
    const sd = new Date(s.start_time);
    return sd >= sStart && sd <= sEnd;
  });
  renderReport(sessions, start, end);
}

function renderReport(sessions, start, end) {
  const reportsEl = document.getElementById("reportsContent");
  if (!reportsEl) return;
  const list = sessions || [];

  const totalMinutes = list.reduce((sum, s) => sum + s.duration_minutes, 0);

  // Group sessions by local date (YYYY-MM-DD)
  const dailyTotals = list.reduce((acc, s) => {
    const d = ymdLocal(new Date(s.start_time));
    acc[d] = (acc[d] || 0) + s.duration_minutes;
    return acc;
  }, {});

  const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const daysCount = daysDiff + 1;

  const averageDailyAll = daysCount ? Math.round(totalMinutes / daysCount) : 0;

  const activeDays = Object.keys(dailyTotals).length;
  const averageDailyActive = activeDays
    ? Math.round(
        Object.values(dailyTotals).reduce((a, b) => a + b, 0) / activeDays,
      )
    : 0;

  // Longest session
  const longestSession = list.length
    ? list.reduce(
        (max, s) => (s.duration_minutes > max ? s.duration_minutes : max),
        0,
      )
    : 0;

  // Most productive day
  let mostProductive = { date: null, minutes: 0 };
  Object.entries(dailyTotals).forEach(([date, minutes]) => {
    if (minutes > mostProductive.minutes) {
      mostProductive = { date, minutes };
    }
  });

  // Top tasks
  const taskStats = list.reduce((acc, s) => {
    acc[s.task_name] = (acc[s.task_name] || 0) + s.duration_minutes;
    return acc;
  }, {});
  const sortedTasks = Object.entries(taskStats)
    .map(([name, minutes]) => ({ name, minutes }))
    .sort((a, b) => b.minutes - a.minutes);

  const rangeLabel =
    start && end
      ? `${ymdLocal(start)} → ${ymdLocal(end)}`
      : translations[currentLang]?.rangeLabel || "Last 7 days";

  // Build stacked cards like the screenshot
  const sortedDaily = Object.entries(dailyTotals)
    .map(([date, minutes]) => ({ date, minutes }))
    .sort((a, b) => b.minutes - a.minutes);

  const maxDaily = sortedDaily.length ? sortedDaily[0].minutes : 0;

  let html = "";

  // Weekly Total (large stacked card)
  html += `
    <div class="report-card">
      <div class="card-label">Range: ${rangeLabel}</div>
      <div class="card-value">${formatDuration(totalMinutes)}</div>
      <div class="card-subtext">${list.length} ${translations[currentLang]?.sessions || "sessions"}</div>
    </div>
  `;

  // Average Daily card
  html += `
    <div class="report-card">
      <div class="card-label">${translations[currentLang]?.averageDaily || "Average Daily"}</div>
      <div class="card-value" style="color:#10b981;">${formatDuration(averageDailyActive || averageDailyAll)}</div>
      <div class="card-subtext">${(translations[currentLang]?.activeDaysTpl || "{active} active days — {total} total days").replace("{active}", String(activeDays)).replace("{total}", String(daysCount))}</div>
    </div>
  `;

  // Most Productive day card
  html += `
    <div class="report-card">
      <div class="card-label">${translations[currentLang]?.mostProductiveDay || "Most Productive Day"}</div>
      <div class="card-value" style="color:#a78bfa;">${mostProductive.date ? new Date(mostProductive.date).toLocaleDateString(currentLang === "ar" ? "ar-EG" : undefined, { weekday: "short", month: "short", day: "numeric" }) : "-"}</div>
      <div class="card-subtext">${mostProductive.minutes ? formatDuration(mostProductive.minutes) : "-"}</div>
    </div>
  `;

  // Day Comparison
  html += `<h3 class="font-bold text-xl mb-2">${translations[currentLang]?.dayComparison || "Day Comparison"}</h3>`;
  html += `<div class="day-comparison">`;
  if (sortedDaily.length === 0) {
    html += `<div class="text-center opacity-60">${translations[currentLang]?.noDataRange || "No data for this range"}</div>`;
  } else {
    sortedDaily.forEach((d) => {
      const pct = maxDaily ? Math.round((d.minutes / maxDaily) * 100) : 0;
      const pretty = formatDuration(d.minutes);
      const label = new Date(d.date).toLocaleDateString(
        currentLang === "ar" ? "ar-EG" : undefined,
        {
          weekday: "short",
          month: "short",
          day: "numeric",
        },
      );
      html += `
        <div class="day-row">
          <div class="label">${label}</div>
          <div class="bar-outer"><div class="bar-inner" style="width:${pct}%;"></div></div>
          <div class="value">${pretty}</div>
        </div>
      `;
    });
  }
  html += `</div>`;

  // Top Tasks
  html += `<h3 class="font-bold text-xl mb-2">${translations[currentLang]?.topTasks || "Top Tasks"}</h3><div class="top-tasks">`;
  if (sortedTasks.length === 0) {
    html += `<div class="text-center opacity-60">${translations[currentLang]?.noTasksRange || "No tasks in range"}</div>`;
  } else {
    sortedTasks.forEach((task, idx) => {
      const safeTask = escapeHtml(task.name);
      const percent = totalMinutes
        ? Math.round((task.minutes / totalMinutes) * 100)
        : 0;
      html += `
        <div class="task-item">
          <div class="task-row"><div class="font-bold">${idx + 1}. ${safeTask}</div><div class="font-bold">${formatDuration(task.minutes)} (${percent}%)</div></div>
          <div class="task-progress-outer"><div class="task-progress-inner" style="width:${percent}%;"></div></div>
        </div>
      `;
    });
  }
  html += `</div>`;

  reportsEl.innerHTML = html;
}

function updateReportsView() {
  const end = new Date();
  const start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
  // default: last 7 days
  loadWeeklyData(start, end);
}

// Timer functions
function startTimer() {
  selectedTask =
    document.getElementById("newTaskInput").value ||
    document.getElementById("taskSelect").value;
  if (!selectedTask) {
    alert(
      translations[currentLang]?.pleaseSelectTask ||
        "Please select or create a task",
    );
    return;
  }

  const settings = getSettings();
  if (!settings.currentDayDate) {
    alert("Please set the date first");
    return;
  }

  // show current task
  const taskEl = document.getElementById("currentTaskDisplay");
  if (taskEl) {
    taskEl.textContent = selectedTask;
    taskEl.classList.remove("hidden");
  }

  startTime = Date.now();
  isRunning = true;
  isPaused = false;
  elapsedSeconds = 0;

  document.getElementById("taskSelector").classList.add("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("pauseBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("resetBtn").classList.remove("hidden");

  timerInterval = setInterval(() => {
    elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    updateStopwatchDisplay();
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timerInterval);
  document.getElementById("pauseBtn").classList.add("hidden");
  document.getElementById("resumeBtn").classList.remove("hidden");
}

function resumeTimer() {
  isPaused = false;
  startTime = Date.now() - elapsedSeconds * 1000;
  document.getElementById("resumeBtn").classList.add("hidden");
  document.getElementById("pauseBtn").classList.remove("hidden");

  timerInterval = setInterval(() => {
    elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    updateStopwatchDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  const endTime = Date.now();
  const duration = Math.floor(elapsedSeconds / 60);

  const session = {
    task_name: selectedTask,
    start_time: new Date(startTime).toISOString(),
    end_time: new Date(endTime).toISOString(),
    duration_minutes: duration,
    entry_type: "stopwatch",
    notes: "",
  };

  addSession(session);

  // hide current task after stopping
  const taskEl = document.getElementById("currentTaskDisplay");
  if (taskEl) {
    taskEl.textContent = "";
    taskEl.classList.add("hidden");
  }

  resetTimer();
  updateCurrentView();
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  isPaused = false;
  elapsedSeconds = 0;
  startTime = null;
  selectedTask = "";

  // hide current task on reset
  const taskEl = document.getElementById("currentTaskDisplay");
  if (taskEl) {
    taskEl.textContent = "";
    taskEl.classList.add("hidden");
  }

  document.getElementById("taskSelector").classList.remove("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("pauseBtn").classList.add("hidden");
  document.getElementById("resumeBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("resetBtn").classList.add("hidden");
  document.getElementById("newTaskInput").value = "";
  document.getElementById("taskSelect").value = "";
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const h = Math.floor(elapsedSeconds / 3600);
  const m = Math.floor((elapsedSeconds % 3600) / 60);
  const s = elapsedSeconds % 60;
  document.getElementById("stopwatchDisplay").textContent = `${String(
    h,
  ).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(
    2,
    "0",
  )}`;
}

// Modal functions
function showModal(id) {
  document.getElementById(id).classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}

function showDatePicker() {
  document.getElementById("datePicker").value = new Date()
    .toISOString()
    .split("T")[0];
  showModal("datePickerModal");
}

function setDate() {
  const date = document.getElementById("datePicker").value;
  if (!date) return;

  updateSettings({ currentDayDate: date });
  closeModal("datePickerModal");
  updateCurrentView();
  loadData();
}

function endDay() {
  if (!confirm("End this day? This will lock the current data.")) return;

  const settings = getSettings();
  const currentDate = settings.currentDayDate;
  if (!currentDate) return;

  const data = getData();
  const sessions = getSessions(new Date(currentDate));
  const totalMinutes = sessions.reduce((sum, s) => sum + s.duration_minutes, 0);

  const dayRecord = {
    date: currentDate,
    total_minutes: totalMinutes,
    sessions_count: sessions.length,
    locked_at: new Date().toISOString(),
    locked: true,
    sessions: sessions,
    dailyGoals: [],
  };

  data.dailyRecords.push(dayRecord);
  updateSettings({ currentDayDate: null });
  saveData(data);

  alert("Day ended successfully!");
  showDatePicker();
}

function showManualEntry() {
  const tasks = getTasks();
  const datalist = document.getElementById("taskList");
  if (datalist) {
    datalist.innerHTML = (tasks || [])
      .map((t) => `<option value="${escapeHtml(t.name)}">`)
      .join("");
  }

  const taskInput = document.getElementById("manualTaskName");
  const durationInput = document.getElementById("manualDuration");

  if (taskInput) taskInput.value = "";
  if (durationInput) durationInput.value = "";

  showModal("manualEntryModal");
}

// Helper to escape values inserted into datalist/options
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Replace/ensure saveManualEntry reads fields, creates missing task, and saves session
function saveManualEntry() {
  const taskEl = document.getElementById("manualTaskName");
  const durationEl = document.getElementById("manualDuration");

  const taskName = taskEl ? String(taskEl.value || "").trim() : "";
  const durationRaw = durationEl ? String(durationEl.value || "").trim() : "";

  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }
  if (!durationRaw) {
    alert("Please enter a duration (HH:MM or minutes).");
    return;
  }

  // parse duration: allow "HH:MM" or plain minutes
  let totalMinutes = 0;
  if (durationRaw.includes(":")) {
    const parts = durationRaw.split(":").map((p) => parseInt(p, 10));
    if (
      parts.length !== 2 ||
      isNaN(parts[0]) ||
      isNaN(parts[1]) ||
      parts[0] < 0 ||
      parts[1] < 0
    ) {
      alert("Invalid duration. Use HH:MM or minutes.");
      return;
    }
    totalMinutes = parts[0] * 60 + parts[1];
  } else {
    const asNum = Number(durationRaw);
    if (isNaN(asNum) || asNum < 0) {
      alert("Invalid duration. Use HH:MM or minutes.");
      return;
    }
    totalMinutes = Math.floor(asNum);
  }

  // Manual entries should NOT create tasks/goals.
  // Only save a session for the given task name.

  const now = new Date();
  const start = new Date(now.getTime() - totalMinutes * 60000);

  const session = {
    task_name: taskName,
    start_time: start.toISOString(),
    end_time: now.toISOString(),
    duration_minutes: totalMinutes,
    entry_type: "manual",
  };

  addSession(session);

  // Close modal, refresh UI
  closeModal("manualEntryModal");
  loadData();
  updateCurrentView();
}

// Backup tracking
function getBackups() {
  const backups = localStorage.getItem("timeflow_backups");
  return backups ? JSON.parse(backups) : [];
}

function saveBackupMetadata(metadata) {
  const backups = getBackups();
  backups.unshift(metadata);
  if (backups.length > 10) backups.pop();
  localStorage.setItem("timeflow_backups", JSON.stringify(backups));
  updateRecentBackupsList();
}

function updateRecentBackupsList() {
  const backups = getBackups();
  const container = document.getElementById("recentBackupsList");
  if (!container) return;

  if (backups.length === 0) {
    container.innerHTML = `<div class="text-center opacity-60">${translations[currentLang]?.noBackups || "No backups yet"}</div>`;
    return;
  }

  const html = backups
    .slice(0, 5)
    .map((backup) => {
      const date = new Date(backup.exported_at);
      const dateStr = date.toLocaleDateString();
      const timeStr = date.toLocaleTimeString();
      const typeLabel = backup.type.toUpperCase();
      return `
        <div style="display: flex; gap: 1rem; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border-primary);">
          <div style="background: #3b82f6; color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600; min-width: 50px; text-align: center;">${typeLabel}</div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">${dateStr} ${timeStr}</div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

// Export functions
function exportJSON() {
  const data = getData();
  const now = new Date();
  const exportPackage = {
    ...data,
    export_metadata: {
      exported_at: now.toISOString(),
      version: "1.0.0",
      app_name: "TimeTrack",
    },
  };

  const blob = new Blob([JSON.stringify(exportPackage, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `focustrack-backup-${ymdLocal(now)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  saveBackupMetadata({
    exported_at: now.toISOString(),
    type: "json",
    sessions_count: data.sessions.length,
  });

  alert("✅ Backup downloaded successfully!");
}

function exportCSV() {
  const data = getData();
  const sessions = data.sessions;

  if (sessions.length === 0) {
    alert("No sessions to export!");
    return;
  }

  // CSV WITHOUT notes column
  const csvSafe = (cell) => {
    const str = String(cell ?? "");
    // Escape double quotes
    const escaped = str.replace(/"/g, '""');
    // Prevent CSV/Excel formula injection by prefixing with a single quote
    if (/^[=+\-@]/.test(escaped)) return "'" + escaped;
    return escaped;
  };

  const csv = [
    ["Task Name", "Start Time", "End Time", "Duration (min)", "Type"],
    ...sessions.map((s) => [
      csvSafe(s.task_name),
      csvSafe(s.start_time),
      csvSafe(s.end_time),
      csvSafe(s.duration_minutes),
      csvSafe(s.entry_type),
    ]),
  ]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `focustrack-sessions-${ymdLocal(new Date())}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Save backup metadata
  saveBackupMetadata({
    exported_at: new Date().toISOString(),
    type: "csv",
    sessions_count: sessions.length,
  });

  alert(`✅ ${sessions.length} sessions exported successfully!`);
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      // Basic structure check
      if (!imported || typeof imported !== "object") {
        throw new Error("Invalid backup file format");
      }

      const currentData = getData();

      // Helper: safe object checker (no prototype keys)
      const isPlain = (obj) => {
        if (!obj || typeof obj !== "object") return false;
        if (Object.prototype.toString.call(obj) !== "[object Object]")
          return false;
        if (Object.prototype.hasOwnProperty.call(obj, "__proto__"))
          return false;
        return true;
      };

      const sanitizeSession = (s) => {
        if (!isPlain(s)) return null;
        return {
          id: s.id,
          task_name: String(s.task_name || "").slice(0, 200),
          start_time: String(s.start_time || ""),
          end_time: String(s.end_time || ""),
          duration_minutes: Number(s.duration_minutes) || 0,
          entry_type: String(s.entry_type || "manual").slice(0, 50),
        };
      };

      const sanitizeTask = (t) => {
        if (!isPlain(t)) return null;
        return {
          id: t.id,
          name: String(t.name || "").slice(0, 200),
          daily_goal_minutes: Number(t.daily_goal_minutes) || 0,
          color: String(t.color || "").slice(0, 50),
          active: !!t.active,
          created_at: String(t.created_at || new Date().toISOString()),
        };
      };

      // Merge sessions safely
      const existingSessionIds = new Set(currentData.sessions.map((s) => s.id));
      const importedSessions = Array.isArray(imported.sessions)
        ? imported.sessions
        : [];
      const newSessions = [];
      importedSessions.forEach((s) => {
        const sanitized = sanitizeSession(s);
        if (sanitized && !existingSessionIds.has(sanitized.id)) {
          newSessions.push(sanitized);
        }
      });
      currentData.sessions.push(...newSessions);

      // Merge tasks safely
      const existingTaskNames = new Set(
        currentData.tasks.map((t) => String(t.name).toLowerCase()),
      );
      const importedTasks = Array.isArray(imported.tasks) ? imported.tasks : [];
      const newTasks = [];
      importedTasks.forEach((t) => {
        const sanitized = sanitizeTask(t);
        if (
          sanitized &&
          !existingTaskNames.has(String(sanitized.name).toLowerCase())
        ) {
          newTasks.push(sanitized);
        }
      });
      currentData.tasks.push(...newTasks);

      // Merge daily records safely
      if (Array.isArray(imported.dailyRecords)) {
        imported.dailyRecords.forEach((importedDay) => {
          if (!isPlain(importedDay)) return;
          const safeDay = {
            date: String(importedDay.date || ""),
            total_minutes: Number(importedDay.total_minutes) || 0,
            sessions_count: Number(importedDay.sessions_count) || 0,
            locked_at: importedDay.locked_at
              ? String(importedDay.locked_at)
              : null,
            locked: !!importedDay.locked,
            sessions: Array.isArray(importedDay.sessions)
              ? importedDay.sessions.map(sanitizeSession).filter(Boolean)
              : [],
            dailyGoals: Array.isArray(importedDay.dailyGoals)
              ? importedDay.dailyGoals
                  .map((g) => {
                    if (!isPlain(g)) return null;
                    return {
                      id: g.id,
                      name: String(g.name || "").slice(0, 200),
                      daily_goal_minutes: Number(g.daily_goal_minutes) || 0,
                      color: String(g.color || "").slice(0, 50),
                      active: !!g.active,
                    };
                  })
                  .filter(Boolean)
              : [],
          };

          const existingDayIndex = currentData.dailyRecords.findIndex(
            (d) => d.date === safeDay.date,
          );
          if (existingDayIndex >= 0) {
            currentData.dailyRecords[existingDayIndex] = safeDay;
          } else {
            currentData.dailyRecords.push(safeDay);
          }
        });
      }

      saveData(currentData);
      loadData();

      alert(
        `✅ Import Successful!\n\nImported:\n• ${
          newSessions.length
        } sessions\n• ${newTasks.length} tasks\n• ${
          imported.dailyRecords?.length || 0
        } daily records`,
      );
    } catch (err) {
      alert(`❌ Import Failed: ${err.message}`);
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

// Utility functions
function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const t = translations[currentLang] || {};
  const hourLabel = t.hourLabel || "h";
  const minuteLabel = t.minuteLabel || "m";
  return `${h}${hourLabel} ${m}${minuteLabel}`;
}

function loadData() {
  updateCurrentView();
}

// Initialize app
window.addEventListener("DOMContentLoaded", init);
