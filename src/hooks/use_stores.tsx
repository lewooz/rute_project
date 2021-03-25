import { useContext } from 'react';
import { RootStore } from '../stores/root_store/root_store';
import { StoreContext } from '../store_provider/store_provider'


export const useStores = (): RootStore => useContext(StoreContext);