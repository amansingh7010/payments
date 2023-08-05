export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({}), // promise that automatically resolves itself
  },
};
