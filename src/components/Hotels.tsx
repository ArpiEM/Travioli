import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import { Card, List,  Rate, Pagination, PaginationProps} from "antd";

const cardsCount = 10;

const Hotels: FC = () => {

    const { hotels } = useTypedSelector(state => state.hotels)

    const [current, setCurrent] = useState(1);

    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    return (
        <>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource={hotels.slice(cardsCount * (current - 1), cardsCount * (current - 1) + cardsCount )}
                renderItem={hotel => (
                    <List.Item>
                        <Card title={hotel.name} actions={[
                            <Rate disabled defaultValue={hotel.hotel_rating} />
                        ]}>
                            <p><span>Address: {hotel.city}, {hotel.address} </span></p>
                            <p><span>Phone: {hotel.phone_number} </span></p>
                        </Card>
                    </List.Item>
                )}
            />
            <Pagination current={current} showSizeChanger={false} onChange={onChange} total={hotels.length} />
        </>

    );
};

export default Hotels;
