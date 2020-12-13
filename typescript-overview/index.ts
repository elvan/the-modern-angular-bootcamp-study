class ValueHolder<T> {
  value: T;
}

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

valueWrapper<number>(10);
valueWrapper<string>('Ten');
valueWrapper<boolean>(true);
