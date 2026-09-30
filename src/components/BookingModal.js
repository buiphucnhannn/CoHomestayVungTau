"use client";

import { useState } from "react";

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom = "Phòng tiêu chuẩn",
}) {
  const [selectedRoom, setSelectedRoom] = useState(initialRoom);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg bg-[#EAF1EB] rounded-3xl shadow-2xl border border-[#D5E3D8] p-6 sm:p-8 overflow-hidden animate-soft-pulse">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#E0EBE3] hover:bg-[#D5E3D8] text-[#143827] flex items-center justify-center transition-colors"
          aria-label="Đóng cửa sổ"
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#143827] text-white flex items-center justify-center mx-auto shadow-lg text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#143827]">
              Cảm ơn quý khách!
            </h3>
            <p className="text-sm text-[#5B6A5F] max-w-xs mx-auto">
              Cỏ Homestay đã nhận thông tin và sẽ gọi điện/nhắn Zalo để tư vấn giá ưu đãi cho bạn ngay nhé!
            </p>
          </div>
        ) : (
          <div>
            <span className="text-[11px] tracking-[0.2em] font-semibold text-[#C58940] uppercase">
              ĐẶT PHÒNG CỎ HOMESTAY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#143827] mt-1 mb-4">
              Đặt phòng nhanh chóng
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#143827] mb-1">
                  Loại phòng quan tâm
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#143827]"
                >
                  <option value="Phòng tiêu chuẩn">Phòng tiêu chuẩn - Từ 650.000đ/đêm</option>
                  <option value="Phòng view biển">Phòng view biển - Từ 800.000đ/đêm</option>
                  <option value="Căn hộ 2 phòng ngủ">Căn hộ 2 phòng ngủ - Từ 1.200.000đ/đêm</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#143827] mb-1">
                    Ngày nhận phòng
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#143827]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#143827] mb-1">
                    Ngày trả phòng
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#143827]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#143827] mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#143827]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#143827] mb-1">
                    Số điện thoại / Zalo
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#143827]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143827] mb-1">
                  Ghi chú (Số người, giờ nhận phòng...)
                </label>
                <textarea
                  rows="2"
                  placeholder="VD: 2 người lớn, 1 bé nhỏ, cần nhận phòng sớm..."
                  className="w-full px-3 py-2 rounded-xl border border-[#D5C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#143827]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#143827] hover:bg-[#1C4D36] text-white py-3 rounded-xl font-medium text-sm transition-all shadow-md active:scale-95"
                >
                  Gửi yêu cầu đặt phòng
                </button>
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0055D4] text-white px-5 py-3 rounded-xl font-medium text-sm transition-all shadow-md active:scale-95"
                >
                  <span>Chat Zalo</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
