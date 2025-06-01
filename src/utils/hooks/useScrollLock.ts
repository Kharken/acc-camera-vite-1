import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export const useScrollLock = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('scroll-lock');
    return () => {
      document.body.classList.remove('scroll-lock');
      navigate('/');
    };
  }, [navigate]);
};
