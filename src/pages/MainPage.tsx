import React, {FC, useEffect} from 'react';
import { Layout} from "antd";
import {useActions} from "../hooks/useActions";
import Filters from "../components/Filters";
import Hotels from "../components/Hotels";

const MainPage: FC = () => {
    const {fetchHotels, fetchDestinations} = useActions();

    useEffect(() => {
        fetchHotels()
        fetchDestinations();
    }, [fetchHotels, fetchDestinations])


    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Filters />
            <Hotels />
        </Layout>
    );
};

export default MainPage;
