import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IDestinationsAutoComplete {
    selectDestination: (value: string) => void;
}

const DestinationsAutoComplete: React.FC<IDestinationsAutoComplete> = ({ selectDestination }) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const { destinations } = useTypedSelector(state => state.destinations);

    const handleSearch = (value: string) => {
        if (!value) {
            return setOptions([]);
        }
        const matchedValues = destinations.filter(d => d.name.toLowerCase().includes(value.toLowerCase()));
        setOptions(
            matchedValues.map((d) => ({ value: d.name }))
        );
    };

    const onSelect = (value: string) => {
        selectDestination(value);
    };

    return (
        <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input />
        </AutoComplete>
    );
};

export default DestinationsAutoComplete;