import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export const useToastService = () => {
  const toast = useToast();
  
  const showToast = (type, message) => {
    toast.open({ type, message, position: 'top-right', duraiton: 3000 });
  };

  return { showToast };
};