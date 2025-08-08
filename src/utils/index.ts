import dayjs from 'dayjs';

/** 格式化时间 */
export const formatDateTime = (time: string | number | Date) => {
  return time ? dayjs(new Date(time)).format('YYYY-MM-DD HH:mm:ss') : 'N/A';
};

/** 用 JS 设置全局 CSS 变量 */
export const setCssVariableValue = (cssVariableName: string, cssVariableValue: string) => {
  try {
    document.documentElement.style.setProperty(cssVariableName, cssVariableValue);
  } catch (error) {
    console.error(error);
  }
};
