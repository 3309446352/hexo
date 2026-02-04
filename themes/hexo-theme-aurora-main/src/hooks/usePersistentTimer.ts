// usePersistentTimer.js
import { ref, onMounted, onUnmounted } from 'vue'

export function usePersistentTimer(callback, interval = 12 * 60 * 60 * 1000) { // 默认12小时
  const isActive = ref(false)
  let lastExecutedKey = 'timer_lastExecuted'
  let isPageVisible = true

  // 检查并执行任务
  const checkAndExecute = async () => {
    const now = Date.now()
    const lastExecuted = parseInt(localStorage.getItem(lastExecutedKey) || '0')
    const nextExecutionTime = lastExecuted + interval

    // 如果已过下次执行时间，或从未执行过
    if (now >= nextExecutionTime) {
      try {
        await callback()
        console.log('持久化定时器任务执行成功')
        localStorage.setItem(lastExecutedKey, now.toString())
      } catch (error) {
        console.error('持久化定时器任务执行失败:', error)
      }
      // 计算下一次执行时间（基于本次执行时间点）
      scheduleNextExecution(now)
    } else {
      // 计算下一次执行时间（基于上次执行时间点）
      scheduleNextExecution(lastExecuted)
    }
  }

  // 安排下一次页面内的定时检查
  const scheduleNextExecution = (baseTime) => {
    const nextTime = baseTime + interval
    const delay = nextTime - Date.now()

    // 如果延迟时间超过24.8天，setTimeout 会溢出，需要循环设置[7](@ref)
    const maxDelay = 2 ** 31 - 1 // 24.8天
    if (delay > maxDelay) {
      // 先设置一个最大延迟的定时器，到期后递归检查
      setTimeout(() => {
        checkAndExecute()
      }, maxDelay)
    } else {
      setTimeout(() => {
        if (isPageVisible) { // 仅在页面可见时执行检查
          checkAndExecute()
        }
      }, delay)
    }
  }

  // 监听页面可见性变化（Page Visibility API）
  const handleVisibilityChange = () => {
    isPageVisible = !document.hidden
    if (isPageVisible) {
      // 页面从后台切换到前台时，立即检查一次
      checkAndExecute()
    }
  }

  const start = () => {
    isActive.value = true
    document.addEventListener('visibilitychange', handleVisibilityChange)
    // 组件挂载时立即检查一次
    checkAndExecute()
  }

  const stop = () => {
    isActive.value = false
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  }

  return {
    start,
    stop,
    isActive
  }
}
