export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({ id: 'some_id' }), // promise that automatically resolves itself
  },
};
