// productsService.js
const STORAGE_KEY = "eco_products_v1";

const SAMPLE = [
  { id: 1, name: "Panel Solar", price: 2500, stock: 10 },
  { id: 2, name: "Batería Recargable", price: 1500, stock: 5 },
];

export function getProducts() {
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

export function createProduct(payload) {
  const list = getProducts();
  const newItem = { ...payload, id: Date.now() };
  list.push(newItem);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return newItem;
}

export function updateProduct(id, payload) {
  const list = getProducts().map((p) => (p.id === id ? { ...payload, id } : p));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return list;
}

export function deleteProduct(id) {
  const list = getProducts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return list;
}
