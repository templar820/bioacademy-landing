export default function debounce(func, wait, immediate) {
  let timeout;

  // Эта функция выполняется, когда событие DOM вызвано.
  function executedFunction(...args) {
    // Сохраняем контекст this и любые параметры,
    // переданные в executedFunction.
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    // Функция, вызываемая по истечению времени debounce.
    const later = () => {
      // Нулевой timeout, чтобы указать, что debounce закончилась.
      timeout = null;

      // Вызываем функцию, если immediate !== true,
      // то есть, мы вызываем функцию в конце, после wait времени.
      if (!immediate) func.apply(context, args);
    };

    // Определяем, следует ли нам вызывать функцию в начале.
    const callNow = immediate && !timeout;

    // clearTimeout сбрасывает ожидание при каждом выполнении функции.
    // Это шаг, который предотвращает выполнение функции.
    clearTimeout(timeout);

    // Перезапускаем период ожидания debounce.
    // setTimeout возвращает истинное значение / truthy value
    // (оно отличается в web и node)
    timeout = setTimeout(later, wait);

    // Вызываем функцию в начале, если immediate === true
    if (callNow) func.apply(context, args);
  }

  executedFunction.cancel = () => {
    if (timeout) clearTimeout(timeout);
  };
  return executedFunction;
}
