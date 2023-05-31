import React, { FC, useState } from 'react';
import { Button, DatePicker, Form, InputNumber } from "antd";
import { rules } from "../utils/rules";
import DestinationsAutoComplete from "./DestiantionAutoComplete";
import { Moment } from "moment";



const Filters: FC = (props) => {

    const [destination, setDestination] = useState<string>();
    const [dateFrom, setDateFrom] = useState<Date>();
    const [dateTo, setDateTo] = useState<Date>();
    const [guests, setGuests] = useState<number | null>();


    const selectDestination = (value: string) => {
        setDestination(value);
    };

    const selectFrom = (date: Moment | null) => {
        if (date) {
            setDateFrom(date.toDate())
        }
    }
    const selectTo = (date: Moment | null) => {
        if (date) {
            setDateTo(date.toDate())
        }
    }
    const submitForm = () => {
        console.log('submit')
    }

    return (
        <Form labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            layout={'inline'} onFinish={submitForm}
        >
            <Form.Item
                label="Destination"
                name="destination"
            >
                <DestinationsAutoComplete selectDestination={selectDestination} />
            </Form.Item>
            <Form.Item
                label="Date from"
                name="dateFrom"
                rules={[rules.isDateAfter("Invalid date")]}
            >
                <DatePicker
                    onChange={(date) => selectFrom(date)}
                />
            </Form.Item>
            <Form.Item
                label="Date to"
                name="dateTo"
                rules={[]}
            >
                <DatePicker
                    onChange={(date) => selectTo(date)}
                />
            </Form.Item>
            <Form.Item
                label="Guests"
                name="guest"
                rules={[]}
            >
                <InputNumber onChange={(value: number | null) => setGuests(value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Filters;
