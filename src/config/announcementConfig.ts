import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "LTW项目启动", // 公告标题，填空使用i18n字符串Key.announcement
  content: "LinkTheWorld以一种意想不到的方式启动了", // 公告内容
  closable: false, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "Learn More", // 链接文本
    url: "/about/", // 链接 URL
    external: false, // 内部链接
  },
};
