type AddProps<T> = {
  items: T[];
  findCondition: (item: T) => boolean;
  newItem: T;
  onUpdate?: (existingItem: T) => void;
  onCreate?: () => void;
};

export function useAdd<T>({
  items,
  findCondition,
  newItem,
  onUpdate,
  onCreate,
}: AddProps<T>) {
  const existingItem = items.find(findCondition);

  if (existingItem && onUpdate) {
    // 기존 데이터가 있으면 업데이트
    onUpdate(existingItem);
  } else {
    // 기존 데이터가 없으면 새로 추가
    items.push(newItem);
    if (onCreate) onCreate();
  }

  return items;
}
