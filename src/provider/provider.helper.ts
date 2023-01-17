import providerModal from './provider.modal';

export const getProvider = async (query: object) => {

  return await providerModal.find(query);

};
