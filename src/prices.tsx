export const planPrices: {
  [key: string]: { monthly: number; yearly: number };
} = {
  arcade: {
    monthly: 9,
    yearly: 90,
  },
  advanced: {
    monthly: 12,
    yearly: 120,
  },
  pro: {
    monthly: 15,
    yearly: 150,
  },
};
export const addOnPrices: {
  [key: string]: { monthly: number; yearly: number };
} = {
  onlineService: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};
