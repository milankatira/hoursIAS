import providerModal from '../src/provider/provider.modal';

const provider = [
  new providerModal({
    title: 'provider1',
    url: 'test.com',
  }),
  new providerModal({
    title: 'provider2',
    url: 'test.com',
  }),
  new providerModal({
    title: 'provider3',
    url: 'test.com',
  }),
];

const addProvider = async () => {

  await providerModal.insertMany(provider);
  console.log('provider are added.');

};

export default addProvider;
