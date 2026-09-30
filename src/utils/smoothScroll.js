/**
 * Tiện ích cuộn trang chậm rãi, mượt mà với đường cong gia tốc cao cấp (Ease-in-out Cubic)
 * Tự động căn chỉnh offset điểm dừng đẹp nhất cho từng section và loại bỏ dấu '#' trên URL.
 */

// Điểm dừng tối ưu thẩm mỹ (offset từ đỉnh màn hình xuống để chừa header và canh góc nhìn đẹp nhất)
const SECTION_OFFSETS = {
  top: 0,
  "trang-chu": 0,
  "noi-nghi-lai": 70,
  "phong-nghi": 75,
  "tien-nghi": 85,
  "hinh-anh": 75,
  "vi-tri": 85,
  "lien-he": 70,
};

// Hàm gia tốc Ease-In-Out Cubic (khởi hành êm ái, lướt đều và hãm phanh mượt như nhung)
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(target, customOffset) {
  if (typeof window === "undefined") return;

  const rawId = (target || "").replace(/^#/, "").trim();

  let targetY = 0;
  if (!rawId || rawId === "top" || rawId === "trang-chu") {
    targetY = 0;
  } else {
    const elem = document.getElementById(rawId);
    if (!elem) return;

    const offset = customOffset ?? (SECTION_OFFSETS[rawId] || 75);
    const elemTop = elem.getBoundingClientRect().top;
    const currentY = window.pageYOffset || document.documentElement.scrollTop;
    targetY = elemTop + currentY - offset;
  }

  // Giới hạn trong phạm vi cuộn của trang
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  targetY = Math.max(0, Math.min(targetY, maxScroll));

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetY - startY;

  // Nếu đã ở đúng vị trí thì không cần cuộn
  if (Math.abs(distance) < 2) {
    cleanUrlHash();
    return;
  }

  // Xóa dấu # trên thanh URL ngay lập tức để URL luôn sạch đẹp
  cleanUrlHash();

  // Thời lượng cuộn chậm rãi, tỉ lệ thuận với khoảng cách nhưng trong khoảng 850ms - 1150ms
  const duration = Math.min(1150, Math.max(850, Math.abs(distance) * 0.45));

  let startTime = null;

  function animationStep(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      window.requestAnimationFrame(animationStep);
    } else {
      cleanUrlHash();
    }
  }

  window.requestAnimationFrame(animationStep);
}

// Xóa dấu # trên thanh URL mà không làm giật trang hay load lại
export function cleanUrlHash() {
  if (typeof window === "undefined") return;
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

// Xử lý sự kiện click trên các thẻ <a> hoặc <button> điều hướng
export function handleNavClick(e, targetId, onAfterScroll) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  smoothScrollTo(targetId);
  if (onAfterScroll && typeof onAfterScroll === "function") {
    onAfterScroll();
  }
}
