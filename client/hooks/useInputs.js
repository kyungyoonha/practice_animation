import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const useInput = (initalValue) => {
  const [inputs, setInputs] = useState(initalValue);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return { inputs, setInputs, onChange };
};

useInput.propTyes = {
  initalValue: PropTypes.object.isRequired,
};

export default useInput;
