import React from 'react';
import { Radio } from 'semantic-ui-react';

const SortToggle = ({ value, onChange }) => {
    return (
        <div className="sort-block">
            <Radio
                toggle
                onChange={onChange}
            />
            <div>Reverse order</div>
        </div>
    );
};

export default SortToggle;