import React from 'react';
import { observer } from 'mobx-react-lite';

interface InputGroupProps {
  name: string;
  changeID: (id: number) => void;
  total: number;
}

const InputGroup: React.FC<InputGroupProps> = ({ name, changeID, total }) => {
  return (
    <div className='input-group mb-3'>
      <select
        onChange={(e) => changeID(parseInt(e.target.value))}
        className='form-select'
        id={name}
      >
        <option value='0'>Choose...</option>
        {[...Array(total).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {name} - {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default observer(InputGroup);
