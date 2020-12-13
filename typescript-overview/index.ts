class NumberHolder {
  value: number;
}

class StringHolder {
  value: string;
}

class BooleanHolder {
  value: boolean;
}

class ValueHolder<T> {
  value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value = 10;

const stringHolder = new ValueHolder<string>();
stringHolder.value = 'A String';

const booleanHolder = new ValueHolder<boolean>();
booleanHolder.value = true;
