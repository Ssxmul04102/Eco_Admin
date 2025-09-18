// deliveriesService.js
const STORAGE_KEY = "eco_deliveries_v1";

const SAMPLE = [
  { id: 1, orderId: "#1001", deliveryPerson: "Luis Gómez", status: "En camino" },
  { id: 2, orderId: "#1002", deliveryPerson: "Ana Martínez", status: "Entregado" },
];

export function getDeliveries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE));
    return [...SAMPLE];
  }
  try {
    return JSON.parse(raw);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE));
    return [...SAMPLE];
  }
}

export function createDelivery(payload) {
  const list = getDeliveries();
  const newItem = { ...payload, id: Date.now() };
  list.push(newItem);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return newItem;
}

export function updateDelivery(id, payload) {
  const list = getDeliveries().map((d) => (d.id === id ? { ...payload, id } : d));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return list;
}

export function deleteDelivery(id) {
  const list = getDeliveries().filter((d) => d.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return list;
}
